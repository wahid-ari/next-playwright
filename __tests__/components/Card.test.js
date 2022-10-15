import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Card from '@/components/Card'

describe('Test Card Component', () => {
  it('renders a card', () => {
    render(<Card data-testid="card">Lorem Ipsum</Card>)
    const card = screen.getByTestId('card')
    expect(card).toBeInTheDocument()
  })
  it('renders a card and have text content', () => {
    render(<Card data-testid="card">Lorem Ipsum</Card>)
    const card = screen.getByTestId('card')
    expect(card).toHaveTextContent('Lorem Ipsum')
  })
  it('renders a card and have default class', () => {
    render(<Card data-testid="card">Lorem Ipsum</Card>)
    const card = screen.getByTestId('card')
    expect(card).toHaveClass('rounded-lg border')
  })
  it('renders a card and have custom class', () => {
    render(<Card data-testid="card" className="card-custom">Lorem Ipsum</Card>)
    const card = screen.getByTestId('card')
    expect(card).toHaveClass('rounded-lg border card-custom')
  })
})

