import { useShoopingCartContext } from '../../Hooks/useShoopingCartContext'
import { formatCurrencyNumber } from '../../Utils/FormatNumber'

interface ISummary {
  freight?: number
}

const Summary = ({ freight = 0 }: ISummary) => {
  const { amount } = useShoopingCartContext()

  return (
    <>
      <div className="box">
        <header>Resumo da compra</header>
        <div className="info">
          <div>
            <span>Sub-total</span>
            <span>{formatCurrencyNumber(amount)}</span>
          </div>
          <div>
            <span>Frete</span>
            <span>{freight ? formatCurrencyNumber(freight) : 'Gratuito'}</span>
          </div>
          <div>
            <button>
              Adicionar cupom de desconto
              <i className="bx bx-right-arrow-alt"></i>
            </button>
          </div>
        </div>
        <footer>
          <span>Total</span>
          <span>{formatCurrencyNumber(amount - freight)}</span>
        </footer>
      </div>
      <button>Finalizar Compra</button>
    </>
  )
}

export default Summary
