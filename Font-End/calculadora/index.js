var contDivi = undefined;
var divi = undefined;
var somat = undefined;
var contSoma = undefined;
var sub = undefined;
var contSub = undefined;
var contMulti = undefined;
var multi = undefined;

function tela(val){
    if(visor.value == "0"){
        visor.value = val;
    }else{
        visor.value += val;
    }
}

function limpaTela(){
    visor.value ="0";
}

function soma(){
    somat = parseInt(visor.value);
    contSoma = 1;
    visor.value = "0";
}

function subtracao(){
    sub = parseInt(visor.value);
    contSub = 1;
    visor.value = "0";
}

function resultado(){

    if (contSoma == 1){
        visor.value = eval(parseInt(visor.value) + somat);
        contSoma=undefined;        
    }else if(contSub == 1){
        visor.value = eval( sub - parseInt(visor.value));
        contSub = undefined;
    }else if(contMulti == 1){
        visor.value = eval(parseInt(visor.value) * multi);
        contMulti = undefined;
    }else if(contDivi == 1){
        visor.value = eval(divi / parseInt(visor.value));
        contDivi = undefined;
    }
}

function divisao(){
    divi = parseInt(visor.value);
    contDivi = 1;
    visor.value = "0"; 
}

function multiplicacao(){
    multi = parseInt(visor.value);
    contMulti = 1;
    visor.value = "0";

}