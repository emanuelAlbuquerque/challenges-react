import { app } from "../app/app";
import { CarrinhoController } from "../controllers/CarrinhoController";

const produtos = new CarrinhoController

function routerListarProducts(fastify: any, opts: any, done: any) {
  fastify.get('/products', produtos.listProducts)
  done()
}

function routerCadastrarProdudos(fastify: any, opts: any, done: any) {
  fastify.post('/cadastrarProduto', produtos.cadastrarProduto)
  done()
}

function routerFindProductById(fastify: any, opts: any, done: any) {
  fastify.get('/product/:id', produtos.findProductById)
  done()
}

export const routerProducts = () => {
  app.register(routerListarProducts)
  app.register(routerCadastrarProdudos)
  app.register(routerFindProductById)
  // app.register(routerCadastrarProdudos)
}

