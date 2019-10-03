let matriz_notas = [];//cria vetor vazio
//linha 0 
matriz_notas[0] = [];// cria vetor vazio nesta posição "zero"
//linha 1
matriz_notas[1] = [];//cria vvetor vazio nesta posição ("um")

//adicionando elementos usando dois indices

matriz_notas[0][0] = 0.5;
matriz_notas[0][1] = 0.6;
matriz_notas[0][2] = 0.7;
console.log("Só a linha zero preencida: ", matriz_notas);
console.table(matriz_notas);//formato de tabela
matriz_notas[1][0] = 1.5;
matriz_notas[1][1] = 1.6;
matriz_notas[1][2] = 1.7;

console.log("Linhas zero e um preenchidas: ", matriz_notas);
console.table(matriz_notas);//formato de tabela
