/*10 pontos
11 – Simule a compra de um carro com as seguintes condições:
Exiba no prompt uma lista com 4 modelos de carros, cada um com um valor fixo.
O usuário deve escolher um dos carros disponíveis e selecionar a forma de pagamento:
 À vista: aplicar um desconto de 15% sobre o valor do carro.
 Parcelado: aplicar um acréscimo de 13% sobre o valor do carro.
Ao final, exiba o valor final da compra de acordo com a escolha do usuário.
Nome Aluno: Heloísa Rozzette Marcovecchio
*/

let teclado = require('prompt-sync')();

let onix = 93000;
let fox = 72000;
let uno = 50000;
let fordka = 80000;

let descontoavista = 0.15;
let acrescimo = 1.13;
let valorcarro = 0;

console.log("----------------------------------------------");
console.log("Escolha um dos modelos de carro:");
console.log("1 - Onix: R$ 93.000,00");
console.log("2 - Fox : R$ 72.000,00");
console.log("3 - Uno: R$ 50.000,00");
console.log("4 - Ford Ka: R$ 80.000,00");
console.log("----------------------------------------------");

let escolha: number = parseInt(teclado("Digite o número do modelo desejado: "));

if (escolha == 1) {
    valorcarro = onix;
} else if (escolha == 2) {
    valorcarro = fox;
} else if (escolha == 3) {
    valorcarro = uno;
} else if (escolha == 4) {
    valorcarro = fordka;
} else {
    console.log("Escolha inválida. Tente novamente.");
}

if (valorcarro > 0) 
    console.log("----------------------------------------------");
    console.log("Escolha a forma de pagamento:");
    console.log("1 - À vista");
    console.log("2 - Parcelado");
    console.log("----------------------------------------------");

    let Pagamento: number = parseInt(teclado("Digite o número da forma de pagamento desejada: "));

    if (Pagamento == 1) {
        valorcarro = valorcarro - (valorcarro * descontoavista);
        console.log(`O valor do carro com desconto é: R$ ${valorcarro}`);
    } else if (Pagamento == 2) {
        valorcarro = valorcarro * acrescimo;
        console.log(`O valor do carro parcelado é: R$ ${valorcarro}`);
    } else {
        console.log("Escolha inválida. Tente novamente.");
    }