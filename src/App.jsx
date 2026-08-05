import { useState } from 'react'
import Cart from './components/Cart'
import ProductList from './components/ProductList'
import { products } from './data/products'

function App() {
  const [cartItems, setCartItems] = useState([])

  const handleAddToCart = (product) => {
    setCartItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.id === product.id)

      if (existingItem) {
        return currentItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        )
      }

      return [...currentItems, { ...product, quantity: 1 }]
    })
  }

  return (
    <main className="app-shell">
      <section className="storefront">
        <header className="page-header">
          <div>
            <p className="eyebrow">CI/CD Tested Storefront</p>
            <h1>Trail Supply Co.</h1>
          </div>
          <p>
            A compact React e-commerce app with automated tests and a GitHub
            Actions deployment pipeline.
          </p>
        </header>

        <ProductList products={products} onAddToCart={handleAddToCart} />
      </section>

      <Cart cartItems={cartItems} onClearCart={() => setCartItems([])} />
    </main>
  )
}

export default App
