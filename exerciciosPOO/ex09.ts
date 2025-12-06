/*Identifique as classes e implemente um programa para a seguinte especificação: 
“O supermercado vende diferentes tipos de produtos. 
Cada produto tem um preço e uma quantidade em estoque.
Um pedido de um cliente é composto de 
itens, onde cada item especifica o produto que o cliente deseja e a respectiva quantidade. 
Esse pedido pode ser pago em dinheiro, cheque ou cartão."*/
interface estoqueItem {
  nomeItem: string
  qtdItem: number
  precoItem: number
}

const item: estoqueItem[] = [
  {nomeItem: "maca", qtdItem: 5, precoItem: 1},
  {nomeItem: "manga", qtdItem: 4, precoItem: 4},
  {nomeItem: "tomate", qtdItem: 3, precoItem: 3},
]

class pedidoCliente {
  nomeCliente: string
  numPedido: number

  constructor (nomeCliente: string) {
    this.nomeCliente = nomeCliente
    this.numPedido = 0
  }

    fazerPedido(produto: string, quantidade: number):void{
      this.numPedido += 1
    if (quantidade <= 0) {
      console.log(`[ERRO] Digite uma quantidade válida`)
      return;
    }

    let itemEncontrado!: estoqueItem

      for (const itemAtual of item) {
        if (produto == itemAtual.nomeItem){
          itemEncontrado = itemAtual
          break;
        }
      }

      if (!itemEncontrado){
        console.log(`[ERRO] O produto ${produto} não foi encontrado, tente novamente!`)
        return;
      }

      console.log(`[ENCONTRADO] O produto foi encontrado no estoque, sua quantidade é de ${itemEncontrado.qtdItem} unidades`)
      
      if (itemEncontrado.qtdItem >= quantidade){
        itemEncontrado.qtdItem -= quantidade
        console.log(`[SUCESSO] Pedido de ${quantidade} unidades feito com sucesso`)
        console.log(`[ATUALIZAÇÃO] A quantidade do item ${produto} no estoque agora é ${itemEncontrado.qtdItem}`)
      } else {
        console.log(`[ERRO] Quantidade inválida, o estoque tem somente ${itemEncontrado.qtdItem} unidades`)
      }
  }

  metodoPagamento(metodo: string){}
  
}

//----- Testes -----\\

pedidoCliente.fazerPedido ("maca", 5)