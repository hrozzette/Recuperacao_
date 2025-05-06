/*10 pontos
11 – Simule a compra de um carro com as seguintes condições:
Exiba no prompt uma lista com 4 modelos de carros, cada um com um valor fixo.
O usuário deve escolher um dos carros disponíveis e selecionar a forma de pagamento:
 À vista: aplicar um desconto de 15% sobre o valor do carro.
 Parcelado: aplicar um acréscimo de 13% sobre o valor do carro.
Ao final, exiba o valor final da compra de acordo com a escolha do usuário.
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