
"run gui_trackpos troplat.2 troplon.2"
position = result
"run gui_view_grid 17.5 60 "position
"clear"
"set grads off"
"set cint 1e9"
"d slp"
"run gui_track_grid troplat.2 troplon.2 10 "position

"set dfile 1"
"set grid off"
"set x 2 50"
"set y 2 16"
#"d slp"
#"d sfcpres"
#"d indic"
#"d kinevint"
#"d ukinevint"
#"d vkinevint"
#"d wkinevint"
#"d ktendvint"
#"d khfcvint"
#"d kvfcvint"
"set cint 25"
"set black -0.01 0.01"
"set ccolor 1"
"d kefovint"
#"d kefovint"
"set cint 25"
"set black -0.01 0.01"
"set ccolor 2"
"d kgenvint"
#"d knstvint"
#"d kresvint"
#"d kine"
#"d ukine"
#"d vkine"
#"d wkine"
#"d ktend"
#"d khfc"
#"d kvfc"
#"d krey"
#"d kefo"
#"d kgen"
#"d knst"
#"d kres"

#"d tracklat.2"
#"d tracklon.2"
#"d tracknum.2"
#"d tracknotes.2"
#"d tindex.2"
#"d manulat.2"
#"d manulon.2"
#"d manuspd.2"
#"d manuslp.2"
#"d manuapc12.2"
#"d manuapc24.2"
#"d manugrv.2"
#"d manusgr12.2"
#"d manusgr24.2"
#"d manunum.2"
#"d manunotes.2"
#"d gridlat.2"
#"d gridlon.2"
#"d gridspd.2"
#"d gridslp.2"
#"d gridapc12.2"
#"d gridapc24.2"
#"d gridgrv.2"
#"d gridsgr12.2"
#"d gridsgr24.2"
#"d gridnum.2"
#"d gridnotes.2"
#"d troplat.2"
#"d troplon.2"
#"d tropspd.2"
#"d tropres.2"
#"d troprec12.2"
#"d troprec24.2"
#"d tropott.2"
#"d tropotc12.2"
#"d tropotc24.2"
#"d tropnum.2"
#"d tropnotes.2"

#"run diag_corr uwnd vwnd"
#"set cthick 8"
#"set black -0.001 0.001"
#"set cint 10"

"run gui_date"
"draw title "result
"run gui_header"
