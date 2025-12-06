/*Crie uma classe que modele um macaco:
Atributos: Nome e bucho (estômago).
Métodos: Comer, verBucho e digerir.
Faça um programa e teste interativamente:
Crie 2 macacos
Alimente-os com 3 alimentos diferentes e verificando o conteúdo do estômago a cada refeição.
Experimente fazer com que um macaco coma o outro. É possível criar um macaco canibal?*/
class macaco {
  public nome: string
  public bucho: (string | macaco)[]

  constructor(nome: string, bucho:(string | macaco)[]){
    this.nome = nome
    this.bucho = bucho
  }

  comer(alimento: (string | macaco)): void{
    if (alimento instanceof macaco){
      console.log(`[CANIBALISMO] o ${this.nome} está tentado comer o ${alimento}`)
      this.bucho.push(alimento)
    } else {
      console.log(`O ${this.nome} está comendo ${alimento}`)
      this.bucho.push(alimento)
    }
  }

  verBucho(): void{
    if(this.bucho.length > 0){
      console.log(`O bucho do macaco tem ${this.bucho}`)
    } else {
      console.log(`O bucho do macaco não tem nada`)
    }
  }

  digerir(): void{
    if(this.bucho.length > 0){
      const nomeMacaco = this.nome
      function mastigando(){
        console.log(`O ${nomeMacaco} está mastigando...`)
      }
      const repetindo = setInterval(mastigando, 2000)
      setTimeout(() => {
        this.bucho = [];
        clearInterval(repetindo);
        console.log(`O ${nomeMacaco} terminou de digerir!`)
      }, 6000);
    } else {
      console.log(`[ERROR] Não é possível digerir sem conteúdo no bucho`)
    }
  }
}

const macaco1 = new macaco("Macaquinho", [])
macaco1.comer("banana")
macaco1.comer("maçã")
macaco1.comer("goiaba")
macaco1.verBucho()
macaco1.digerir()

const macaco2 = new macaco("Macacão", [])
macaco2.comer(macaco1)
macaco2.digerir()
macaco2.verBucho()

// const macaco3 = new macaco ("Macaco", [])
// macaco3.comer(macaco2)
// macaco3.digerir()
// macaco3.verBucho()