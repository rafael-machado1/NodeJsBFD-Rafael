/*Faça um programa que simule um televisor criando-o como um objeto:
O usuário deve ser capaz de informar o número do canal e aumentar ou diminuir o volume.
Certifique-se de que o número do canal e o nível do volume permanecem dentro de faixas válidas.*/

class televisor {
  numCanal: number
  volumeAtual: number

  constructor(numCanal: number, volumeAtual: number){
  this.numCanal = numCanal
  this.volumeAtual = volumeAtual
  }
  
  mudarCanal(a: number){
  this.numCanal = a 
    if(a < 0 || a >= 50){
      console.log("Digite um canal válido")
    } else {
      console.log(`O canal escolhido foi ${this.numCanal}`)
    }
  }
  
  aumVolume(a: number){
    const volumeAumentado = this.volumeAtual + a
    if(volumeAumentado > 100){
      console.log("O volume máximo é 100, tente novamente com um valor menor")
    } else if (volumeAumentado < 0){
      console.log("O volume mínimo é 0 (mudo), tente novamente com um valor maior")
    } else {
      this.volumeAtual = volumeAumentado 
      console.log(`O volume atual é de ${volumeAumentado}`)
    }
  }

  dimVolume(a: number){
    const volumeDiminuido = this.volumeAtual - a
    if(volumeDiminuido < 0){
      console.log("O volume mínimo é 0 (mudo), tente novamente")
    } else {
      this.volumeAtual = volumeDiminuido
      console.log(`O volume atual é de ${volumeDiminuido}`)
    }
  }
}

/*Esses testes foram feitos para verificar o processo de atribuição*/
// const televisor1 = new televisor(4, 15)
// televisor1.mudarCanal(20)
// televisor1.aumVolume(15)
// televisor1.dimVolume(15)
// console.log(televisor1.volumeAtual)