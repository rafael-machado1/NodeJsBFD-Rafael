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

enum precoCombustivel{ //Os preços foram pesquisados em 10/11/25 e cotados para o Estado de Goiás
  gasolina = 6.17, 
  etanol = 4.13,
  diesel = 6.28,
  eletricidade = 0.617 //Assumindo a tarifa convencional em GOIÁS (0.617) e um custo médio de 15 kwh por 100km rodados
}

interface abastecimento{
  abastecerVL():void{}
  abastecerPL():void{}

}

class bomba{
  tipoDeCombustivel: string
  valorLitro: precoCombustivel
  qtdCombustivel: number

  constructor(tipoDeCombustivel: string, valorLitro: number){
    this.tipoDeCombustivel = tipoDeCombustivel
    this.valorLitro = valorLitro
    this.qtdCombustivel = 100
  }
}
