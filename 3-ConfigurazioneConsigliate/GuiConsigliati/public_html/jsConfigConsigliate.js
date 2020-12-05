/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//global variable
var checkbottone = true;

function ShowBox() {



    //prendo l'elemento all'id combo1
    var valore = document.getElementById('combo1').selectedIndex;
    //prendo l'elemento all'id combo2
    var valore1 = document.getElementById('combo2').selectedIndex;
    //controllo se tutti e due i campi sono selezionati,se solo 1 dei due non risulta selezionato non compaiono le box
    if (valore == 0 || valore1 == 0) {
        alert("Devi selezionare perforza sia il budget che l'utilizzo");
    } else if (valore == 1 && valore1 == 1) {

        //prendo l'elemento all'id contenitore
        var visiblebox = document.getElementById('contenitore');
        //rendo visibile le box
        visiblebox.style.visibility = "visible";
        var img = document.createElement("img");
        img.src = "img/Case1.jpg";
        var src = document.getElementById('contenitore1');

        img.onclick = function () {
            window.location.href = 'Build400-600uff.html';
        };
        src.appendChild(img);

        //--------------------------------------------------------------------


        //----------------------------------------------------------------------

        //prendo l'elemento all'id contenitore
        var visiblebox = document.getElementById('contenitore');
        //rendo visibile le box
        visiblebox.style.visibility = "visible";
        var img = document.createElement("img");
        img.src = "img/Case3.jpg";
        var src = document.getElementById('contenitore3');

        img.onclick = function () {
            window.location.href = 'Build400-600uff3.html';
        };
        src.appendChild(img);

    } else if (valore == 1 && valore1 == 2) {




        //prendo l'elemento all'id contenitore
        var visiblebox = document.getElementById('contenitore');
        //rendo visibile le box
        visiblebox.style.visibility = "visible";
        var img = document.createElement("img");
        img.src = "img/Case12.jpg";
        var src = document.getElementById('contenitore1');

        img.onclick = function () {
            window.location.href = 'Build400-600game.html';
        };
        src.appendChild(img);
        //--------------------------------------------------------------------


        //----------------------------------------------------------------------

        //prendo l'elemento all'id contenitore
        var visiblebox = document.getElementById('contenitore');
        //rendo visibile le box
        visiblebox.style.visibility = "visible";
        var img = document.createElement("img");
        img.src = "img/case13.jpg";
        var src = document.getElementById('contenitore3');

        img.onclick = function () {
            window.location.href = 'Build400-600game3.html';
        };
        src.appendChild(img);

    } else if (valore == 2 && valore1 == 1) {

        //prendo l'elemento all'id contenitore
        var visiblebox = document.getElementById('contenitore');
        //rendo visibile le box
        visiblebox.style.visibility = "visible";
        var img = document.createElement("img");
        img.src = "img/Case2.jpg";
        var src = document.getElementById('contenitore1');

        img.onclick = function () {
            window.location.href = 'Build600-800uff.html';
        };
        src.appendChild(img);
        //--------------------------------------------------------------------


        //----------------------------------------------------------------------

        //prendo l'elemento all'id contenitore
        var visiblebox = document.getElementById('contenitore');
        //rendo visibile le box
        visiblebox.style.visibility = "visible";
        var img = document.createElement("img");
        img.src = "img/Case2.jpg";
        var src = document.getElementById('contenitore3');

        img.onclick = function () {
            window.location.href = 'Build600-800uff3.html';
        };
        src.appendChild(img);


    } else if (valore == 2 && valore1 == 2) {

        //prendo l'elemento all'id contenitore
        var visiblebox = document.getElementById('contenitore');
        //rendo visibile le box
        visiblebox.style.visibility = "visible";
        var img = document.createElement("img");
        img.src = "img/Case13.jpg";
        var src = document.getElementById('contenitore1');

        img.onclick = function () {
            window.location.href = 'Build600-800game.html';
        };
        src.appendChild(img);
        //--------------------------------------------------------------------


        //----------------------------------------------------------------------

        //prendo l'elemento all'id contenitore
        var visiblebox = document.getElementById('contenitore');
        //rendo visibile le box
        visiblebox.style.visibility = "visible";
        var img = document.createElement("img");
        img.src = "img/case12.jpg";
        var src = document.getElementById('contenitore3');

        img.onclick = function () {
            window.location.href = 'Build600-800game3.html';
        };
        src.appendChild(img);

    } else if (valore == 3 && valore1 == 1) {

        //prendo l'elemento all'id contenitore
        var visiblebox = document.getElementById('contenitore');
        //rendo visibile le box
        visiblebox.style.visibility = "visible";
        var img = document.createElement("img");
        img.src = "img/Case4.jpg";
        var src = document.getElementById('contenitore1');

        img.onclick = function () {
            window.location.href = 'Build800-1000uff.html';
        };
        src.appendChild(img);
        //--------------------------------------------------------------------



        //----------------------------------------------------------------------

        //prendo l'elemento all'id contenitore
        var visiblebox = document.getElementById('contenitore');
        //rendo visibile le box
        visiblebox.style.visibility = "visible";
        var img = document.createElement("img");
        img.src = "img/Case5.jpg";
        var src = document.getElementById('contenitore3');

        img.onclick = function () {
            window.location.href = 'Build800-1000uff3.html';
        };
        src.appendChild(img);


    } else if (valore == 3 && valore1 == 2) {

        //prendo l'elemento all'id contenitore
        var visiblebox = document.getElementById('contenitore');
        //rendo visibile le box
        visiblebox.style.visibility = "visible";
        var img = document.createElement("img");
        img.src = "img/Case7.jpg";
        var src = document.getElementById('contenitore1');

        img.onclick = function () {
            window.location.href = 'Build800-1000game.html';
        };
        src.appendChild(img);
        //--------------------------------------------------------------------


        //----------------------------------------------------------------------

        //prendo l'elemento all'id contenitore
        var visiblebox = document.getElementById('contenitore');
        //rendo visibile le box
        visiblebox.style.visibility = "visible";
        var img = document.createElement("img");
        img.src = "img/Case8.jpg";
        var src = document.getElementById('contenitore3');

        img.onclick = function () {
            window.location.href = 'Build800-1000game3.html';
        };
        src.appendChild(img);


    } else if (valore == 4 && valore1 == 1) {

        //prendo l'elemento all'id contenitore
        var visiblebox = document.getElementById('contenitore');
        //rendo visibile le box
        visiblebox.style.visibility = "visible";
        var img = document.createElement("img");
        img.src = "img/Case5.jpg";
        var src = document.getElementById('contenitore1');

        img.onclick = function () {
            window.location.href = 'Build1000-1500uff.html';
        };
        src.appendChild(img);
        //--------------------------------------------------------------------



        //----------------------------------------------------------------------

        //prendo l'elemento all'id contenitore
        var visiblebox = document.getElementById('contenitore');
        //rendo visibile le box
        visiblebox.style.visibility = "visible";
        var img = document.createElement("img");
        img.src = "img/Case9.jpg";
        var src = document.getElementById('contenitore3');

        img.onclick = function () {
            window.location.href = 'Build1000-1500uff3.html';
        };
        src.appendChild(img);


    } else if (valore == 4 && valore1 == 2) {

        //prendo l'elemento all'id contenitore
        var visiblebox = document.getElementById('contenitore');
        //rendo visibile le box
        visiblebox.style.visibility = "visible";
        var img = document.createElement("img");
        img.src = "img/Case9.jpg";
        var src = document.getElementById('contenitore1');

        img.onclick = function () {
            window.location.href = 'Build1000-1500game.html';
        };
        src.appendChild(img);
        //--------------------------------------------------------------------



        //----------------------------------------------------------------------

        //prendo l'elemento all'id contenitore
        var visiblebox = document.getElementById('contenitore');
        //rendo visibile le box
        visiblebox.style.visibility = "visible";
        var img = document.createElement("img");
        img.src = "img/Case6.jpg";
        var src = document.getElementById('contenitore3');

        img.onclick = function () {
            window.location.href = 'Build1000-1500game3.html';
        };
        src.appendChild(img);

    } else if (valore == 5 && valore1 == 1) {

        //prendo l'elemento all'id contenitore
        var visiblebox = document.getElementById('contenitore');
        //rendo visibile le box
        visiblebox.style.visibility = "visible";
        var img = document.createElement("img");
        img.src = "img/Case11.jpg";
        var src = document.getElementById('contenitore1');

        img.onclick = function () {
            window.location.href = 'Build1500-2000uff.html';
        };
        src.appendChild(img);
        //--------------------------------------------------------------------



        //----------------------------------------------------------------------

        //prendo l'elemento all'id contenitore
        var visiblebox = document.getElementById('contenitore');
        //rendo visibile le box
        visiblebox.style.visibility = "visible";
        var img = document.createElement("img");
        img.src = "img/Case10.jpg";
        var src = document.getElementById('contenitore3');

        img.onclick = function () {
            window.location.href = 'Build1500-2000uff3.html';
        };
        src.appendChild(img);


    } else if (valore == 5 && valore1 == 2) {

        //prendo l'elemento all'id contenitore
        var visiblebox = document.getElementById('contenitore');
        //rendo visibile le box
        visiblebox.style.visibility = "visible";
        var img = document.createElement("img");
        img.src = "img/Case6.jpg";
        var src = document.getElementById('contenitore1');

        img.onclick = function () {
            window.location.href = 'Build1500-2000game.html';
        };
        src.appendChild(img);
        //----------------------------------------------------------------------

        //----------------------------------------------------------------------

        //prendo l'elemento all'id contenitore
        var visiblebox = document.getElementById('contenitore');
        //rendo visibile le box
        visiblebox.style.visibility = "visible";
        var img = document.createElement("img");
        img.src = "img/Case10.jpg";
        var src = document.getElementById('contenitore3');

        img.onclick = function () {
            window.location.href = 'Build1500-2000game3.html';
        };
        src.appendChild(img);



    }
}

