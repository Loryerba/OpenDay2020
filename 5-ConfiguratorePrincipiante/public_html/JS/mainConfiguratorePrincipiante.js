/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var contatore = 0;
var countPB = 0;


function avanti() {

    // Prendo le varie caratteristiche per incrementare la Progress bar
    var btn = document.getElementById("btn");
    var bar = document.getElementById("bar");
    var txt = document.getElementById("text");

    // Incremento il contatore per sapere a che componente mi trovo
    contatore = contatore + 1;


    switch (contatore) {

        case 1:

            document.getElementById("form1").hidden = true;
            document.getElementById("form2").hidden = false;

            // Rendo visibile il bottone indietro perchè dopo la prima volta posso andare indietro
            document.getElementById("bottoneIndietro").style.visibility = "visible";


            // Incremento contatore della percentuale della progress bar
            countPB = countPB + 10;

            // Visualizzo l'incremento il "colore" della PB
            bar.style.width = countPB + '%';
            // Visualizzo la percentuale incrementata
            txt.innerHTML = countPB + '%';

            break
            ;

        case 2:



            // Incremento contatore della percentuale della progress bar
            countPB = countPB + 10;
            // Visualizzo l'incremento il "colore" della PB
            bar.style.width = countPB + '%';
            // Visualizzo la percentuale incrementata
            txt.innerHTML = countPB + '%';


            break
            ;

        case 3:

            document.getElementById("statoComponente").innerHTML = "RAM";

            break
            ;

        case 4:

            document.getElementById("statoComponente").innerHTML = "GPU";

            break
            ;

        case 5:

            document.getElementById("statoComponente").innerHTML = "HDD";

            break
            ;

        case 6:

            document.getElementById("statoComponente").innerHTML = "SSD";

            break
            ;

        case 7:

            document.getElementById("statoComponente").innerHTML = "PSU";

            break
            ;

        case 8:

            document.getElementById("statoComponente").innerHTML = "CASE";

            break
            ;

        case 9:

            document.getElementById("statoComponente").innerHTML = "FAN CASE";

            break
            ;

        default:
            break
            ;


    }

}

function indietro() {


}

window.addEventListener("DOMContentLoaded", function (e) {

    var stage = document.getElementById("stage");
    var fadeComplete = function (e) {
        stage.appendChild(arr[0]);
    };
    var arr = stage.getElementsByTagName("a");
    for (var i = 0; i < arr.length; i++) {
        arr[i].addEventListener("animationend", fadeComplete, false);
    }

}, false);

