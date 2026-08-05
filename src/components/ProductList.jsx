import ProductCard from './ProductCard'

function ProductList({ products, onAddToCart }) {
  return (
    <section className="product-grid" aria-label="Product catalog">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </section>
  )
}

export default ProductList
