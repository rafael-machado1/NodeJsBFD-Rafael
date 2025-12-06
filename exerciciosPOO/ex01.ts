/*Crie uma classe que modele um aluno de academia:
Atributos: Nome, data de nascimento, peso e altura.
Métodos: Calcula idade.*/

class Aluno {
  public nome: string
  public dataDeNascimento: number
  public peso: number
  public altura: number

  constructor(nome: string, dataDeNascimento: number, peso: number, altura: number){
    this.nome = nome
    this.dataDeNascimento = dataDeNascimento
    this.peso = peso
    this.altura = altura
  }

  idade(){
    console.log(`O aluno possui ${2025 - this.dataDeNascimento} anos de idade`)  
  }
}
const Aluno1 = new Aluno("Rafael", 1999, 80, 1.8)
Aluno1.idade()