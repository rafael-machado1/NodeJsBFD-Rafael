import express from 'express'
import Item from '../models/items'
import itensRepository from '../repositories/itens-repository'

const itensRouter = express.Router()

itensRouter.post('/itens', (req, res) => {
  res.send('Cria novo item')
})
itensRouter.get('/itens', (req, res) => {
  res.send('Lê todos os itens')
})
itensRouter.get('/itens/:id', (req, res) => {
  const id: number = +req.params.id
  res.send(`Lê o item ${id}`)
})
itensRouter.put('/itens/:id', (req, res) => {
  const id: number = +req.params.id
  res.send(`Atualiza o item ${id}`)
})
itensRouter.delete('/itens/:id', (req, res) => {
  const id: number = +req.params.id
  res.send(`Apaga o item ${id}`)
})

itensRouter.get('/itens', (req, res) => {
    const itens: Item[] = [
        {
            id: 1,
            nome: 'Produto 1',
            descricao: 'Descrição do produto 1'
        },
        {
            id: 2,
            nome: 'Produto 2',
            descricao: 'Descrição do produto 2'
        }
    ]
    res.json(itens)
})

itensRouter.get('/itens/:id', (req, res) => {
    const id: number = +req.params.id
    const item: Item = {
        id: id,
        nome: `Produto ${id}`,
        descricao: `Descrição do produto ${id}`
    }
    res.json(item)
})

itensRouter.post('/itens', (req, res) => {
    const item: Item = req.body
    //TODO: Criar e salvar um novo item
    const id = 123
    res.status(201).location(`/itens/${id}`).send()
})

itensRouter.put('/itens/:id', (req, res) => {
    const id: number = +req.params.id
    res.status(204).send()
})

itensRouter.delete('/itens/:id', (req, res) => {
    const id: number = +req.params.id
    res.status(204).send()
})

itensRouter.post('/itens', (req, res) => {
    const item: Item = req.body
    itensRepository.criar(item, (id) => {
        if (id) {
            res.status(201).location(`/itens/${id}`).send()
        } else {
            res.status(400).send()
        }
    })
})

itensRouter.get('/itens', (req, res) => {
    itensRepository.lerTodos((itens) => res.json(itens))
})

itensRouter.get('/itens/:id', (req, res) => {
    const id: number = +req.params.id
    itensRepository.ler(id, (item) => {
        if (item) {
            res.json(item)
        } else {
            res.status(404).send()
        }
    })
})

itensRouter.put('/itens/:id', (req, res) => {
    const id: number = +req.params.id
    itensRepository.atualizar(id, req.body, (notFound) => {
        if (notFound) {
            res.status(404).send()
        } else {
            res.status(204).send()
        }
    })
})

itensRouter.delete('/itens/:id', (req, res) => {
    const id: number = +req.params.id
    itensRepository.apagar(id, (notFound) => {
        if (notFound) {
            res.status(404).send()
        } else {
            res.status(204).send()
        }
    })
})

export default itensRouter
