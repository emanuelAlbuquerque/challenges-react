import { app } from "./app/app";
import { routerProducts } from "./routes/ProductsRouter";
require('dotenv').config()

const start = async () => {
  try {
    await app.listen({
      port: process.env.PORT ? Number(process.env.PORT) : 3333,
      host: '0.0.0.0'
    })
    console.log('Server is Running')
  } catch (err) {
    console.log(err)
  }
}

// app.post('/cadastrarProdutos', async (request, replay) => {
//   // const { nome, preco } = request.body as bodyRequest

//   // productsCart.push({
//   //   name: nome,
//   //   price: preco
//   // })

//   return replay.status(201).send(request.body)
// })


routerProducts()
start()

