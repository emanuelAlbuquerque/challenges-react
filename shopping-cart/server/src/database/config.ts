import mongoose from "mongoose";
require('dotenv').config()

const password = 'nMgN68p8Tz3fR6CQ'

export const connectionDB = async () => {
  mongoose.connect(
    process.env.URI_DATABASE || `mongodb+srv://admin:${password}@cart.poxendk.mongodb.net/cart`
  )
    .then(() => console.log('Database connection was successful'))
    .catch((error: Error) => console.log(`${error.message} - Error Database Connection`))
}

