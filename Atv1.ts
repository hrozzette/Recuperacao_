/* (5 pontos)
1 - Crie um programa que peça um número ao usuário e armazene ele na variável x. Depois
peça outro número e armazene na variável y.
Mostre esses números. Em seguida, faça com que x passe a ter o valor de y, e que y passe a ter
o valor de x e mostre os números.
Nome Aluno: Heloísa Rozzette Marcovecchio
*/

let teclado = require(`prompt-sync`)();

let numberx: number = parseInt(teclado("Digite um número: "));
let numbery: number = parseInt(teclado("Digite outro número: "));

console.log(`Os números digitados foram: ${numberx} e ${numbery}`);

let numvalor: number = numberx;
numberx = numbery;
numbery = numvalor;

console.log(`Os números trocados são ${numberx} e ${numbery}`);