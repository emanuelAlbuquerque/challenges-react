import React, { useState } from 'react'
import { formatCurrencyNumber } from '../../Utils/FormatNumber'
import axiosIntance from '../../services/Api'
import { useShoopingCartContext } from '../../Hooks/useShoopingCartContext'

interface IRowProducts {
  _id: string
  name: string
  category: string
  image: string
  price: number
  quantify: number
}

const RowProducts = ({
  category,
  _id,
  image,
  name,
  price,
  quantify
}: IRowProducts) => {
  const [quantifyModify, setQuantifyModify] = useState<number>(quantify)
  const { setAmount, listProducts } = useShoopingCartContext()

  const handleClickQuantify = async (option: 'increment' | 'decrement') => {
    let qtd = quantifyModify

    if (option === 'increment') {
      qtd += 1
    }

    if (option === 'decrement') {
      if (qtd === 1) {
        return
      }
      qtd -= 1
    }

    await axiosIntance.put(`/product/${_id}`, {
      quantify: qtd
    })

    setQuantifyModify(qtd)
    listProducts()
  }

  const deleteProduct = async () => {
    await axiosIntance.delete(`/product/${_id}`)
    setAmount(0)
    listProducts()
  }

  return (
    <tr>
      <td>
        <div className="product">
          <img src={image} alt="" />
          <div className="info">
            <div className="name">{name}</div>
            <div className="category">{category}</div>
          </div>
        </div>
      </td>
      <td>{formatCurrencyNumber(price)}</td>
      <td>
        <div className="qty">
          <button onClick={() => handleClickQuantify('decrement')}>
            <i className="bx bx-minus"></i>
          </button>
          <span>{quantifyModify}</span>
          <button onClick={() => handleClickQuantify('increment')}>
            <i className="bx bx-plus"></i>
          </button>
        </div>
      </td>
      <td>{formatCurrencyNumber(price * quantifyModify)}</td>
      <td>
        <button className="remove" onClick={deleteProduct}>
          <i className="bx bx-x"></i>
        </button>
      </td>
    </tr>
  )
}

export default RowProducts
