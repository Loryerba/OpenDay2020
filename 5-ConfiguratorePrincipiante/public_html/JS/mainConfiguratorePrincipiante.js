/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



var contatore = 1;
var countPB = 0;



function avanti() {


    var check = true;
    
    // Controllo dell'input

    switch (contatore) {

        case 1:

            var list1 = document.getElementById("lista1");

            if (list1.value === "Nessun prodotto selezionato!") {

                check = false;
                alert("Seleziona un prodotto prima di procedere!");

            }

            break;

        case 2:

            var list2 = document.getElementById("lista2");

            if (list2.value === "Nessun prodotto selezionato!") {

                check = false;
                alert("Seleziona un prodotto prima di procedere!");

            }

            break;

        case 3:

            var list3 = document.getElementById("lista3");

            if (list3.value === "Nessun prodotto selezionato!") {

                check = false;
                alert("Seleziona un prodotto prima di procedere!");

            }

            break;

        case 4:

            var list4 = document.getElementById("lista4");

            if (list4.value === "Nessun prodotto selezionato!") {

                check = false;
                alert("Seleziona un prodotto prima di procedere!");

            }

            break;

        case 5:

            var list5 = document.getElementById("lista5");

            if (list5.value === "Nessun prodotto selezionato!") {

                check = false;
                alert("Seleziona un prodotto prima di procedere!");

            }

            break;

        case 6:

            var list6 = document.getElementById("lista6");

            if (list6.value === "Nessun prodotto selezionato!") {

                check = false;
                alert("Seleziona un prodotto prima di procedere!");

            }

            break;

        case 7:

            var list7 = document.getElementById("lista7");

            if (list7.value === "Nessun prodotto selezionato!") {

                check = false;
                alert("Seleziona un prodotto prima di procedere!");

            }

            break;

        case 8:

            var list8 = document.getElementById("lista8");

            if (list8.value === "Nessun prodotto selezionato!") {

                check = false;
                alert("Seleziona un prodotto prima di procedere!");

            }

            break;

        case 9:

            var list9 = document.getElementById("lista9");

            if (list9.value === "Nessun prodotto selezionato!") {

                check = false;
                alert("Seleziona un prodotto prima di procedere!");

            }

            break;

        case 10:

            var list10 = document.getElementById("lista10");

            if (list10.value === "Nessun prodotto selezionato!") {

                check = false;
                alert("Seleziona un prodotto prima di procedere!");

            }

            break;

        default:

            alert("Switch case error.");

            break;

    }
    
    // Se tutto a posto procedo con la function

    if (check) {


        // Gestisco la visibilità del bottone indietro, lo mostro

        document.getElementById("bottoneIndietro").hidden = false;

        // Prendo le varie caratteristiche per incrementare la Progress bar

        var bar = document.getElementById("bar");
        var txt = document.getElementById("text");

        // Se il contatore è minore di 10 vuol dire che ci sono altre form da scorrere

        if (contatore < 10) {

            // Compongo l'id della form
            var form = "form" + (contatore).toString();
            // Nascondo la form corrente
            document.getElementById(form).hidden = true;
            // Nascondo la form della spiegazione corrente
            document.getElementById(form + "-1").hidden = true;
            // Incremento il contatore per sapere a che form mi trovo (Vado avanti)
            contatore++;
            // Compongo l'id della form aggiornato a quella successiva
            var form = "form" + (contatore).toString();
            // Mostro la form corrente
            document.getElementById(form).hidden = false;
            // Mostro la form della spiegazione corrente
            document.getElementById(form + "-1").hidden = false;

            // Cambio il nome del bottone
            if (contatore == 10) {

                document.getElementById("spanAvanti").innerHTML = "Concludi";

            }


            // Incremento contatore della percentuale della progress bar
            countPB = countPB + 10;

            // Visualizzo l'incremento il "colore" della PB
            bar.style.width = countPB + '%';
            // Visualizzo la percentuale incrementata
            txt.innerHTML = countPB + '%';



        } else {
            
            // Quando premo conludi richiamo evaluateBuild che mi raccoglie tutte le componenti scelte

            evaluateBuild();
            
            // Faccio un submit in modo da resettare tutte le form
            
            document.getElementById("form10").submit();
            
            // Aptro la pagina risultati
            
            var win = window.open("risultatoFinale.html", '_blank');
            win.focus();

        }




    }

}


