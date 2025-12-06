/*Faça uma classe contaInvestimento que seja semelhante a classe ContaBancaria, 
com a diferença de que se adicione um atributo taxaJuros.
Forneça um construtor que configure tanto o saldo inicial com a taxa de juros
Forneça um método adicioneJuros (sem parâmetro explícito) que adicione juros à conta
Escreva um programa que construa uma poupança com um saldo inicial de R$1.000,00 e uma taxa de juros de 10%
Depois aplique o método adicioneJuros() cinco vezes e imprima o saldo resultante*/
class contaInvestimento {
  numConta: number
  nomeCorrentista: string
  saldo: number
  taxaJuros: number

  constructor(numConta: number, nomeCorrentista: string, saldo: number, taxaJuros: number){
    this.numConta = numConta
    this.nomeCorrentista = nomeCorrentista
    this.saldo = saldo
    this.taxaJuros = taxaJuros
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

  adicioneJuros():void{
    const saldoNovo = this.saldo + (this.saldo * this.taxaJuros)
    this.saldo = saldoNovo
    console.log(`O seu novo saldo agora é ${saldoNovo}`)
  }
}

const investimento1 = new contaInvestimento(123, "Rafael", 1000, 0.1)
investimento1.adicioneJuros()
investimento1.adicioneJuros()
investimento1.adicioneJuros()
investimento1.adicioneJuros()
investimento1.adicioneJuros()