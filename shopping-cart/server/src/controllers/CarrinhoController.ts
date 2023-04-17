import { FastifyReply, FastifyRequest } from "fastify";
import { IProductsSchema, products } from "../models/Products.schema";
import { Error, MongooseError } from "mongoose";

interface findProductByIdParamns {
  id: string
}

export class CarrinhoController {

  async listProducts(request: FastifyRequest, reply: FastifyReply) {
    const productsList = await products.find().exec()

    if (!productsList) {
      return reply.status(400).send({ menssage: "No product available" })
    }

    return reply.status(200).send(productsList)
  }

  async findProductById(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.params as findProductByIdParamns

    try {
      const findProduct = await products.findById(id).exec()

      if (!findProduct) {
        return reply.status(400).send({ mensage: 'Product not find' })
      }

      return reply.status(200).send(findProduct)
    } catch (error) {
      const err = error as MongooseError
      return reply.status(500).send({ menssage: err.message })
    }
  }

  async createProduct(request: FastifyRequest, reply: FastifyReply) {
    try {
      const productsCreate = await products.create(request.body)

      return reply.status(201).send(productsCreate)

    } catch (error) {
      const err = error as MongooseError
      return reply.status(500).send({ menssage: err.message })
    }
  }

  async deleteProductById(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.params as findProductByIdParamns

    try {
      const deleteProduct = await products.findByIdAndDelete(id).exec()

      if (!deleteProduct) {
        return reply.status(400).send({ mensage: 'Product not find' })
      }

      return reply.status(200).send({ mensage: "Product deleted successfully." })
    } catch (error) {
      const err = error as MongooseError
      return reply.status(500).send({ menssage: err.message })
    }
  }

  async updateProductById(request: FastifyRequest, reply: FastifyReply) {
    try {
      const { id } = request.params as findProductByIdParamns
      const body = request.body as IProductsSchema

      const updateProduct = await products.findByIdAndUpdate(id, { $set: body })

      if (!updateProduct) {
        throw new Error('Product not find')
      }

      return reply.status(200).send({ mensage: "Product update successfully." })

    } catch (error) {
      const err = error as MongooseError
      return reply.status(500).send(err)
    }
  }

}