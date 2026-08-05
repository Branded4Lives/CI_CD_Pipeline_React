import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Cart from './Cart'

test('renders empty cart state', () => {
  render(<Cart cartItems={[]} onClearCart={jest.fn()} />)

  expect(screen.getByText(/your cart is empty/i)).toBeInTheDocument()
  expect(screen.getByLabelText(/cart item count/i)).toHaveTextContent('0')
  expect(screen.getByRole('button', { name: /clear cart/i })).toBeDisabled()
})

test('renders cart totals and clears cart on button click', async () => {
  const user = userEvent.setup()
  const handleClearCart = jest.fn()
  const cartItems = [
    {
      id: 1,
      name: 'Trail Runner Shoes',
      price: 89,
      quantity: 2,
    },
  ]

  render(<Cart cartItems={cartItems} onClearCart={handleClearCart} />)

  expect(screen.getByText('Trail Runner Shoes')).toBeInTheDocument()
  expect(screen.getByLabelText(/cart item count/i)).toHaveTextContent('2')
  expect(screen.getByText('$178.00')).toBeInTheDocument()

  await user.click(screen.getByRole('button', { name: /clear cart/i }))

  expect(handleClearCart).toHaveBeenCalledTimes(1)
})
