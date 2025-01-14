* This script is designed to plot a SAR backscatter cross section
* with observations overlayed.  It can be executed using a command like
*
*     grads -bpc "plot.sar.sigo.uwnd 30Mar04_43859_01.sar.nc"
*
* - RD April 2004.

function plot(args)

file = subwrd(args,1)

* isolate the data file name (following the path name)

a = 1
b = 1
ret = substr(args,a,1)
while (ret != "")
  if (b = 1 & ret = ".")
    b = a
  endif
  a = a + 1
  ret = substr(args,a,1)
endwhile
b = b - 1
stem = substr(args,1,b)

#"sdfopen "args
"sdfopen 07Oct04_46589_02.sar.nc.est.local.lowres"
"sdfopen 07Oct04_46589_02.sar.nc.est.global.lowres"

#"open "stem".coads.ctl"
#"sdfopen "stem".sar.cmod5.vector.nc"
#"sdfopen "stem".sar.wind.nc"
#"set x 70 620"
#"set y 200 500"

"clear"
"set grads off"
"set grid off"
"set xlab off"
"set ylab off"
"set digsiz 0.09"

#"set ccols   9  14   4  11   5  13   3  10   7 12  8  2  6 15  9 14  4  11  5 13  3 10  7 12"
#"set clevs -40 -24 -22 -20 -18 -16 -14 -12 -10 -8 -6 -4 -2  0  2  4  6  8  10 12 14 16 18 20"
"set gxout shaded"
"d pow(uwnd*uwnd+vwnd*vwnd,0.5) - pow(uwnd.2*uwnd.2+vwnd.2*vwnd.2,0.5)"
"run gui_cbarn 1 0 4.25 0.25"
"set grads off"
"set gxout contour"
"set clevs 0"
"set clab off"
"set cthick 10"
"set ccolor 15"
"d land"

#"set gxout barb"
#"set cthick 10"
#"set digsiz 0.1"
#"d skip(uwnd,60,60);vwnd"
#"d skip(uwnd,3,3);vwnd"

#"set gxout model"
#"set mdlopts dig3"
#"set ccolor 1"
#"set cthick 100"
#"set digsiz 0.22"
#"d uwnd.2;vwnd.2"
#"set gxout contour"

fila = stem"_sig0.hdr"
say "reading "fila
filestat = read(fila)
line = sublin(filestat,2)
filestat = read(fila)
line = sublin(filestat,2)
filestat = read(fila)
line = sublin(filestat,2)
filestat = read(fila)
line = sublin(filestat,2)
filestat = read(fila)
line = sublin(filestat,2)
direction = subwrd(line,2)

filestat = read(fila)
line = sublin(filestat,2)
filestat = read(fila)
line = sublin(filestat,2)
beam = subwrd(line,2)

filestat = read(fila)
line = sublin(filestat,2)
filestat = read(fila)
line = sublin(filestat,2)
filestat = read(fila)
line = sublin(filestat,2)
date = subwrd(line,2)
time = subwrd(line,3)

"draw title "direction" "beam" "date" 10 UTC"
#"q gxinfo"
#rec = sublin(result,2)
#pagex = subwrd(rec,4)
#pagey = subwrd(rec,6)
#y = pagey + 0.1
#"set string 1 c 5"
#pagex = pagex / 2
#"draw string "pagex" 0.3 "time

#"run gui_header date"
#"set strsiz 0.08 0.08"
#"set strsiz 0.1 0.1"
#"run disp_sar_latlon"

"run gui_print plot."stem
say "printim plot."stem".gif gif white x850 y1100"
    "printim plot."stem".gif gif white x850 y1100"
"quit"
