# This script is designed to plot the time series of
* budget terms.  It can be executed using a command like
*
*     grads -bpc "plot.individual.budget.eke.table"
*     grads -bpc "plot.individual.budget.eke.table 2"
*
* - RD May 2002.

function doit(args)
number = subwrd(args,1)

tag.1  = 756922 ; date.1  = "1975-10-05-00" ; tim.1.1  =  9 ; tim.1.2  = 13 ; tim.1.3  = 15 ; shift.1  = -10
tag.2  = 756100 ; date.2  = "1975-10-28-00" ; tim.2.1  =  9 ; tim.2.2  = 13 ; tim.2.3  = 19 ; shift.2  = -15
tag.3  = 756148 ; date.3  = "1975-11-13-00" ; tim.3.1  =  5 ; tim.3.2  = 11 ; tim.3.3  = 15 ; shift.3  = 10
tag.4  = 756267 ; date.4  = "1975-12-18-00" ; tim.4.1  = 11 ; tim.4.2  = 15 ; tim.4.3  = 19 ; shift.4  = -10
tag.5  = 756760 ; date.5  = "1976-02-08-00" ; tim.5.1  =  7 ; tim.5.2  = 11 ; tim.5.3  = 15 ; shift.5  = -15
tag.6  = 756903 ; date.6  = "1976-02-15-12" ; tim.6.1  =  5 ; tim.6.2  =  7 ; tim.6.3  = 11 ; shift.6  =  0
tag.7  = 756585 ; date.7  = "1976-03-09-12" ; tim.7.1  =  7 ; tim.7.2  = 11 ; tim.7.3  = 17 ; shift.7  =  0
tag.8  = 756609 ; date.8  = "1976-03-15-12" ; tim.8.1  =  7 ; tim.8.2  = 11 ; tim.8.3  = 15 ; shift.8  = -5
tag.9  = 756623 ; date.9  = "1976-03-20-00" ; tim.9.1  =  5 ; tim.9.2  =  9 ; tim.9.3  = 13 ; shift.9  = -15
tag.10 = 767030 ; date.10 = "1976-10-06-00" ; tim.10.1 =  7 ; tim.10.2 = 11 ; tim.10.3 = 13 ; shift.10 =  0
tag.11 = 767152 ; date.11 = "1976-11-13-12" ; tim.11.1 = 11 ; tim.11.2 = 15 ; tim.11.3 = 17 ; shift.11 = -15
tag.12 = 767185 ; date.12 = "1976-11-20-00" ; tim.12.1 =  7 ; tim.12.2 = 11 ; tim.12.3 = 13 ; shift.12 = -15
tag.13 = 767474 ; date.13 = "1977-02-01-00" ; tim.13.1 =  3 ; tim.13.2 =  9 ; tim.13.3 = 13 ; shift.13 =  0
tag.14 = 767544 ; date.14 = "1977-02-19-12" ; tim.14.1 =  7 ; tim.14.2 = 11 ; tim.14.3 = 15 ; shift.14 = -15
tag.15 = 767605 ; date.15 = "1977-03-09-12" ; tim.15.1 =  5 ; tim.15.2 =  9 ; tim.15.3 = 13 ; shift.15 = -10
tag.16 = 778128 ; date.16 = "1977-11-17-00" ; tim.16.1 =  9 ; tim.16.2 = 11 ; tim.16.3 = 13 ; shift.16 = -15
tag.17 = 778209 ; date.17 = "1977-12-14-00" ; tim.17.1 =  3 ; tim.17.2 = 11 ; tim.17.3 = 15 ; shift.17 =  0
tag.18 = 778405 ; date.18 = "1978-02-17-00" ; tim.18.1 =  9 ; tim.18.2 = 11 ; tim.18.3 = 15 ; shift.18 = -15
tag.19 = 789177 ; date.19 = "1978-12-04-00" ; tim.19.1 =  7 ; tim.19.2 = 11 ; tim.19.3 = 17 ; shift.19 = -10
tag.20 = 789371 ; date.20 = "1979-02-03-12" ; tim.20.1 =  5 ; tim.20.2 =  9 ; tim.20.3 = 13 ; shift.20 = -10
tag.21 = 790070 ; date.21 = "1979-10-21-00" ; tim.21.1 =  5 ; tim.21.2 =  9 ; tim.21.3 = 13 ; shift.21 = -15
tag.22 = 790190 ; date.22 = "1979-11-26-12" ; tim.22.1 =  9 ; tim.22.2 = 11 ; tim.22.3 = 13 ; shift.22 = -10
tag.23 = 790278 ; date.23 = "1979-12-22-12" ; tim.23.1 =  9 ; tim.23.2 = 11 ; tim.23.3 = 13 ; shift.23 = -15
tag.24 = 801181 ; date.24 = "1980-11-28-12" ; tim.24.1 =  7 ; tim.24.2 = 11 ; tim.24.3 = 13 ; shift.24 = -15
tag.25 = 801289 ; date.25 = "1980-12-24-12" ; tim.25.1 =  9 ; tim.25.2 = 11 ; tim.25.3 = 13 ; shift.25 = -15
tag.26 = 801866 ; date.26 = "1981-01-11-12" ; tim.26.1 =  7 ; tim.26.2 =  9 ; tim.26.3 = 13 ; shift.26 = -15
tag.27 = 801356 ; date.27 = "1981-01-17-12" ; tim.27.1 =  5 ; tim.27.2 =  9 ; tim.27.3 = 11 ; shift.27 = -15
tag.28 = 801434 ; date.28 = "1981-02-12-12" ; tim.28.1 =  3 ; tim.28.2 = 11 ; tim.28.3 = 15 ; shift.28 = -10
tag.29 = 801460 ; date.29 = "1981-02-17-12" ; tim.29.1 =  5 ; tim.29.2 =  7 ; tim.29.3 = 11 ; shift.29 = -5
tag.30 = 801501 ; date.30 = "1981-03-05-12" ; tim.30.1 =  5 ; tim.30.2 =  9 ; tim.30.3 = 13 ; shift.30 = -5
tag.31 = 812831 ; date.31 = "1981-12-17-00" ; tim.31.1 =  9 ; tim.31.2 = 11 ; tim.31.3 = 13 ; shift.31 = -15
tag.32 = 823448 ; date.32 = "1983-02-14-12" ; tim.32.1 =  9 ; tim.32.2 = 11 ; tim.32.3 = 13 ; shift.32 = -10
tag.33 = 823537 ; date.33 = "1983-03-14-00" ; tim.33.1 = 13 ; tim.33.2 = 17 ; tim.33.3 = 19 ; shift.33 = -10
tag.34 = 834071 ; date.34 = "1983-10-23-12" ; tim.34.1 = 13 ; tim.34.2 = 15 ; tim.34.3 = 17 ; shift.34 = -15
tag.35 = 834297 ; date.35 = "1983-12-24-00" ; tim.35.1 =  5 ; tim.35.2 =  7 ; tim.35.3 = 11 ; shift.35 = -10
tag.36 = 834607 ; date.36 = "1984-03-26-12" ; tim.36.1 =  7 ; tim.36.2 =  9 ; tim.36.3 = 11 ; shift.36 = -15
tag.37 = 845805 ; date.37 = "1984-10-11-12" ; tim.37.1 =  7 ; tim.37.2 =  9 ; tim.37.3 = 13 ; shift.37 = -10
tag.38 = 845072 ; date.38 = "1984-10-23-00" ; tim.38.1 =  3 ; tim.38.2 =  7 ; tim.38.3 = 11 ; shift.38 = -5
tag.39 = 845188 ; date.39 = "1984-12-02-00" ; tim.39.1 =  7 ; tim.39.2 =  9 ; tim.39.3 = 13 ; shift.39 = -15
tag.40 = 845354 ; date.40 = "1985-01-27-12" ; tim.40.1 =  9 ; tim.40.2 = 11 ; tim.40.3 = 13 ; shift.40 = -15
tag.41 = 845495 ; date.41 = "1985-03-09-12" ; tim.41.1 =  7 ; tim.41.2 = 11 ; tim.41.3 = 13 ; shift.41 = -15

