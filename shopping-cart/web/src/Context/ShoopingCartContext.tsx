import { createContext } from 'react'
import { IProducts } from './ShoopingCartProvider'

interface IShoopingCartContext {
  products: IProducts[]
  amount: number
  setAmount: React.Dispatch<React.SetStateAction<number>>

  listProducts: () => void
}

const initialValue = {
  products: [],
  amount: 0,
  setAmount: () => {},

  listProducts: () => {}
}

export const ShoopingCartContext =
  createContext<IShoopingCartContext>(initialValue)
