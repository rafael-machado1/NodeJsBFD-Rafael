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

interface ItipoCombustivel{  // Nessa primeira parte tentei utilizar do princípio das interfaces
  gasolina: number;
  etanol: number;
  diesel: number;
}

const precosCombustivel: ItipoCombustivel = {
  gasolina: 5,
  etanol: 3,
  diesel: 4
}

abstract class Iabastecimento{
  abastecerValor():void{}
  abastecerLitro():void{}
}

class bomba{
  tipoDeCombustivel: ItipoCombustivel
  valorLitro: precosCombustivel
  qtdCombustivel: number

  constructor(tipoDeCombustivel: ItipoCombustivel, valorLitro: precosCombustivel){
    this.tipoDeCombustivel = tipoDeCombustivel
    this.valorLitro = valorLitro
    this.qtdCombustivel = 100
  }
}