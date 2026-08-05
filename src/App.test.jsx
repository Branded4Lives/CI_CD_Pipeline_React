import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

test('adds a product to the cart when a user clicks Add to Cart', async () => {
  const user = userEvent.setup()
  render(<App />)

  const cart = screen.getByLabelText(/shopping cart/i)

  expect(within(cart).getByText(/your cart is empty/i)).toBeInTheDocument()
  expect(screen.getByLabelText(/cart item count/i)).toHaveTextContent('0')

  const addButtons = screen.getAllByRole('button', { name: /add to cart/i })
  await user.click(addButtons[0])

  expect(within(cart).getByText('Trail Runner Shoes')).toBeInTheDocument()
  expect(screen.getByLabelText(/cart item count/i)).toHaveTextContent('1')
  expect(within(cart).getByText('$89.00')).toBeInTheDocument()
})
