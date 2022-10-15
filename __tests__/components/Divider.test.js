import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Divider from '@/components/Divider'

describe('Test Divider Component', () => {
  it('renders a divider', () => {
    render(<Divider data-testid="divider"/>)
    const divider = screen.getByTestId('divider')
    expect(divider).toBeInTheDocument()
  })
  it('renders a divider and have text center', () => {
    render(<Divider data-testid="divider" text="Center" center />)
    const divider = screen.getByTestId('divider')
    expect(divider).toHaveTextContent('Center')
  })
  it('renders a divider and have text left', () => {
    render(<Divider data-testid="divider" text="Left" left />)
    const divider = screen.getByTestId('divider')
    expect(divider).toHaveTextContent('Left')
  })
  it('renders a divider and have text right', () => {
    render(<Divider data-testid="divider" text="Right" right />)
    const divider = screen.getByTestId('divider')
    expect(divider).toHaveTextContent('Right')
  })
})

