/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function getChoice() {

    var choice = JSON.parse(sessionStorage.getItem("choice"));

    var paragraph = document.getElementById("build");

    var string = "";

    for (var i = 0; i < choice.length; i++) {

        switch (i) {

            case 0:
                paragraph.innerHTML = "<p style= 'color: #e000dd; text-align: center'> Processore: <br style= 'line-height: 10px; '> <span style='color:#00cccc'>" + choice[0] +
                        " </span> </p>";
                break;
            case 1:
                paragraph.innerHTML += "<p style= 'color: #e000dd; text-align: center'> Scheda Madre: <br style= 'line-height: 10px; '> <span style='color:#00cccc'>" + choice[1] +
                        " </span> </p>";
                break;
            case 2:
                paragraph.innerHTML += "<p style= 'color: #e000dd; text-align: center'> Dissipatore: <br style= 'line-height: 10px; '> <span style='color:#00cccc'>" + choice[2] +
                        " </span> </p>";
                break;

            case 3:
                paragraph.innerHTML += "<p style= 'color: #e000dd; text-align: center'> RAM: <br style= 'line-height: 10px; '> <span style='color:#00cccc'>" + choice[3] +
                        " </span> </p>";
                break;
            case 4:
                paragraph.innerHTML += "<p style= 'color: #e000dd; text-align: center'> Scheda Video: <br style= 'line-height: 10px; '> <span style='color:#00cccc'>" + choice[4] +
                        " </span> </p>";
                break;
            case 5:
                paragraph.innerHTML += "<p style= 'color: #e000dd; text-align: center'> Hard Disk: <br style= 'line-height: 10px; '> <span style='color:#00cccc'>" + choice[5] +
                        " </span> </p>";
                break;

            case 6:
                paragraph.innerHTML += "<p style= 'color: #e000dd; text-align: center'> SSD: <br style= 'line-height: 10px; '> <span style='color:#00cccc'>" + choice[6] +
                        " </span> </p>";
                break;

            case 7:
                paragraph.innerHTML += "<p style= 'color: #e000dd; text-align: center'> Alimentatore: <br style= 'line-height: 10px; '> <span style='color:#00cccc'>" + choice[7] +
                        " </span> </p>";
                break;
            case 8:
                paragraph.innerHTML += "<p style= 'color: #e000dd; text-align: center'> Case: <br style= 'line-height: 10px; '> <span style='color:#00cccc'>" + choice[8] +
                        " </span> </p>";
                break;

            case 9:
                paragraph.innerHTML += "<p style= 'color: #e000dd; text-align: center'> Ventole: <br style= 'line-height: 10px; '> <span style='color:#00cccc'>" + choice[9] +
                        " </span> </p>";
                break;
        }

    }




}

