class Animal{
    constructor(){
        this.patas = null;
        this.cauda;
        this.especie;
        this.cor;
    }
    voar(){
        console.log("Voando");
    }

    rastejar(){
        console.log("Rastejando");
    }

    morrer(){
        coinsole.log("morri");
    }

    SetPatas(num){

    this.patas= num;
    }
}

class Gato extends Animal{
    constructor(){
       super();
    }

}


class Pato extends Animal{
    constructor(){
       super()
    }
}


class jacare extends Animal{
    constructor(cauda, patas, especie){
        super();
     this.patas = patas;   
    this.especie = especie;
    this.cauda = cauda;
       
        
    }
    dancar(){
        console.log("Tchan Tchan chan chan chan!!");
    }
    
}


let b = new jacare("2 metros", "6", "MetalGarrurumon");
console.log(b);
b.voar();
b.dancar();

let a = new Pato;
console.log(a);

let gatinho = new Gato;
console.log(gatinho);

gatinho.rastejar();