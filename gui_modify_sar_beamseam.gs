* This script loops through the *.sar.nc files listed
* in sar.nc.filelist and sets up the display so that
* beamseams can be masked - RD December 2004.

function beamseam()

filelist = "sar.nc.filelist"

count = 0                                                         ;# record the file names
say "reading "filelist
filestat = read(filelist)
while (sublin(filestat,1) = 0)
  sarfile.count = sublin(filestat,2)
  count = count + 1
  filestat = read(filelist)
endwhile
say count" sar files were found"

a = 0                                                             ;# for each file
while (a < count)                                                 ;# read the header info first
  "clear"
  stem     = substr(sarfile.a,1,25)
  stemstem = substr(sarfile.a,1,19)
  resol    = substr(sarfile.a,21,5)
  if (resol = "00800") ; reduce = 1 ; endif
  if (resol = "01600") ; reduce = 2 ; endif
  if (resol = "03200") ; reduce = 3 ; endif
  if (resol = "06400") ; reduce = 4 ; endif
  if (resol = "12800") ; reduce = 5 ; endif
  fila = stem".hdr"
  say "reading "fila
  filestat = read(fila)
  line = sublin(filestat,2)
  word = subwrd(line,2)
  product = substr(word,1,19)

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
  date    = subwrd(line,2)
  time    = subwrd(line,3)
  maxdate = subwrd(line,4)
  say date" "time
  say maxdate

  filestat = read(fila)                                           ;# get the acquisition corners
  line = sublin(filestat,2)                                       ;# and the initial view
  ullat = subwrd(line,2)
  filestat = read(fila)
  line = sublin(filestat,2)
  ullon = subwrd(line,2)
  filestat = read(fila)
  line = sublin(filestat,2)
  urlat = subwrd(line,2)
  filestat = read(fila)
  line = sublin(filestat,2)
  urlon = subwrd(line,2)
  filestat = read(fila)
  line = sublin(filestat,2)
  lllat = subwrd(line,2)
  filestat = read(fila)
  line = sublin(filestat,2)
  lllon = subwrd(line,2)
  filestat = read(fila)
  line = sublin(filestat,2)
  lrlat = subwrd(line,2)
  filestat = read(fila)
  line = sublin(filestat,2)
  lrlon = subwrd(line,2)
  fileclose = close(fila)
  midlat = (ullat + urlat + lllat + lrlat) / 4.0
  midlon = (ullon + urlon + lllon + lrlon) / 4.0
  if (midlon < 0) ; midlon = midlon + 360.0 ; endif

  displist = "/home/rdanielson/prog/graphics.grads/lib/gui_disp.gs"     ;# then set the display script
  outline = ''
  filestat = write(displist,outline)
  message = sublin(filestat,1)
  if (message != 0)
    say 'error 'message' in opening and writing to 'displist ; quit
  endif
  outline = '"clear"'
  filewrite = write(displist,outline)
  outline = '"set grads off"'
  filewrite = write(displist,outline)
  outline = '"set grid off"'
  filewrite = write(displist,outline)
  outline = '"set xlab off"'
  filewrite = write(displist,outline)
  outline = '"set ylab off"'
  filewrite = write(displist,outline)
  outline = '"set gxout grfill"'
  filewrite = write(displist,outline)
  outline = '"d sigo"'
  filewrite = write(displist,outline)
  outline = '"set gxout contour"'
  filewrite = write(displist,outline)
  outline = '"set clevs 0.5"'
  filewrite = write(displist,outline)
  outline = '"set clab off"'
  filewrite = write(displist,outline)
  outline = '"set cthick 20"'
  filewrite = write(displist,outline)
  outline = '"d land"'
  filewrite = write(displist,outline)
  outline = '"set cthick 5"'
  filewrite = write(displist,outline)
  outline = '"d slp/100"'
  filewrite = write(displist,outline)
  outline = '#"d uwnd;skip(vwnd,25)"'
  filewrite = write(displist,outline)
  outline = '#"set gxout contour"'
  filewrite = write(displist,outline)
  outline = '#"d mag(uwnd,vwnd)"'
  filewrite = write(displist,outline)
  outline = '#"set gxout contour"'
  filewrite = write(displist,outline)
  outline = '#"set cthick 10"'
  filewrite = write(displist,outline)
  outline = '#"set cstyle 1"'
  filewrite = write(displist,outline)
  outline = '#"set ccolor revrain"'
  filewrite = write(displist,outline)
  outline = '#"d sigo"'
  filewrite = write(displist,outline)
  fileclose = close(displist)

  "sdfopen "sarfile.a
  "run gui_disp"

  loop = 1
  while (loop = 1)
    "set string 10 tr 3"                                          ;# draw some identifiers
    "set strsiz 0.15 0.25"
    "draw string 10.9 7.8 Case "a
    "draw string 10.9 7.4 "beam
    "set string 10 tc 3 -90"
    "draw string 10.9 4.25 "product

    "set string 10 bc 10 0"                                       ;# then draw some buttons
    "set strsiz 0.15 0.25"
    "set line 10 1 6"
    "draw line 0.0 8.0 11.0 8.0"
    "draw line 2.2 8.0 2.2 8.5"
    "draw line 4.4 8.0 4.4 8.5"
    "draw line 6.6 8.0 6.6 8.5"
    "draw line 8.8 8.0 8.8 8.5"
    "draw string 1.1 8.2 --"
    "draw string 3.3 8.2 -"
    "draw string 5.5 8.2 Zoom"
    "draw string 7.7 8.2 +"
    "draw string 9.9 8.2 ++"
    "draw line 0.0  0.5 11.0 0.5"
    "draw line 2.75 0.0 2.75 0.5"
    "draw line 5.5  0.0 5.5  0.5"
    "draw line 8.25 0.0 8.25 0.5"
    "draw string 1.375 0.15 Exit"
    "draw string 4.125 0.15 Redo File"
    "draw string 6.875 0.15 Previous File"
    "draw string 9.625 0.15 Next File"
    "set string 1 c 5"
    "set strsiz 0.15 0.15"
    "set line 1 1 3"

    "q pos"                                                       ;# then locate the click
    rec = sublin(result,1)
    x = subwrd(rec,3)
    y = subwrd(rec,4)

    if (y > 8.0)                                                  ;# if the click is above the
      if (x < 2.2)                                                ;# map then zoom around
        "run gui_zoom ---"
      endif
      if (x >= 2.2 & x < 4.4)
        "run gui_zoom --"
      endif
      if (x >= 4.4 & x < 6.6)
        "set string 0 bc 10"
        "set strsiz 0.15 0.25"
        "set line 10 1 6"
        "draw recf 4.4 8.0 6.6 8.5"
        "draw string 5.5 8.2 Zoom"
        "set string 1 c 5"
        "set strsiz 0.15 0.15"
        "set line 1 1 3"
        "run gui_zoom"
      endif
      if (x >= 6.6 & x < 8.8)
        "run gui_zoom ++"
      endif
      if (x >= 8.8 & x < 11.0)
        "run gui_zoom +++"
      endif
    endif

    if (y < 0.5)                                                  ;# if the click is below the
      if (x < 2.75)                                               ;# map then change files
        "close 1"
        "clear"
        loop = 0;
        a = 2 * count
      endif
      if (x >= 2.75 & x < 5.5)
        "set string 0 bc 10"
        "set strsiz 0.15 0.25"
        "set line 10 1 6"
        "draw recf 2.75 0.0 5.5 0.5"
        "draw string 4.125 0.15 Redo File"
        "set string 1 c 5"
        "set strsiz 0.15 0.15"
        "set line 1 1 3"
        say "!rm "stemstem".mask"
            "!rm "stemstem".mask"
