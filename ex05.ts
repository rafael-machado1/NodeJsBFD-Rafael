/*Crie uma classe que modele um macaco:
Atributos: Nome e bucho (estômago).
Métodos: Comer, verBucho e digerir.
Faça um programa e teste interativamente:
Crie 2 macacos
Alimente-os com 3 alimentos diferentes e verificando o conteúdo do estômago a cada refeição.
Experimente fazer com que um macaco coma o outro. É possível criar um macaco canibal?*/
class macaco {
  nome: string
  bucho: string[]

  constructor(nome: string, bucho: string[]){
    this.nome = nome
    this.bucho = bucho
  }

  comer(): void{
    console.log(`O ${macaco} está comendo ${this.bucho}`)
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
      function mastigando(){
        console.log(`O ${macaco} está mastigando...`)
      }
      const repetindo = setInterval(mastigando, 2000)
      setTimeout(() => {
        clearInterval(repetindo);
        console.log(`O ${macaco} terminou de digerir!`)
      }, 6000);
    } else {
      console.log(`[ERROR] Não é possível digerir sem conteúdo no bucho`)
    }
  }
}

const macaco1 = new macaco("Macaquinho", ["Banana", "Manga", "Pequi"])
macaco1.comer()
macaco1.digerir()
macaco1.verBucho()

const macaco2 = new macaco("Macacão", ["Maçã", "Acerola", "Goiaba"])
macaco2.comer()
macaco2.digerir()
macaco2.verBucho()

const macaco3 = new macaco ("Macaco", ["Abacaxi", macaco1])
macaco3.comer()
macaco3.digerir()
macaco3.verBucho()