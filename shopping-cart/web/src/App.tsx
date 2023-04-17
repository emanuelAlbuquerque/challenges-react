import Summary from './Components/Summary/Summary'
import RowProducts from './Components/RowProducts/TableRow'
import logo from './assets/react.svg'

import { useEffect, useState } from 'react'

import './style.scss'
import axiosIntance from './services/Api'

function App() {
  const [count, setCount] = useState(0)
  const [prodcts, setProducts] = useState([])

  const listProducts = async () => {
    const prod = await axiosIntance.get('/')

    setProducts(prod.data)
  }

  useEffect(() => {
    listProducts()
  }, [])

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
                <RowProducts
                  category="Informatica"
                  id="1dvb"
                  image={logo}
                  name="Monitor"
                  quantify={10}
                  price={2000}
                />
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
