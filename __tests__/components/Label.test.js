import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Label from '@/components/Label'

describe('Test Label Component', () => {
  it('renders a label', () => {
    render(<Label>Label</Label>)
    const label = screen.getByText('Label')
    expect(label).toBeInTheDocument()
  })
  it('renders a label and have text content', () => {
    render(<Label>Label</Label>)
    const label = screen.getByText('Label')
    expect(label).toHaveTextContent('Label')
  })
  it('renders a label and have default class', () => {
    render(<Label>Label</Label>)
    const label = screen.getByText('Label')
    expect(label).toHaveClass('text-sm block')
  })
  it('renders a label and have custom class', () => {
    render(<Label className="label-custom">Label</Label>)
    const label = screen.getByText('Label')
    expect(label).toHaveClass('label-custom')
  })
  it('renders a label and have "for" attribute', () => {
    render(<Label htmlFor="label">Label</Label>)
    const label = screen.getByText('Label')
    expect(label).toHaveAttribute('for', 'label')
  })
})

