/* (5 pontos)
2 - Escreva um programa que receba três números inteiros e mostre eles em ordem
decrescente.
Nome Aluno: Heloísa Rozzette Marcovecchio
*/

let promptSync = require('prompt-sync')();
let n1: number = Number(promptSync('Digite o primeiro número: '));
let n2: number = Number(promptSync('Digite o segundo número: '));
let n3: number = Number(promptSync('Digite o terceiro número: '));
let maior: number = 0;
let meio: number = 0;
let menor: number = 0;
if (n1 > n2 && n1 > n3) {
    maior = n1;
    if (n2 > n3) {
        meio = n2;
        menor = n3;
    } else {
        meio = n3;
        menor = n2;
    }
}
if (n2 > n1 && n2 > n3) {
    maior = n2;
    if (n1 > n3) {
        meio = n1;
        menor = n3;
    } else {
        meio = n3;
        menor = n1;
    }
}
if (n3 > n1 && n3 > n2) {
    maior = n3;
    if (n1 > n2) {
        meio = n1;
        menor = n2;
    } else {
        meio = n2;
        menor = n1;
    }
}
console.log(`A ordem decrescente é: ${maior}, ${meio}, ${menor}`);