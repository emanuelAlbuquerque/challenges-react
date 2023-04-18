import mongoose, { Schema } from "mongoose";

export interface IProductsSchema {
  name: string
  category: string
  price: number
  quantify: number
  img: string
}

const productsSchema: Schema = new Schema<IProductsSchema>(
  {
    name: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    img: { type: String },
    quantify: { type: Number, required: true },
  }, {
  versionKey: false
}
)

export const products = mongoose.model<IProductsSchema>('products', productsSchema)