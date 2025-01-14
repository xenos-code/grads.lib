# This script is designed to plot the time series of
* COADS variables.  It can be executed using a command like
*
*     grads -bpc "plot.coads.variables"
*
* - RD November 2001.

function plot(arg)

"open 767605.hour.coads.ctl"
"sdfopen /home/rdanielson/model/out/767605.nc"
#"open datelist.coads.ctl"

tima  =  1
#timb  = 10
timb  = 9

dellat = 11
dellon = 25

position.3.1  = "0 0 45.0 130.0"    ;# 00 UTC 8             (upstream control)
position.3.2  = "0 0 46.0 135.0"
position.3.3  = "0 0 47.0 140.0"    ;# 00 UTC 9
position.3.4  = "0 0 48.0 145.0"
position.3.5  = "0 0 49.0 150.0"    ;# 00 UTC 10
position.3.6  = "0 0 50.0 155.0"
position.3.7  = "0 0 51.0 160.0"    ;# 00 UTC 11
position.3.8  = "0 0 52.0 165.0"
position.3.9  = "0 0 53.0 170.0"    ;# 00 UTC 12
position.3.10 = "x 0 54.0 175.0"
position.3.11 = "x 0 55.0 180.0"    ;# 00 UTC 13

position.4.1  = "x 0 25.0 175.0"    ;# 00 UTC 8             (downstream control)
position.4.2  = "x 0 30.0 180.0"
position.4.3  = "x 0 35.0 185.0"    ;# 00 UTC 9
position.4.4  = "0 0 40.0 193.0"
position.4.5  = "0 0 45.0 200.0"    ;# 00 UTC 10
position.4.6  = "0 0 50.0 207.0"
position.4.7  = "0 0 51.0 214.0"    ;# 00 UTC 11
position.4.8  = "0 0 51.0 214.0"
position.4.9  = "0 0 51.0 214.0"    ;# 00 UTC 12
position.4.10 = "0 0 51.0 214.0"
position.4.11 = "0 0 51.0 214.0"    ;# 00 UTC 13

var.0  = "stn"  ; plt.0  = 1 ; des.0  = "station ID"
var.1  = "b10"  ; plt.1  = 0 ; des.1  = "10-deg box"
var.2  = "ti"   ; plt.2  = 0 ; des.2  = "time indic."
var.3  = "li"   ; plt.3  = 0 ; des.3  = "lat/lon indic."
var.4  = "dck"  ; plt.4  = 1 ; des.4  = "deck"
var.5  = "sid"  ; plt.5  = 0 ; des.5  = "source id"
var.6  = "pt"   ; plt.6  = 1 ; des.6  = "platform type"
var.7  = "qi"   ; plt.7  = 0 ; des.7  = "quality indic. (currently unused)"
var.8  = "ds"   ; plt.8  = 0 ; des.8  = "dup status"
var.9  = "dc"   ; plt.9  = 0 ; des.9  = "dup check"
var.10 = "tc"   ; plt.10 = 0 ; des.10 = "track check (currently unused)"
var.11 = "pb"   ; plt.11 = 0 ; des.11 = "pressure bias (currently unused)"
var.12 = "di"   ; plt.12 = 0 ; des.12 = "wind dir. indic."
var.13 = "d"    ; plt.13 = 0 ; des.13 = "wind direction (+codes: 361=calm; 362=var.)"
var.14 = "wi"   ; plt.14 = 0 ; des.14 = "wind speed indic."
var.15 = "w"    ; plt.15 = 0 ; des.15 = "wind speed"
var.16 = "uwnd" ; plt.16 = 1 ; des.16 = "wind zonal component"
var.17 = "vwnd" ; plt.17 = 0 ; des.17 = "wind meridional component"
var.18 = "vi"   ; plt.18 = 0 ; des.18 = "vis. indic."
var.19 = "vv"   ; plt.19 = 1 ; des.19 = "visibility"
var.20 = "ww"   ; plt.20 = 1 ; des.20 = "present weather"
var.21 = "w1"   ; plt.21 = 1 ; des.21 = "past weather"
var.22 = "w2"   ; plt.22 = 0 ; des.22 = "2nd past weather"
var.23 = "slp"  ; plt.23 = 1 ; des.23 = "sea level pressure"
var.24 = "t1"   ; plt.24 = 0 ; des.24 = "temp. indic."
var.25 = "at"   ; plt.25 = 1 ; des.25 = "air temperature"
var.26 = "wbt"  ; plt.26 = 0 ; des.26 = "wet bulb temp."
var.27 = "dpt"  ; plt.27 = 0 ; des.27 = "dew point temp."
var.28 = "sst"  ; plt.28 = 0 ; des.28 = "sea surface temp."
var.29 = "si"   ; plt.29 = 0 ; des.29 = "SST method indic."
var.30 = "n"    ; plt.30 = 1 ; des.30 = "total cloud amt. (oktas)"
var.31 = "nh"   ; plt.31 = 0 ; des.31 = "lower cloud amt. (oktas)"
var.32 = "cl"   ; plt.32 = 1 ; des.32 = "low cloud type"
var.33 = "hi"   ; plt.33 = 0 ; des.33 = "cloud height indic."
var.34 = "h"    ; plt.34 = 0 ; des.34 = "cloud height"
var.35 = "cm"   ; plt.35 = 1 ; des.35 = "middle cloud type"
var.36 = "ch"   ; plt.36 = 1 ; des.36 = "high cloud type"
var.37 = "wd"   ; plt.37 = 0 ; des.37 = "wave direction"
var.38 = "wp"   ; plt.38 = 0 ; des.38 = "wave period"
var.39 = "wh"   ; plt.39 = 1 ; des.39 = "wave height"
var.40 = "sd"   ; plt.40 = 0 ; des.40 = "swell direction"
var.41 = "sp"   ; plt.41 = 0 ; des.41 = "swell period"
var.42 = "sh"   ; plt.42 = 1 ; des.42 = "swell height"
var.43 = "c1"   ; plt.43 = 1 ; des.43 = "country code"
var.44 = "c2"   ; plt.44 = 0 ; des.44 = "2nd country code"
var.45 = "sc"   ; plt.45 = 0 ; des.45 = "ship course"
var.46 = "ss"   ; plt.46 = 0 ; des.46 = "ship speed"
var.47 = "ushp" ; plt.47 = 0 ; des.47 = "ship zonal component"
var.48 = "vshp" ; plt.48 = 0 ; des.48 = "ship meridional component"
var.49 = "a"    ; plt.49 = 1 ; des.49 = "barometric tendency"
var.50 = "ppp"  ; plt.50 = 0 ; des.50 = "amt. of SLP change"
var.51 = "is"   ; plt.51 = 0 ; des.51 = "ice accretion"
var.52 = "es"   ; plt.52 = 0 ; des.52 = "ice thickness"
var.53 = "rs"   ; plt.53 = 1 ; des.53 = "ice accretion rate"
var.54 = "ii"   ; plt.54 = 1 ; des.54 = "id indic."
var.55 = "os"   ; plt.55 = 0 ; des.55 = "observation source"
var.56 = "op"   ; plt.56 = 0 ; des.56 = "observation plat."
var.57 = "t2"   ; plt.57 = 0 ; des.57 = "2nd temp. indic."
var.58 = "ix"   ; plt.58 = 0 ; des.58 = "stn/weather indic."
var.59 = "wx"   ; plt.59 = 0 ; des.59 = "wave per. indic."
var.60 = "sx"   ; plt.60 = 0 ; des.60 = "swell per. indic."
var.61 = "ird"  ; plt.61 = 0 ; des.61 = "IMM receipt date"
var.62 = "a6"   ; plt.62 = 0 ; des.62 = "allowance 6 flag"

