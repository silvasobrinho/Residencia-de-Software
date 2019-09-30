var entrada = require('readline-sync');
var total = 0;
var qtdp = 0;


do {
    console.log("Insira o numero do produto desejado ou para  0 receber o toral.")
    console.log("1 - Garrafa de agua - 200ml");
    console.log("2 - Garrafa de suco de funcho 300ml");
    console.log("3 - Copo de Suco de maracuja 500ml");
    console.log("4 - Garafa de agua com Gás 350ml");
    console.log("5 - Garrafa de suco de Cereja 250ml");
    console.log("0 -  sair e receber o total.");
    var menu = Number(entrada.question("Digite o numero do produto "));
    if (menu != 0) {
        qtdp = Number(entrada.question("Digite a quantidade do produto "));
        switch (menu) {
            case 1: total += (qtdp * 2);
                break;

            case 2: total += (qtdp * 3.5);
                break;

            case 3: total += (qtdp * 4);
                break;

            case 4: total += (qtdp * 3.50);
                break;

            case 5: total += (qtdp * 8);
                break;
        }

    }
    console.log("O total é: " + total);
}
while (menu != 0);