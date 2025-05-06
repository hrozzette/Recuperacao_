/* 10 pontos
9 – Pedir ao usuário dois números e imprimir nesse intervalo os números ímpares.
Nome aluno: Heloísa Rozzette Marcovecchio
*/

let teclado = require(`prompt-sync`)();

let num1: number = parseInt(teclado("Digite o primeiro número: "));
let num2: number = parseInt(teclado("Digite o segundo número: "));

while (num1<= num2) {;
  if (num1%2 !=0) {;
    console.log (num1);
    };
    num1++;
  }