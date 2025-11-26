/*Identifique as classes e implemente um programa para a seguinte especificação: 
“O supermercado vende diferentes tipos de produtos. 
Cada produto tem um preço e uma quantidade em estoque.
Um pedido de um cliente é composto de 
itens, onde cada item especifica o produto que o cliente deseja e a respectiva quantidade. 
Esse pedido pode ser pago em dinheiro, cheque ou cartão."*/
const item = [
  {nomeItem: "string", idItem: 123, qtdItem: 321},
  {nomeItem: "teste", idItem: 124, qtdItem: 12},
]

class pedidoCliente {
  nomeCliente: string
  numPedido: number

  constructor (nomeCliente: string) {
    this.nomeCliente = nomeCliente
    this.numPedido = 0
  }

  fazerPedido(produto: typeof item):void{
    this.numPedido += 1
    produto = item.nomeItem 
    console.log(`O produto pedido foi ${}`)

  }

  metodoPagamento(metodo: string){}
  
}

//----- Testes -----\\
/*interface estoqueItem {
  nomeItem: string
  qtdItem: number
}



const item: estoqueItem[] = [
  {nomeItem: "maca", qtdItem: 5},
  {nomeItem: "manga", qtdItem: 4},
  {nomeItem: "tomate", qtdItem: 3},
]

function fazerPedido(produto: string, quantidade: number):void{
  if (produto) {
    for (const index of item) {
      if (produto == produto.nomeItem) {
        console.log(`[BUSCA] Seu produto foi encontrado`)
      } else {
        console.log(`[BUSCA] Seu produto não foi encontrado, tente novamente!`)
      }
    }
  }
  produto.qtdItem - quantidade
}

fazerPedido ("maca", 5)