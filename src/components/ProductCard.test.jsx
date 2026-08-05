import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ProductCard from './ProductCard'

const product = {
  id: 1,
  name: 'Trail Runner Shoes',
  category: 'Footwear',
  price: 89,
  image: '/trail-shoes.svg',
  description: 'Lightweight shoes for daily miles.',
}

test('renders product details', () => {
  render(<ProductCard product={product} onAddToCart={jest.fn()} />)

  expect(screen.getByRole('heading', { name: /trail runner shoes/i })).toBeInTheDocument()
  expect(screen.getByText('Footwear')).toBeInTheDocument()
  expect(screen.getByText('$89.00')).toBeInTheDocument()
  expect(screen.getByAltText('Trail Runner Shoes')).toBeInTheDocument()
})

test('calls onAddToCart when add button is clicked', async () => {
  const user = userEvent.setup()
  const handleAddToCart = jest.fn()

  render(<ProductCard product={product} onAddToCart={handleAddToCart} />)

  await user.click(screen.getByRole('button', { name: /add to cart/i }))

  expect(handleAddToCart).toHaveBeenCalledWith(product)
})
