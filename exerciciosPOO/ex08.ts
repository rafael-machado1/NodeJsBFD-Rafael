/*Crie uma classe que modele um funcionário.
Um empregado tem um nome (String) e um salário (Double)
Escreva um construtor com dois parâmetros (nome e salário)
Métodos para devolver nome, salário, 
aumentar salário (porcentualDeAumento) que aumente o 
salário do funcionário em uma certa porcentagem.
Escreva um pequeno programa que teste sua classe.*/
class funcionario{
  nome: string
  salario: number

  constructor(nome: string, salario: number){
    this.nome = nome
    this.salario = salario
  }

  printNome():void{
    function buscarBD(){
      console.log("Buscando no banco de dados as informações do funcionário")
    }
    const buscando = setInterval(buscarBD, 1000)
      setTimeout(() => {
        clearInterval(buscando)
        console.log(`O nome foi encontrado! - ${this.nome}`)
      }, 3000);
    }


  aumentarSalario(percentual: number):void{
    console.log(`Seu antigo salário de ${this.salario} foi alterado`)
    const salarioAtual = this.salario + (this.salario * percentual)
    this.salario = salarioAtual
    console.log(`O novo salário do funcionário é ${this.salario}`)
  }
}



//--------- Testes ---------\\

const funcionario1 = new funcionario("Teste", 2000)
funcionario1.printNome()
funcionario1.aumentarSalario(0.1)