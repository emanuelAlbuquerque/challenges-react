import React, { useState } from 'react'

interface IRowProducts {
  id: string
  name: string
  category: string
  image: string
  price: number
  quantify: number
}

const RowProducts = ({
  category,
  id,
  image,
  name,
  price,
  quantify
}: IRowProducts) => {
  const [quantifyModify, setQuantifyModify] = useState<number>(quantify)

  const formatCurrencyNumber = (number: number) => {
    return number.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    })
  }

  const handleClickQuantify = (option: 'increment' | 'decrement') => {
    if (option === 'increment') {
      setQuantifyModify(prev => prev + 1)
    }

    if (option === 'decrement') {
      setQuantifyModify(prev => {
        if (prev === 1) {
          return prev
        }
        return prev - 1
      })
    }
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
        <button className="remove">
          <i className="bx bx-x"></i>
        </button>
      </td>
    </tr>
  )
}

export default RowProducts
