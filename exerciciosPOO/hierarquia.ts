/*Crie uma hierarquia de classes com Animal sendo a classe base e Gato e Pássaro como subclasses. 
Implemente métodos especifícos para cada animal*/
abstract class Animal{
  public tipoDePelagem: string
  public nome: string
  public especie: string
  public som: string 

  constructor(tipoDePelagem: string, nome: string, especie: string, som: string){
    this.tipoDePelagem = tipoDePelagem
    this.nome = nome
    this.especie = especie
    this.som = som
  }

  public abstract sonoridade(): string;
}
class Gato extends Animal{
  
  constructor(tipoDePelagem: string, nome: string, especie: string, som: string){
    super(tipoDePelagem, nome, especie, som)  
  }

  public sonoridade(): string{
    return "O gato faz meow!"
  }

  public ataque(): string{
    return "O gato arranha"
  }

}

class Passaro extends Animal{

  constructor(tipoDePelagem:string, nome: string, especie: string, som: string){
    super(tipoDePelagem, nome, especie, som)
  }

  public sonoridade(): string{
    return"O pássaro pia"
  }

  public voar(): string{
    return"O pássaro voa"
  }
}

const meuGato = new Gato("Pelo", "Tonho", "Persa", "Mia");
const meuPassaro = new Passaro("Penas", "Tucano", "Calopsita", "Canta")

console.log(meuGato.sonoridade())
console.log(meuGato.ataque())
console.log(meuPassaro.sonoridade())
console.log(meuPassaro.voar())