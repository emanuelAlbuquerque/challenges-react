import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ShoopingCartProvider } from './Context/ShoopingCartProvider'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ShoopingCartProvider>
    <App />
  </ShoopingCartProvider>
)