avgperiod = 4
dom.1 = "a"
dom.2 = "b"
dom.3 = "c"
center.1 = "west"
center.2 = "upst"
center.3 = "down"

if (number = "")                                                   ;# find the case of interest
  start = 1
  finish = 41
else
  start = number
  finish = number
endif

a = start                                                          ;# loop through the valid case(s)
while (a <= finish)
  "sdfopen "tag.a".growth.rates.energy.eddy.nc"
  "sdfopen "tag.a".growth.rates.energy.eddy.posneg.nc"
  "sdfopen "tag.a".track.nc"
  "set x 1"
  "set y 1"
  "set z 1"

  "run gui_getdate_grads "tag.a                                    ;# find the onset date
  timecent = subwrd(result,1)

  "set t "timecent
  "d manuapc24.3"
  line = sublin(result,1)
  deep.a = subwrd(line,4)
  "d manuapc24.3(t+2)"
  line = sublin(result,1)
  deep2.a = subwrd(line,4)
  "d manusgr24.3"
  line = sublin(result,1)
  grow.a = subwrd(line,4)
  "d manusgr24.3(t+2)"
  line = sublin(result,1)
  grow2.a = subwrd(line,4)

  b = 1                                                            ;# loop through three energy centers
  while (b <= 3)                                                   ;# and print the growth rate terms
    reltim.a.b = 6 * (tim.a.b + avgperiod/2 - timecent)            ;# as well as time relative to T0
    grvar.1 = "baro"dom.b
    grvar.2 = "ghfc"dom.b
    grvar.3 = "ghfp"dom.b".2"
    grvar.4 = "ghfn"dom.b".2"
    grvar.5 = "khfc"dom.b
    grvar.6 = "krey"dom.b
