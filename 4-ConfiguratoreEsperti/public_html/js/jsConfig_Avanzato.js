/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



function evaluateFirst() {

    var Next1 = document.getElementById("Next1");
    var Form2 = document.getElementById("Form2");
    var progress = document.getElementById("progress");

    var list = document.getElementById("slct-cpu");
    var index = list.value;
    if (index == "Selezionare un processore") {
        window.alert("Prima di procedere, selezionare un processore.");
    } else {

        Form1.style.left = "-1200px";
        Form2.style.left = "120px";
        progress.style.width = "240px";
    }


}

function BackFirst() {
    var Form1 = document.getElementById("Form1");
    var Form2 = document.getElementById("Form2");
    var progress = document.getElementById("progress");

    Form1.style.left = "120px";
    Form2.style.left = "1200px";
    progress.style.width = "120px";

}


function evaluateSecond() {

    var Form2 = document.getElementById("Form2");
    var Form3 = document.getElementById("Form3");
    var progress = document.getElementById("progress");


    var list = document.getElementById("slct-mobo");
    var index = list.value;

    if (index == "Selezionare una scheda madre") {
        window.alert("Prima di procedere, selezionare una scheda madre.");
    } else {
        Form2.style.left = "-1200px";
        Form3.style.left = "120px";
        progress.style.width = "360px";
    }

}


function BackSecond() {
    var Form2 = document.getElementById("Form2");
    var Form3 = document.getElementById("Form3");
    var progress = document.getElementById("progress");
    
    Form2.style.left = "120px";
    Form3.style.left = "1200px";
    progress.style.width = "240px";

}




