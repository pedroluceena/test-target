const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function fibonacciCheck(num) {
  let a = 0, b = 1;

  if (num === 0 || num === 1) {
    return `O número ${num} pertence à sequência de Fibonacci.`;
  }

  while (b <= num) { 
    let temp = b;
    b = a + b;
    a = temp;
  }

  return `O número ${num} NÃO pertence à sequência de Fibonacci.`;
}

rl.question("Informe um número para verificar se pertence à sequência de Fibonacci: ", (input) => {
  const numero = parseInt(input);

  if (isNaN(numero)) {
    console.log("Por favor, insira um número inteiro válido.");
    rl.close();
  } else {
    console.log(fibonacciCheck(numero));
    rl.close();
  }
});