/*Crie uma classe que modele uma conta corrente:
Atributos: número da conta, nome do correntista e saldo.
Métodos: alterar nome, depósito e saque.*/

class contaCorrente {
  numConta: number
  nomeCorrentista: string
  saldo: number

  constructor(numConta: number, nomeCorrentista: string, saldo: number){
    this.numConta = numConta
    this.nomeCorrentista = nomeCorrentista
    this.saldo = saldo
  }

  alterarNome(a: string){
    console.log(`Seu nome agora é ${this.nomeCorrentista = a}`)
  }

  depósito(a: number){
    console.log(`Seu saldo agora é de ${a + this.saldo}`)
  }

  saque(a: number){
    console.log(`Seu saldo agora é de ${this.saldo - a}`)
  }
}

const correntista1 = new contaCorrente(123, "Rafael", 100)
correntista1.alterarNome("João")
correntista1.depósito(50)
correntista1.saque(25)