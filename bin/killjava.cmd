@echo off

@REM taskkill /f /im jqs.exe
@REM taskkill /f /im javaw.exe
@REM taskkill /f /im java.exe
@REM taskkill /f /im geckodriver.exe
@REM taskkill /f /im chromedriver.exe
@REM taskkill /f /im node.exe

@rem wmic process where "name like '%java%'" delete
call wmic process where "name like '%%java%%'" delete
call wmic process where "name like '%%kotlin%%'" delete
call wmic process where "name like '%%gradle%%'" delete