#    grvar.7 = "gvfc"dom.b"+cres"dom.b"+kvfc"dom.b"+kefo"dom.b"+knst"dom.b"+kres"dom.b
    grvar.7 = "gvfc"dom.b
    grvar.8 = "cres"dom.b
    grvar.9 = "kvfc"dom.b
    grvar.10 = "kefo"dom.b
    grvar.11 = "knst"dom.b
    grvar.12 = "kres"dom.b
    c = 1
    while (c <= 12)
      "d ave("grvar.c",t="tim.a.b",t="tim.a.b+avgperiod")"
      line = sublin(result,2)
      val.a.b.c = subwrd(line,4)
      c = c + 1
    endwhile

    c = 0
    while (c < 5)
      d = tim.a.b + c
      "d baro"dom.b"(t="d")"
      line = sublin(result,1)
      newval = subwrd(line,4)
      say center.b" BC "newval
      c = c + 1
    endwhile

    c = 0
    while (c < 5)
      d = tim.a.b + c
      "d ghfp"dom.b".2(t="d")"
      line = sublin(result,1)
      newval = subwrd(line,4)
      say center.b" +AGFC "newval
      c = c + 1
    endwhile

    b = b + 1
  endwhile
  "close 3"
  "close 2"
  "close 1"
#  say ; say a" "tag.a"    "val.a.1.1"   "val.a.1.2"   "val.a.2.3"   "val.a.2.4"   "val.a.3.2"   "val.a.3.1 ; say
  "reset"
  a = a + 1
endwhile
say

a = start                                                          ;# loop through the valid case(s)
while (a <= finish)
  b = 1                                                            ;# loop through three energy centers
  while (b <= 3)                                                   ;# and print the growth rate terms
#    say a" "tag.a" "center.b" "reltim.a.b" "val.a.b.1" "val.a.b.2" "val.a.b.3" "val.a.b.4" "val.a.b.5" "val.a.b.6" "val.a.b.7
#    say a" "tag.a" "center.b" "reltim.a.b" "val.a.b.1" "val.a.b.2" "val.a.b.3" "val.a.b.4" "val.a.b.5" "val.a.b.6" "val.a.b.7" "val.a.b.8" "val.a.b.9" "val.a.b.10" "val.a.b.11" "val.a.b.12
    b = b + 1
  endwhile
  say a" "tag.a" "deep.a" "deep2.a" "grow.a" "grow2.a
  a = a + 1
endwhile
"quit"
