/* // Questão 1

const indice = 13;
let soma = 0;
let k = 0;

while (k < indice) {
  k++;
  soma = soma + k;
}

console.log(soma);

// Questão 2

let a = 0;
let b = 1;

function checkFibonacciNumber(n) {
  for (let i = 0; a <= n; i++) {
    if (a === n) {
      return true;
    }
    const temp = a;
    a = b;
    b = temp + b;
  }

  return false;
}

const UserNumber = prompt("Give me a number");

if (checkFibonacciNumber(UserNumber)) {
  console.log(`${UserNumber} belong to fibonacci sequence.`);
} else {
  console.log(`${UserNumber} not belong to fibonacci sequence`);
}

// Questão 5

const invertString = (str) => {
  return str.split("").reverse().join("");
};

let yourString;

console.log(invertString((yourString = "ola")));
 */
