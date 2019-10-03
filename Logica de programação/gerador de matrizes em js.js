let matriz = [];
let lin = 15;
let col = 18;
cont = 0;
for(let i=0; i<lin;i++){
    matriz[i]=[];
    for(let j=0;j<col;j++){
        matriz[i][j]=cont++
    }
}

console.table(matriz);
