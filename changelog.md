<!-- 5 6 -->

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