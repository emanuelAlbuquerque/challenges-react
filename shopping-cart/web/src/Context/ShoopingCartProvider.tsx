import { ReactNode, useState } from 'react'
import { ShoopingCartContext } from './ShoopingCartContext'
import axiosIntance from '../services/Api'

interface IShoopingCartProvider {
  children: ReactNode
}

export interface IProducts {
  name: string
  category: string
  price: number
  quantify: number
  img: string
  _id: string
}

export const ShoopingCartProvider = ({ children }: IShoopingCartProvider) => {
  const [products, setProducts] = useState<IProducts[]>([])
  const [amount, setAmount] = useState(0)

  const listProducts = async () => {
    const list = await axiosIntance.get('/')

    setAmount(0)
    setProducts(list.data)
  }

  return (
    <ShoopingCartContext.Provider
      value={{ products, amount, setAmount, listProducts }}
    >
      {children}
    </ShoopingCartContext.Provider>
  )
}