function indietro() {

    // Prendo le varie caratteristiche per incrementare la Progress bar

    var bar = document.getElementById("bar");
    var txt = document.getElementById("text");
    
    // Controllo se non sono sulla prima form

    if (contatore > 1) {

        // Compongo l'id della form

        var form = "form" + (contatore).toString();
        
        // Nascondo la form corrente
        
        document.getElementById(form).hidden = true;
        
        // Nascondo la form della spiegazione corrente
        
        document.getElementById(form + "-1").hidden = true;
        
        // Decremento il contatore per sapere a che form mi trovo (Vado indietro)
        
        contatore--;

        // Compongo l'id della form aggiornato a quella precedente

        var form = "form" + (contatore).toString();
        
        // Mostro la form corrente
        
        document.getElementById(form).hidden = false;
        
        // Mostro la form della spiegazione corrente
        
        document.getElementById(form + "-1").hidden = false;

        // Se sono alla pagina 1 nascondo il bottone indietro

        if (contatore == 1) {
            
            // Nascondo il bottone indietro

            document.getElementById("bottoneIndietro").hidden = true;

        }

    }

    // Incremento contatore della percentuale della progress bar
    countPB = countPB - 10;

    // Visualizzo l'incremento il "colore" della PB
    bar.style.width = countPB + '%';
    // Visualizzo la percentuale incrementata
    txt.innerHTML = countPB + '%';

}

function evaluateBuild() {

    // Svuoto il session storage
    sessionStorage.clear();
    // Vettore che conterrà le scelte
    var choice = [];

    // Scelta cpu

    var cpu = document.getElementById("lista1");
    cpu = cpu.options[cpu.selectedIndex].text;
    choice.push(cpu);
    
    // Scelta mobo

    var mobo = document.getElementById("lista2");
    mobo = mobo.options[mobo.selectedIndex].text;
    choice.push(mobo);
    
    // Scelta cooler

    var cooler = document.getElementById("lista3");
    cooler = cooler.options[cooler.selectedIndex].text;
    choice.push(cooler);
    
    // Scelta ram

    var ram = document.getElementById("lista4");
    ram = ram.options[ram.selectedIndex].text;
    choice.push(ram);

    // Scelta gpu

    var gpu = document.getElementById("lista5");
    gpu = gpu.options[gpu.selectedIndex].text;
    choice.push(gpu);
    
    // Scelta hdd

    var hdd = document.getElementById("lista6");
    hdd = hdd.options[hdd.selectedIndex].text;
    choice.push(hdd);
    
    // Scelta ssd

    var ssd = document.getElementById("lista7");
    ssd = ssd.options[ssd.selectedIndex].text;
    choice.push(ssd);
    
    // Scelta psu

    var psu = document.getElementById("lista8");
    psu = psu.options[psu.selectedIndex].text;
    choice.push(psu);
    
    // Scelta Case

    var Case = document.getElementById("lista9");
    Case = Case.options[Case.selectedIndex].text;
    choice.push(Case);
    
    // Scelta fan

    var fan = document.getElementById("lista10");
    fan = fan.options[fan.selectedIndex].text;
    choice.push(fan);
    
    // Inserisco il vettore come stringe nel sessionStorage in modo che possa recuperarlo nell'html dei risultati
    
    sessionStorage.setItem("choice",  JSON.stringify(choice));


}

// Script per la gallery

window.addEventListener("DOMContentLoaded", function (e) {

    var stage = document.getElementById("stage");
    var fadeComplete = function (e) {
        stage.appendChild(arr[0]);
    };
    var arr = stage.getElementsByTagName("a");
    for (var i = 0; i < arr.length; i++) {
        arr[i].addEventListener("animationend", fadeComplete, false);
    }

}
, false);

