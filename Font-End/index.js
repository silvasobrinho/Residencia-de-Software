var x = 0;

function modifica() {
    //  document.getElementById("teste2")
    //        .innerHTML="Aobaaaa!";


    var aux = document.getElementById("dados").value;

    document.getElementById("dados").value = document.getElementById("teste").innerHTML;

    document.getElementById("teste").innerHTML = aux;
}


//var x = prompt("Insira um numero: ");
//var y =  prompt("Insira outro numero: ");
//alert(parseInt(x) +  parseInt(y));

function add() {
    // var v1 = document.getElementById("v1").value;
    // var v2 = document.getElementById("v2").value;
    // document.write(parseInt(v1) + parseInt(v2));

    // document.getElementById("divs").innerHTML = 

   

    var v1 = Number(document.getElementById("v1").value);
    var v2 = Number(document.getElementById("v2").value);
    //document.write(v1+v2);
    alert(v1+v2);
}

function sub() {
    var v1 = Number(document.getElementById("v1").value);
    var v2 = Number(document.getElementById("v2").value);
    alert(v1-v2);
}

window.onload = function(){

    
}