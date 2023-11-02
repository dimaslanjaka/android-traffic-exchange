### upcoming update

> these **unchecked** features not yet published in current build

- [x] set support minimum Android LOLLIPOP
- [x] overriding deprecated methods
- [x] supress deprecated annotation
- [ ] C++ multiple architecture supports

## 1.0.8 - 11/02/2023
- add auto useragent by ip
  > useragent will changed every app restart based on **last ip** and **current ip**
- set minimum android requirement LOLLIPOP with Android SDK API 21
- fixed exchange **point reduced** when back button pressed

## 1.0.7 - 10/30/2023
- drop deprecated **on back button pressed** API
  > go back from webview flawesly
- fetch current ip asynchronously
  > increase startup load speed

## 1.0.6 - 10/30/2023
- fixed earning point system
- temporarily using default android webview instead of proxy client
  > some web resources cannot be loaded

## 1.0.5 - 10/29/2023
- Update global useragent when IP changed

## 1.0.4 - 10/29/2023
- fixed overriding referer
- fixed force closed when "reload time" in exchanger is empty
- fixed overriden headers

## 1.0.3 - 10/28/2023
- added spoof referrer
- add internet network available checker
- add sitemap.txt fetcher
- implement changelog on update dialog

## 1.0.2 - 10/26/2023
- fixed app force closed when points are insufficient
- fixed point not decreased each url rotated
- fixed exchange task handler
- add loading animation

## 1.0.1 - 10/26/2023
- fixed app force closed after account login

## 1.0.0 - 10/26/2023
- first release
