function Cart({ cartItems, onClearCart }) {
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0)
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  )

  return (
    <aside className="cart-panel" aria-label="Shopping cart">
      <div className="cart-header">
        <div>
          <p className="eyebrow">Checkout</p>
          <h2>Cart</h2>
        </div>
        <span aria-label="cart item count">{totalItems}</span>
      </div>

      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <ul className="cart-list">
          {cartItems.map((item) => (
            <li key={item.id}>
              <span>{item.name}</span>
              <span>
                {item.quantity} x ${item.price.toFixed(2)}
              </span>
            </li>
          ))}
        </ul>
      )}

      <div className="cart-total">
        <span>Total</span>
        <strong>${totalPrice.toFixed(2)}</strong>
      </div>

      <button
        className="secondary-button"
        disabled={cartItems.length === 0}
        type="button"
        onClick={onClearCart}
      >
        Clear Cart
      </button>
    </aside>
  )
}

export default Cart
