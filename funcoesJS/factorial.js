let num = parseInt(prompt('Digite um número:'))

function fatorial(numero){
  if (numero == 1 || numero == 0){
    return 1;
  }
    let valorFinal = 1 
    for (let i = numero; i >= 1; i--){
      valorFinal = valorFinal * i;
  }
  return valorFinal
}


let resultado = fatorial(num)
console.log(`O fatorial de ${num} é ${resultado}`)