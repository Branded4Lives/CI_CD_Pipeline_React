function ProductCard({ product, onAddToCart }) {
  return (
    <article className="product-card">
      <div className="product-image-wrap">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="product-details">
        <p className="category">{product.category}</p>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
      </div>

      <div className="product-actions">
        <p className="price">${product.price.toFixed(2)}</p>
        <button type="button" onClick={() => onAddToCart(product)}>
          Add to Cart
        </button>
      </div>
    </article>
  )
}

export default ProductCard
