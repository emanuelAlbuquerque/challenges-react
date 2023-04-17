import { app } from "../app/app";
import { CarrinhoController } from "../controllers/CarrinhoController";

const produtos = new CarrinhoController

function routerListarProducts(fastify: any, opts: any, done: any) {
  fastify.get('/', produtos.listProducts)
  done()
}

function routerFindProductById(fastify: any, opts: any, done: any) {
  fastify.get('/product/:id', produtos.findProductById)
  done()
}

function routerCadastrarProdudos(fastify: any, opts: any, done: any) {
  fastify.post('/createProduct', produtos.createProduct)
  done()
}

function deleteProductById(fastify: any, opts: any, done: any) {
  fastify.delete('/product/:id', produtos.deleteProductById)
  done()
}

function updateProductById(fastify: any, opts: any, done: any) {
  fastify.put('/product/:id', produtos.updateProductById)
  done()
}

export const routerProducts = () => {
  app.register(routerListarProducts)
  app.register(routerCadastrarProdudos)
  app.register(routerFindProductById)
  app.register(deleteProductById)
  app.register(updateProductById)
  // app.register(routerCadastrarProdudos)
}

