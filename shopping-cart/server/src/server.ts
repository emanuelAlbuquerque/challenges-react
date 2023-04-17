import { app } from "./app/app";
import { connectionDB } from "./database/config";
import { routerProducts } from "./routes/ProductsRouter";
import cors from '@fastify/cors'
import doteenv from 'dotenv'

doteenv.config()
app.register(cors, {
  origin: '*'
})

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

connectionDB()
routerProducts()
start()

