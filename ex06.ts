/*Crie uma classe que modele uma bomba de combustível:
Atributos: tipo de combustível, valor do litro, quantidade do combustível.
Métodos:
Abastecer por valor: método onde é informado o valor a ser abastecido e 
mostra a quantidade de litros que foi colocada no veículo.
Abastecer por litro: método onde é informado a quantidade em 
litros de combustível e mostra o valor a ser pago pelo cliente.
Alterar o valor do litro do combustível: altera o valor do litro do combustível.
Alterar quantidade de combustível: altera a quantidade de combustível restante na bomba.
Sempre que acontecer um abastecimento é necessário atualizar a quantidade de combustível 
total na bomba. A bomba inicia com 100 L de combustível.*/

/*Para quem estiver lendo esse código, nesse exercício tentei entender melhor e aplicar os princípios SOLID.
Por isso, vão existir vários comentários sobre todo o código, como meio de me localizar*/
interface ItipoCombustivel{
  gasolina: number
  etanol: number
  diesel: number
}

const precosCombustivel: ItipoCombustivel = { // Diminui as linhas de código necessárias para criação de outro tipo de bomba
  gasolina: 6.5, // Os preços são exemplos e não seguem preços reais
  etanol: 4.8,
  diesel: 6
}

class bomba{
  tipoDeCombustivel: keyof ItipoCombustivel // Defini o tipo como a interface
  valorLitro: number
  qtdCombustivel: number

  constructor(tipoDeCombustivel: keyof ItipoCombustivel, precos: ItipoCombustivel){
    this.tipoDeCombustivel = tipoDeCombustivel
    this.valorLitro = precos[tipoDeCombustivel]
    this.qtdCombustivel = 100
  }

  abastecerValor(valor: number):void{
    if(this.qtdCombustivel > 0){
      const qtdLitros = valor / this.valorLitro
      let restoValor = this.qtdCombustivel - qtdLitros
      this.qtdCombustivel = restoValor 
      console.log(`[ABASTECIMENTO] Por ${this.valorLitro}R$ o litro você abastece ${qtdLitros.toFixed(2)} litros`)
      console.log(`[ABASTECIMENTO] Agora restam ${restoValor.toFixed(2)} na bomba`)
    } else {
      console.log(`[ERRO] Não há combustível o suficiente na bomba (${this.qtdCombustivel} litros na bomba)`)      
    }
  }

  abastecerLitro(litro: number):void{
    if(this.qtdCombustivel > 0){
      const precoPorLitro = litro * this.valorLitro
      let restoLitro = this.qtdCombustivel - litro
      this.qtdCombustivel = restoLitro
      console.log(`[PREÇO] ${litro} litros totaliza ${precoPorLitro.toFixed(2)}R$`)
      console.log(`[ABASTECIMENTO] Agora restam ${this.qtdCombustivel.toFixed(2)} litros na bomba`)
    } else {
      console.log(`[ERRO] Não há combustível o suficiente na bomba (${this.qtdCombustivel} litros na bomba)`)
    }
  }

  alterarValorLitro(novoValor: number):void{
    this.valorLitro = novoValor
    console.log(`[ATUALIZAÇÃO] O valor do litro foi alterado de ${this.valorLitro} para ${novoValor}`)
  }

  alterarQtdCombustivel(novaQtd: number):void{
    this.qtdCombustivel = novaQtd
    console.log(`[ATUALIZAÇÃO] A quantidade de combustível da bomba foi alterada de ${this.qtdCombustivel} para ${novaQtd}`)
  }
}

// ------------- Testes ------------- \\

const bomba1 = new bomba('gasolina', precosCombustivel)

bomba1.abastecerLitro(5)
bomba1.abastecerValor(50)

const bomba2 = new bomba('diesel', precosCombustivel)

bomba2.abastecerLitro(5)
bomba2.abastecerValor(50)