@echo off

@rem wmic process where "name like '%java%'" delete
call wmic process where "name like '%%java%%'" delete
call wmic process where "name like '%%kotlin%%'" delete
call wmic process where "name like '%%gradle%%'" delete

taskkill /f /im jqs.exe
taskkill /f /im javaw.exe
taskkill /f /im java.exe
taskkill /f /im javac.exe
