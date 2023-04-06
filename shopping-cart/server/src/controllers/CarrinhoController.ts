import { FastifyReply, FastifyRequest } from "fastify";
import { productsCart, productsSchema } from "../ProductsCart";
import { z } from 'zod'

interface findProductByIdParamns {
  id: string
}

export class CarrinhoController {
  async listProducts(request: FastifyRequest, replay: FastifyReply) {

    const products = [...productsCart]

    if (products.length === 0) {
      return replay.send('Nenhum produto disponiveis')
    }

    return replay.status(200).send(products)
  }

  async findProductById(request: FastifyRequest, replay: FastifyReply) {
    const { id } = request.params as findProductByIdParamns

    const findProduct = productsCart.find((produto) => produto.id === id)

    if (!findProduct) {
      return replay.status(400).send({ mensage: 'Product not find' })
    }

    return replay.status(200).send(findProduct)
  }


  async cadastrarProduto(request: FastifyRequest, reply: FastifyReply) {
    try {
      const products = productsSchema.parse(request.body)
      productsCart.push(products)
    } catch (error) {
      const errorJson = JSON.stringify(error)
      if (error instanceof z.ZodError) {
        return reply.status(400).send(errorJson)
      }
    }

    return reply.status(201).send(productsCart)
  }

  // async deleteProductById(request: FastifyRequest, replay: FastifyReply) {
  //   const { id } = request.params as findProductByIdParamns

  //   const products = productsCart.filter((produto) => produto.id !== id)

  //   if (!products) {
  //     return replay.status(400).send({ mensage: 'Product not find' })
  //   }



  //   return replay.status(200).send(findProduct)
  // }



}