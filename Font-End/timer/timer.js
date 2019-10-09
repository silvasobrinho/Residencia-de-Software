/*var contador = 0;
numero.innerHTML = contador;

var x = setInterval(function() {
    contador++;
    if (contador == 100)
        contador = 0;
    numero.ineerHTML = contador;

}, 1000);  */


/*
var arr = ["opa", "epah", "cara", "youu", "Ultimo"];

lista.innerHTML = arr;

setInterval(function() {

    if (arr.length != 0) {
        arr.pop();
        lista.innerHTML = arr;
    } else {
        window.location.assign("https://www.w3schools.com");
        
    }
}, 10000)

*/

// contador de tempo
var contadorTempo = new Date("Oct 10, 2019 15:37:25").getTime();
var horas, minutos, segundos;
// atualiza o contador a cada segundo
var x = setInterval(function() {

    // setar dia de hj
    var horaAgora = new Date().getTime();

    // definir o tempo que falta ( o dia desejado - o dia de hj)
    var distancia = contadorTempo - horaAgora;

    // calculo do sdias, horas e segundos
    var dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    // mostra no html
    document.getElementById("timer").innerHTML = dias + "d " + horas + "h " +
        minutos + "m " + segundos + "s ";

    // quando contador zera
    if (distancia < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "Lançamento!! Plim!";
    }
}, 1000); // tempo de intervalo em ms

function drawTime(ctx, radius) {
    var now = new Date();
    var hour = horas;
    var minute = minutos;
    var second = segundos;
    //hour
    hour = hour % 12;
    hour = (hour * Math.PI / 6) + (minute * Math.PI / (6 * 60)) + (second * Math.PI / (360 * 60));
    drawHand(ctx, hour, radius * 0.5, radius * 0.07);
    //minute
    minute = (minute * Math.PI / 30) + (second * Math.PI / (30 * 60));
    drawHand(ctx, minute, radius * 0.8, radius * 0.07);
    // second
    second = (second * Math.PI / 30);
    drawHand(ctx, second, radius * 0.9, radius * 0.02);
}

function drawHand(ctx, pos, length, width) {
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.moveTo(0, 0);
    ctx.rotate(pos);
    ctx.lineTo(0, -length);
    ctx.stroke();
    ctx.rotate(-pos);
}


var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var radius = canvas.height / 2;
ctx.translate(radius, radius);
radius = radius * 0.90
    //drawClock();
setInterval(drawClock, 1000);

function drawClock() {
    drawFace(ctx, radius);
    drawNumbers(ctx, radius);
    drawTime(ctx, radius);
}

function drawFace(ctx, radius) {
    var grad;

    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, 2 * Math.PI);
    ctx.fillStyle = 'white';
    ctx.fill();

    grad = ctx.createRadialGradient(0, 0, radius * 0.95, 0, 0, radius * 1.05);
    grad.addColorStop(0, '#333');
    grad.addColorStop(0.5, 'white');
    grad.addColorStop(1, '#333');
    ctx.strokeStyle = grad;
    ctx.lineWidth = radius * 0.1;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(0, 0, radius * 0.1, 0, 2 * Math.PI);
    ctx.fillStyle = '#333';
    ctx.fill();
}


function drawNumbers(ctx, radius) {
    var ang;
    var num;
    ctx.font = radius * 0.15 + "px arial";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    for (num = 1; num < 13; num++) {
        ang = num * Math.PI / 6;
        ctx.rotate(ang);
        ctx.translate(0, -radius * 0.85);
        ctx.rotate(-ang);
        ctx.fillText(num.toString(), 0, 0);
        ctx.rotate(ang);
        ctx.translate(0, radius * 0.85);
        ctx.rotate(-ang);
    }
}