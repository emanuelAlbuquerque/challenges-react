import Summary from './Components/Summary/Summary'
import RowProducts from './Components/RowProducts/TableRow'

import { useState } from 'react'

import './style.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header className="header">
        <h1>Carrinho de compras</h1>
      </header>

      <main>
        <div className="content">
          <section>
            <table>
              <thead>
                <tr>
                  <th>Produto</th>
                  <th>Preço</th>
                  <th>Quantidade</th>
                  <th>Total</th>
                  <th>-</th>
                </tr>
              </thead>
              <tbody>
                <RowProducts />
                <RowProducts />
                <RowProducts />
                <RowProducts />
                <RowProducts />
                <RowProducts />
                <RowProducts />
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
