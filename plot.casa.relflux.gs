# This script is designed to plot the central pressure values
* for different simulations (in time)
*
*     grads -bpc "plot.casa.relflux"
*
* where no data files are required - RD August 2002.
* %%BoundingBox: 127 450 585 757
function compare(arg)

"clear"
"run disp_colours"
"set grid off"
"set clopts 1 3 .16"
"set xlopts 1 4 .16"
"set ylopts 1 4 .16"

"sdfopen /home/rdanielson/model/out/767605.group.velocity.nc"
"sdfopen /home/rdanielson/model/out/767605.group.velocity.nc.nonlinear"

var.1 = "cgeu.2"
var.2 = "cgeu"
var.3 = "cgeu.2-cgeu"

label.1 = "Nonlinear"
label.2 = "Linear"
label.3 = ""

mrk.1 = 5
mrk.2 = 3
mrk.3 = 0

"set missconn on"
"set vpage 0 7.5 6.8 11"
"set grads off"
"set vrange 0 40"
"set ylint 10"
"set t 1 21"
"set digsiz 0.1"

a = 1
while (a < 4)
  "set xlabs |  |  |  |  | "
  "set ccolor 1"
  if (a < 3)
    "set cstyle 1"
  else
    "set cstyle 3"
  endif
  "define var = "var.a
  "set cmark "mrk.a
  "d var"
  a = a + 1
endwhile

"set vpage off"
"set strsiz 0.17 0.17"
"set string 1 l"
x = 2.3
x2 = 2.5
y = 10.0
dely = 0.24
mrksiz = 0.13
a = 1
while (a < 3)
  "draw mark "mrk.a" "x" "y" "mrksiz
  "draw string "x2" "y" "label.a
  y = y - dely/2.0
  y = y - dely
  a = a + 1
endwhile
"set string 1 c"
"set strsiz 0.22 0.22"
"draw string 4.5 10.55 a) Eddy Energy Flux (m s`a-1`n)"

var.1 = "cgeu"
var.2 = "cgwu"
var.3 = "numa"
var.4 = "numc"

label.1 = "Eddy Energy"
label.2 = "Wave Activity"
label.3 = "Ageostrophic Geopotential"
label.4 = "Stationary Wave Activity"

mrk.1 = 3
mrk.2 = 2
mrk.3 = 3
mrk.4 = 2

"set missconn on"
"set vpage 0 7.5 3.4 7.6"
"set grads off"
"set vrange 0 40"
"set ylint 10"
"set t 1 21"
"set digsiz 0.1"

a = 1
while (a < 5)
  "set xlabs |  |  |  |  | "
  "set ccolor 1"
  if (a < 3)
    "set cstyle 1"
  else
    "set cstyle 3"
  endif
  "define var = "var.a
  "set cmark "mrk.a
  "d var"
  a = a + 1
endwhile

"set vpage off"
"set strsiz 0.17 0.17"
"set string 1 l"
x = 2.3
x2 = 2.5
y = 6.6
dely = 0.24
mrksiz = 0.13
a = 1
while (a < 3)
  "draw mark "mrk.a" "x" "y" "mrksiz
  "draw string "x2" "y" "label.a
  y = y - dely/2.0
  y = y - dely
  a = a + 1
endwhile
"set string 1 c"
"set strsiz 0.22 0.22"
"draw string 4.5 7.15 b) Linear Flux (m s`a-1`n)"

var.1 = "numa/cgeu*100"
var.2 = "numc/cgwu*100"

label.1 = "Ageostrophic Geopotential"
label.2 = "Stationary Wave Activity"

mrk.1 = 3
mrk.2 = 2

"set missconn on"
"set vpage 0 7.5 0 4.2"
"set grads off"
"set vrange 0 60"
"set ylint 10"
"set t 1 21"
"set digsiz 0.1"

a = 1
while (a < 3)
  "set ccolor 1"
  "set cstyle 3"
  "define var = "var.a
  "set cmark "mrk.a
  "d var"
  a = a + 1
endwhile

"set vpage off"
"set strsiz 0.17 0.17"
"set string 1 l"
x = 2.3
x2 = 2.5
y = 3.2
dely = 0.24
mrksiz = 0.13
a = 2
while (a > 0)
  "draw mark "mrk.a" "x" "y" "mrksiz
  "draw string "x2" "y" "label.a
  y = y - dely/2.0
  y = y - dely
  a = a - 1
endwhile
"set string 1 c"
"set strsiz 0.22 0.22"
"draw string 4.5 3.75 c) Relative Flux Fraction (%)"

"run gui_print plot.casa.relflux"
"quit"
