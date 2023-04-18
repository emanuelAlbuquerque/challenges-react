import { useContext } from 'react'
import { ShoopingCartContext } from '../Context/ShoopingCartContext'

export const useShoopingCartContext = () => {
  const shooping = useContext(ShoopingCartContext)

  if (shooping === undefined) {
    throw new Error('Fora do contexto')
  }

  return shooping
}
