import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Section from '@/components/Section'

describe('Test Section Component', () => {
  it('renders a section', () => {
    render(<Section data-testid="section" id="section" name="Section">Lorem Ipsum</Section>)
    const section = screen.getByTestId('section')
    expect(section).toBeInTheDocument()
  })
  it('renders a section and have text content', () => {
    render(<Section data-testid="section" id="section" name="Section">Lorem Ipsum</Section>)
    const section = screen.getByTestId('section')
    expect(section).toHaveTextContent('Section')
    expect(section).toHaveTextContent('Lorem Ipsum')
  })
  it('renders a section and have default class', () => {
    render(<Section data-testid="section" id="section" name="Section">Lorem Ipsum</Section>)
    const section = screen.getByTestId('section')
    expect(section).toHaveClass('my-2')
  })
  it('renders a section and have custom class', () => {
    render(<Section data-testid="section" id="section" name="Section" className="section-custom">Lorem Ipsum</Section>)
    const section = screen.getByTestId('section')
    expect(section).toHaveClass('section-custom')
  })
  it('renders a section and have attribute id', () => {
    render(<Section data-testid="section" id="section" name="Section" className="section-custom">Lorem Ipsum</Section>)
    const section = screen.getByTestId('section')
    expect(section).toHaveAttribute('id')
  })
})

