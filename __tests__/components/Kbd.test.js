import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Kbd from '@/components/Kbd'

describe('Test Kbd Component', () => {
  it('renders a kbd', () => {
    render(<Kbd>Ctrl</Kbd>)
    const kbd = screen.getByText('Ctrl')
    expect(kbd).toBeInTheDocument()
  })
  it('renders a kbd and have default class', () => {
    render(<Kbd>Shift</Kbd>)
    const kbd = screen.getByText('Shift')
    expect(kbd).toHaveClass('text-xs font-semibold shadow-md')
  })
  it('renders a kbd and have custom class', () => {
    render(<Kbd className="kbd-custom">Alt</Kbd>)
    const kbd = screen.getByText('Alt')
    expect(kbd).toHaveClass('kbd-custom')
  })
})

