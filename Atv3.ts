/*10 pontos
3 - Faça um algoritmo que leia um valor e informe se ele está dentro de
um intervalo específico (por exemplo, entre 10 e 20, 20 e 30, até o 100).
Nome Aluno: Heloísa Rozzette Marcovecchio
*/

let teclado = require(`prompt-sync`)();

console.log(`----------------------------`);
console.log(`-- VERIFICA INTERVALOS --`);
console.log(`----------------------------`);

let numero: number = parseInt(teclado(`Digite um número: `));

if (numero >= 0 && numero <= 10) {
    console.log(`O número ${numero} está entre 0 e 10.`);
} else if (numero > 10 && numero <= 20) {
    console.log(`O número ${numero} está entre 11 e 20.`);
} else if (numero > 20 && numero <= 30) {
    console.log(`O número ${numero} está entre 21 e 30.`);
} else if (numero > 30 && numero <= 40) {
    console.log(`O número ${numero} está entre 31 e 40.`);
} else if (numero > 40 && numero <=50) {
    console.log(`O número ${numero} está entre 41 e 50.`);
} else if (numero > 50 && numero <= 60) {
    console.log(`O número ${numero} está entre 51 e 60.`);
} else if (numero > 60 && numero <= 70) {
    console.log(`O número ${numero} está entre 61 e 70.`);
} else if (numero > 70 && numero <=80) {
    console.log(`O número ${numero} está entre 71 e 80.`);
} else if (numero > 80 && numero <= 90) {
    console.log(`O número ${numero} está entre 81 e 90.`);
} else if (numero > 90 && numero <=100) {
    console.log(`O número ${numero} está entre 91 e 100.`);
} else {
    console.log(`O número ${numero} está fora dos intervalos definidos.`);
}
