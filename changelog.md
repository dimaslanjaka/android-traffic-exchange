> When the updater not work, you can download **manager.apk**
> at [GitHub Repository](https://github.com/dimaslanjaka/android-traffic-exchange/tree/master/release)
>
> when you got crash, try clear data first and re-open **DL Exchanger**
>
> Untested **Android 14**

## 3.0.0

Major changes
- Login system
- Point system **removed**
- Subscription system

> avoid thread IO suspension in Main thread, were migrated into lightweight database system

Patch changes
- Exchange visit for free user only triggered every 5th url rotation
  > Graph
  > earn view -> your view -> your view -> your view -> your view -> your view -> earn view -> your view -> and more

New app beta test
- Multi socks proxy VPN

New app launch
- DL Traffic Lite (chromium browser only)
  - fix scroll active even deactivated from settings

## 2.1.4
- Fix firefox url settings data not saved
- Fix point reset unexpectedly
- Update exchanger chromium UI
- Improving UI performance by implementing background thread
- Change encryption method database
- Improving encoding charset JNI
- Rollback to minimum **Android Lolipop**
- Improving stability for old android version
- Improving permission manager
  > request full storage access permission to store data, cookie, cache
- Update UI **Manager**
- Add snapshot release downloader to **Manager**

New app beta test
- DL Traffic Lite (chromium browser only)

## 2.1.3
- Fix ANR window timeout
- Fix ANR backported hangs
- Fix ARM backported lifecycle
- Required **Full Storage Permission** to run

## 2.1.2
- Drop built-in **Update Manager**
  > use **DL Manager** to update **DL Exchanger**
- Fix force closed by null pointer certificate
- Fix database reference not loaded when user not logged in

## 2.1.1
- Bypass SSL/TLS verification (SSL pinning) through proxied network
- <input type="checkbox" checked> Firefox scroll when page fully loaded
- Fix C++ point system

## 2.1.0
- Set timezone automatically when installed as system app
- TLS certificate overtired
  > let our browser connection using their own certificate
<!-- - Discourage from app insight. -->
<!--   Anonymizing exchanger package name from other apps inspection -->
<!--   > preventing other vendor finds out our app from get banned -->

## 2.0.0
- first deployment firefox browser engine
  > Might some function not working, let me know
- Implement swipe scroll to firefox (Scroll like humans)
- Minimum version for **Android 8.0 (Oreo): API level 26**
- **Homepage** now scrollable for small screen density
- Increase performance on **Homepage** layout
- Bundle all architecture to single apk
  > preventing crash while opening customized firefox browser
  > on non-suitable processor architecture

## 1.1.2
- fixed force close by JSON serialize/deserializer
- fixed force close by missconfigure data model
- add about activity
  > print global configs

## 1.1.1 - 15/11/2023
- exchanger: add option **scroll to top** automatically
- exchanger: fixed app unable start
- exchanger: fixed force close on exchanger activity
- clear global cookies when ip changed
  > useful for unique visits
- destroy scroll event every session ended

## 1.1.0 - 04/11/2023
- fixed app not started when user not logged in
- fixed global config callback not called
- chore(login): back to main activity on back button pressed
- [**release app manager**](https://github.com/dimaslanjaka/android-traffic-exchange/raw/master/release/manager-release.apk)
- [x] set support minimum Android LOLLIPOP
- [x] overriding deprecated methods
- [x] supress deprecated annotation
- [x] C++ multiple architecture supports

## 1.0.8 - 02/11/2023
- add auto useragent by ip
  > useragent will changed every app restart based on **last ip** and **current ip**
- set minimum android requirement LOLLIPOP with Android SDK API 21
- fixed exchange **point reduced** when back button pressed
- add splash activity
  > check user ip, global agent change by ip

## 1.0.7 - 30/10/2023
- drop deprecated **on back button pressed** API
  > go back from webview flawesly
- fetch current ip asynchronously
  > increase startup load speed

## 1.0.6 - 30/10/2023
- fixed earning point system
- temporarily using default android webview instead of proxy client
  > some web resources cannot be loaded

## 1.0.5 - 29/10/2023
- Update global useragent when IP changed

## 1.0.4 - 29/10/2023
- fixed overriding referer
- fixed force closed when "reload time" in exchanger is empty
- fixed overriden headers

## 1.0.3 - 28/10/2023
- added spoof referrer
- add internet network available checker
- add sitemap.txt fetcher
- implement changelog on update dialog

## 1.0.2 - 26/10/2023
- fixed app force closed when points are insufficient
- fixed point not decreased each url rotated
- fixed exchange task handler
- add loading animation

## 1.0.1 - 26/10/2023
- fixed app force closed after account login

## 1.0.0 - 26/10/2023
- first release