vpage.1  = "0.0  4.4  0.0   2.6"
vpage.2  = "0.0  4.4  2.1   4.7"
vpage.3  = "0.0  4.4  4.2   6.8"
vpage.4  = "0.0  4.4  6.3   8.9"
vpage.5  = "0.0  4.4  8.4  11.0"
vpage.6  = "4.1  8.5  8.4  11.0"
vpage.7  = "4.1  8.5  6.3   8.9"
vpage.8  = "4.1  8.5  4.2   6.8"
vpage.9  = "4.1  8.5  2.1   4.7"
vpage.10 = "4.1  8.5  0.0   2.6"

#  plot the time series

a = 0
while (a <= 62)
  "clear"
  "set grads off"
  "set grid off"
  if (plt.a = 1)
    b = tima
    while (b <= timb)
      "set t "b
      "set vpage "vpage.b
      "set grads off"
      "set xlint 20"
      "set ylint 10"
      "run gui_view_grid "dellat" "dellon" "position.4.b
      "set clab off"
      "run disp_unshaded_nozero slp.2/100 8 940"
      "set clab on"
      "run disp_unshaded_nozero slp.2/100 24 940"

      "set digsiz 0.1"
      if (var.a = "at"  | var.a = "wbt" | var.a = "dpt" | var.a = "ppp")
        "d 10*"var.a
      else
        if (var.a = "wh" | var.a = "sh")
          "d 0.5*"var.a
        else
          if (var.a = "uwnd" | var.a = "ushp")
            "set digsiz 0.07"
            "set gxout model"
            "set mdlopts dig3"
            aa = a + 1
#            "d "var.a";"var.aa";0.0;0.0;0.0;0.0;20+n/2"
            "d "var.a";"var.aa
            "set gxout value"
            "set digsiz 0.1"
          else
            if (a = 0)
              "set stid on"
              "set gxout stnmark"
              "d b10-b10+1"
              "set stid off"
              "set gxout value"
            else
              "d "var.a
            endif
          endif
        endif
      endif

      "run gui_date"
      date = result
      "draw title "date
      b = b + 1
    endwhile

    "set vpage off"
    "set strsiz 0.15 0.15"
    "set string 1 c"
    "draw string 4.25 10.90 "des.a
    "run gui_print plot.coads."var.a
  endif
  a = a + 1
endwhile
"quit"
