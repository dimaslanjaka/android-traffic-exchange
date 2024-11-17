<?php

/*
  ----------------------------------------------------------------------------
  LICENSE
  ----------------------------------------------------------------------------
  This file is part of Proxy Checker.

  Proxy Checker is free software: you can redistribute it and/or modify
  it under the terms of the GNU General Public License as published by
  the Free Software Foundation, either version 3 of the License, or
  (at your option) any later version.

  Proxy Checker is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU General Public License for more details.

  You should have received a copy of the GNU General Public License
  along with Proxy Checker.  If not, see <https://www.gnu.org/licenses/>.

  ----------------------------------------------------------------------------
  Copyright (c) 2024 Dimas lanjaka
  ----------------------------------------------------------------------------
  This project is licensed under the GNU General Public License v3.0
  For full license details, please visit: https://www.gnu.org/licenses/gpl-3.0.html

  If you have any inquiries regarding the license or permissions, please contact:

  Name: Dimas Lanjaka
  Website: https://www.webmanajemen.com
  Email: dimaslanjaka@gmail.com
*/

// debug all errors
error_reporting(E_ALL);
ini_set('display_errors', '1');

// ignore limitation if exists
if (function_exists('set_time_limit')) {
  call_user_func('set_time_limit', 0);
}

// ignore user abort execution to false
if (function_exists('ignore_user_abort')) {
  call_user_func('ignore_user_abort', false);
}

// set output buffering to zero
ini_set('output_buffering', 0);

// avoid error while running inside PHP_SAPI CLI
if (function_exists('header')) {
  header('Content-Type: text/plain');
  header('X-Powered-By: L3n4r0x');
}

// set default timezone
date_default_timezone_set('Asia/Jakarta');

/**
 * FUNCTIONS (DO NOT EDIT)
 */

// limit execution time seconds unit
$maxExecutionTime = 120;
$startTime = microtime(true);

// Specify the file path
$filePath = __DIR__ . "/proxies.txt";
$workingPath = __DIR__ . "/working.txt";
$workingProxies = [];

// remove duplicate proxies
removeDuplicateLines($filePath);

/**
 * run proxies check shuffled
 */
function shuffleChecks()
{
  global $filePath, $workingPath, $workingProxies;

  // Read lines of the file into an array
  $lines = file($filePath, FILE_IGNORE_NEW_LINES);

  // Shuffle the array
  shuffle($lines);

  // Iterate through the shuffled lines
  foreach ($lines as $line) {
    if (checkProxyLine($line) == "break") break;
  }

  // rewrite all working proxies
  if (count($workingProxies) > 1) file_put_contents($workingPath, join("\n", $workingProxies));
}

/**
 * run proxies check sequentally
 */
function sequentalChecks()
{
  global $filePath, $workingPath, $workingProxies;

  // Open the file for reading
  $fileHandle = fopen($filePath, "r");

  // Check if file opened successfully
  if ($fileHandle) {
    // Loop through each line until the end of the file
    while (($line = fgets($fileHandle)) !== false) {
      if (checkProxyLine($line) == "break") break;
    }

    // rewrite all working proxies
    if (count($workingProxies) > 1) file_put_contents($workingPath, join("\n", $workingProxies));

    // Close the file handle
    fclose($fileHandle);
  } else {
    // File opening failed, handle error
    echo "Failed to open file.";
  }
}

/**
 * check single proxy and append into global working proxies
 * @return string break, success, failed
 * * break: the execution time excedeed
 * * success: proxy working
 * * failed: proxy not working
 */
function checkProxyLine($line)
{
  global $startTime, $maxExecutionTime, $workingPath, $workingProxies;
  // Check if the elapsed time exceeds the limit
  if (microtime(true) - $startTime > $maxExecutionTime) {
    // Execution time exceeded, break out of the loop
    return "break";
  }
  $proxy = trim($line);
  // Output the line
  if (checkProxy($proxy)) {
    echo "$proxy working";
    $latency = checkProxyLatency($proxy);
    echo " latency $latency ms\n";
    if (!isCLI()) {
      // LIVE output buffering on web server
      flush();
      ob_flush();
    }
    $item = "$proxy|$latency";
    if (!in_array($item, $workingProxies)) {
      // If the item doesn't exist, push it into the array
      $workingProxies[] = $item;
    }
    // write 2 proxies (prevent blocking I/O)
    // and write each 5th
    $cp = count($workingProxies);
    if ($cp == 2 || $cp % 5 == 0) file_put_contents($workingPath, join("\n", $workingProxies));
    return "success";
  } else {
    echo "$proxy not working\n";
    return "failed";
  }
}

/**
 * check http proxy latency
 */
function checkProxyLatency($proxy)
{
  $start = microtime(true); // Start time

  $ch = curl_init();
  curl_setopt($ch, CURLOPT_URL, 'https://www.example.com'); // URL to test connectivity
  curl_setopt($ch, CURLOPT_PROXY, $proxy); // Proxy address
  curl_setopt($ch, CURLOPT_PROXYTYPE, CURLPROXY_HTTP); // Specify proxy type, adjust accordingly

  curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 10); // Set maximum connection time
  curl_setopt($ch, CURLOPT_TIMEOUT, 10); // Set maximum response time

  curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
  curl_setopt($ch, CURLOPT_HEADER, true);

  $response = curl_exec($ch);
  $info = curl_getinfo($ch);

  curl_close($ch);

  $end = microtime(true); // End time

  if ($response === false || $info['http_code'] != 200) {
    return -1; // Proxy not working or unable to connect
  }

  $latency = round(($end - $start) * 1000); // Convert to milliseconds

  return $latency; // Latency in milliseconds
}

/**
 * check http proxy
 */
function checkProxy($proxy)
{
  $ch = curl_init();
  curl_setopt($ch, CURLOPT_URL, 'https://www.example.com'); // URL to test connectivity
  curl_setopt($ch, CURLOPT_PROXY, $proxy); // Proxy address
  curl_setopt($ch, CURLOPT_PROXYTYPE, CURLPROXY_HTTP); // Specify proxy type, adjust accordingly

  curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 10); // Set maximum connection time
  curl_setopt($ch, CURLOPT_TIMEOUT, 10); // Set maximum response time

  curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
  curl_setopt($ch, CURLOPT_HEADER, true);

  $response = curl_exec($ch);
  $info = curl_getinfo($ch);

  curl_close($ch);

  if ($response === false || $info['http_code'] != 200) {
    return false; // Proxy not working or unable to connect
  }

  return true; // Proxy working
}

/**
 * check current thread is using CLI
 */
function isCLI()
{
  return (php_sapi_name() === 'cli' || defined('STDIN') || (empty($_SERVER['REMOTE_ADDR']) && !isset($_SERVER['HTTP_USER_AGENT']) && count($_SERVER['argv']) > 0));
}

/**
 * remove duplicate lines from file
 */
function removeDuplicateLines($filePath)
{
  // Read the file into an array, each line as an element
  $lines = file($filePath, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);

  // Remove duplicate lines
  $lines = array_unique($lines);

  // Write the modified lines back to the file
  file_put_contents($filePath, implode("\n", $lines));
}

/**
 * FUNCTIONS ENDS
 */

// main script
shuffleChecks();
// sequentalChecks();