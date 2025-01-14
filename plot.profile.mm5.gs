# This script is designed to plot some kind of profile.  It
* can be executed using a command like
*
*     grads -bpc "plot.profile.mm5 65 215 25 215 MMOUT_DOMAIN1.2001-02-18.echo.ctl"
*     grads -bpc "plot.profile.mm5 65 195 20 195 MMOUT_DOMAIN1.2001-02-25.echo.ctl"
*
* where the arguments define the position of the profile - RD February 2001.

function prof(args)

tmpfile = subwrd(args,5)
file = "MMOUT_DOMAIN1."substr(tmpfile,15,99)
prof = subwrd(args,1)"."subwrd(args,2)"."subwrd(args,3)"."subwrd(args,4)

"open "file
"set t 1"
"set lev 300"
"set lat 22.5 67.5"
"set lon 145 235"

* read the bottom label

filenama = file".dump"
filestat = read(filenama)
bottom = sublin(filestat,2)
fileclose = close(filenama)

* write the main and 3D display scripts

filenama = '/home/rdanielson/prog/graphics.grads/lib/gui_disp.gs'
filenamb = '/home/rdanielson/prog/graphics.grads/lib/gui_dispp.gs'
outline = ''
filestat = write(filenama,outline)
messaga = sublin(filestat,1)
filestat = write(filenamb,outline)
messagb = sublin(filestat,1)
if (messaga != 0 | messagb != 0)
  say 'either error 'messaga' in opening and writing to 'filenama
  say '    or error 'messagb' in opening and writing to 'filenamb
endif

outline = '"set grads off"'
filewrite = write(filenama,outline)
outline = '"set grid off"'
filewrite = write(filenama,outline)
outline = '"set cint 6"'
filewrite = write(filenama,outline)
outline = '"d pslv"'
filewrite = write(filenama,outline)
outline = '"set cthick 10"'
filewrite = write(filenama,outline)
outline = '"set cint 200"'
filewrite = write(filenama,outline)
outline = '"d h"'
filewrite = write(filenama,outline)
outline = '"set cthick 4"'
filewrite = write(filenama,outline)
outline = '"run gui_header date"'
filewrite = write(filenama,outline)
fileclose = close(filenama)

outline = '"set grads off"'
filewrite = write(filenamb,outline)
outline = '"set grid off"'
filewrite = write(filenamb,outline)
outline = '"set zlog on"'
filewrite = write(filenamb,outline)
outline = '"set cthick 10"'
filewrite = write(filenamb,outline)
outline = '"set cint 2"'
filewrite = write(filenamb,outline)
outline = '"d pv"'
filewrite = write(filenamb,outline)
outline = '"set cthick 4"'
filewrite = write(filenamb,outline)
outline = '"set cint 10"'
filewrite = write(filenamb,outline)
outline = '"d mag(u,v)"'
filewrite = write(filenamb,outline)
outline = '"run gui_headerp date"'
filewrite = write(filenamb,outline)
fileclose = close(filenamb)

"run gui_profilep "args

"set string 1 bl 4"
"set strsiz 0.1 0.1"
"set line 1 1"
"draw line 2.5 10.8 3.0 10.8"
"draw string 3.25 10.8 "file
"set strsiz 0.09 0.09"
"draw string 0.0 0.2 "bottom

"run gui_print "file"."prof".contoured"
"clear"

* re-write the main and 3D display scripts for the second file

outline = ''
filestat = write(filenama,outline)
messaga = sublin(filestat,1)
filestat = write(filenamb,outline)
messagb = sublin(filestat,1)
if (messaga != 0 | messagb != 0)
  say 'either error 'messaga' in opening and writing to 'filenama
  say '    or error 'messagb' in opening and writing to 'filenamb
endif

outline = '"set grads off"'
filewrite = write(filenama,outline)
outline = '"set grid off"'
filewrite = write(filenama,outline)
outline = '"set cstyle 3"'
filewrite = write(filenama,outline)
outline = '"set cint 6"'
filewrite = write(filenama,outline)
outline = '"d pslv"'
filewrite = write(filenama,outline)
outline = '"set cstyle 3"'
filewrite = write(filenama,outline)
outline = '"set cthick 10"'
filewrite = write(filenama,outline)
outline = '"set cint 200"'
filewrite = write(filenama,outline)
outline = '"d h"'
filewrite = write(filenama,outline)
outline = '"set cthick 4"'
filewrite = write(filenama,outline)
outline = '"run gui_header date"'
filewrite = write(filenama,outline)
fileclose = close(filenama)

outline = '"set grads off"'
filewrite = write(filenamb,outline)
outline = '"set grid off"'
filewrite = write(filenamb,outline)
outline = '"set zlog on"'
filewrite = write(filenamb,outline)
outline = '"set cstyle 3"'
filewrite = write(filenamb,outline)
outline = '"set cthick 10"'
filewrite = write(filenamb,outline)
outline = '"set cint 2"'
filewrite = write(filenamb,outline)
outline = '"d pv"'
filewrite = write(filenamb,outline)
outline = '"set cstyle 3"'
filewrite = write(filenamb,outline)
outline = '"set cthick 4"'
filewrite = write(filenamb,outline)
outline = '"set cint 10"'
filewrite = write(filenamb,outline)
outline = '"d mag(u,v)"'
filewrite = write(filenamb,outline)
outline = '"run gui_headerp date"'
filewrite = write(filenamb,outline)
fileclose = close(filenamb)

"run gui_profilep "args
"close 1"

"set string 1 bl 4"
"set strsiz 0.1 0.1"
"set line 1 3"
"draw line 2.5 10.6 3.0 10.6"
"draw string 3.25 10.6 "file
"set strsiz 0.09 0.09"
"draw string 0.0 0.0 "bottom

"run gui_print "file"."prof".dashed"
"quit"
