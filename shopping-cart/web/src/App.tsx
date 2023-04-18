import Summary from './Components/Summary/Summary'
import RowProducts from './Components/RowProducts/TableRow'

import { useEffect } from 'react'
import { useShoopingCartContext } from './Hooks/useShoopingCartContext'

import './style.scss'

function App() {
  const { products, listProducts, setAmount } = useShoopingCartContext()

  const handleAmount = () => {
    products.forEach(product => {
      setAmount(prev => prev + product.price * product.quantify)
    })
  }

  useEffect(() => {
    listProducts()
  }, [])

  useEffect(() => {
    handleAmount()
  }, [products])

  return (
    <>
      <header className="header">
        <h1>Cart Shooping</h1>
      </header>

      <main>
        <div className="content">
          <section>
            <table>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantify</th>
                  <th>Total</th>
                  <th>-</th>
                </tr>
              </thead>
              <tbody>
                {products.map(product => (
                  <RowProducts
                    key={product._id}
                    _id={product._id}
                    category={product.category}
                    image={product.img}
                    name={product.name}
                    quantify={product.quantify}
                    price={product.price}
                  />
                ))}
              </tbody>
            </table>
          </section>
          <aside>
            <Summary />
          </aside>
        </div>
      </main>
    </>
  )
}

export default App
