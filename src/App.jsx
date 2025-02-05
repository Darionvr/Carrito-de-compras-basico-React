import './App.css'

import DessertCard from './components/DessertCard'
import Cart from './components/Cart'
import CartProvider from './context/Context'

function App() {


  return (
    <>

      <CartProvider>
        <header>
          <h1>Desserts</h1>
        </header>
        <DessertCard />
        <Cart />
      </CartProvider>
    </>
  )
}

export default App
