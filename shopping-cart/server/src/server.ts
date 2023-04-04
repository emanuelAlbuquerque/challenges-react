import fastify from "fastify";
import { app } from "./app/app";
require('dotenv').config()


const start = async () => {
  try {
    await app.listen({
      port: process.env.PORT ? Number(process.env.PORT) : 3333,
      host: '0.0.0.0'
    })
    console.log('Server is Running')
  } catch (err) {
    app.log.error(err)
  }
}

app.get('/products', async (request, replay) => replay.send("hello word"))

start()