#        say "!/home/rdanielson/bin/sar.cross.section.reduce "stemstem".00400.hdr "reduce
#            "!/home/rdanielson/bin/sar.cross.section.reduce "stemstem".00400.hdr "reduce
        say "!cp "sarfile.a".ori "sarfile.a
            "!cp "sarfile.a".ori "sarfile.a
#        say "!/home/rdanielson/bin/nc.mask.sar.sice.cmod "stem".hdr"
#            "!/home/rdanielson/bin/nc.mask.sar.sice.cmod "stem".hdr"
        "close 1"
        loop = 0
      endif
      if (x >= 5.5 & x < 8.25)
        "close 1"
        loop = 0
        a = a - 1
        if (a < 0)
          a = 0
        endif
      endif
      if (x >= 8.25)
        "close 1"
        loop = 0
        a = a + 1
        if (a = count)
          a = count - 1
        endif
      endif
    endif

    if (y > 0.5 & y < 8.0)                                        ;# otherwise mask a beamseam
      "q xy2gr "x" "y
      rec = sublin(result,1)
      xx = subwrd(rec,3)
      yy = subwrd(rec,6)
      say result
      x = math_format("%9.0f",xx-1)
      y = math_format("%9.0f",yy-1)
#      say "!/home/rdanielson/bin/nc.modify.sar.beamseam "stem".hdr "y" "x
#          "!/home/rdanielson/bin/nc.modify.sar.beamseam "stem".hdr "y" "x
      say "!/home/rdanielson/bin/nc.modify.sar.beamseam "stem".hdr "y" "x" store"
          "!/home/rdanielson/bin/nc.modify.sar.beamseam "stem".hdr "y" "x" store"

      "q dims"                                                    ;# close and reopen this file
      rec = sublin(result,3)                                      ;# using the current view domain
      ymin = subwrd(rec,11)
      ymax = subwrd(rec,13)
      rec = sublin(result,2)
      xmin = subwrd(rec,11)
      xmax = subwrd(rec,13)
      "close 1"
      "sdfopen "sarfile.a
      "set y "ymin" "ymax
      "set x "xmin" "xmax
      "run gui_disp"
    endif
  endwhile
endwhile
