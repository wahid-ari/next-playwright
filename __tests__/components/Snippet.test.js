import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Snippet from '@/components/Snippet'

describe('Test Snippet Component', () => {
  it('renders a snippet', () => {
    render(<Snippet data-testid="snippet" text="yarn add @heroicons/react" />)
    const snippet = screen.getByTestId('snippet')
    expect(snippet).toBeInTheDocument()
  })
  it('renders a snippet and have text content', () => {
    render(<Snippet data-testid="snippet" text="yarn add @heroicons/react" />)
    const snippet = screen.getByTestId('snippet')
    const snippetText = screen.getByText('yarn add @heroicons/react')
    expect(snippet).toBeInTheDocument()
    expect(snippet).toContainElement(snippetText)
    expect(snippetText).toHaveTextContent('yarn add @heroicons/react')
  })
  it('renders a snippet and have default class', () => {
    render(<Snippet data-testid="snippet" />)
    const snippet = screen.getByTestId('snippet')
    expect(snippet).toHaveClass('rounded-md border')
  })
  it('renders a snippet and have custom class', () => {
    render(<Snippet data-testid="snippet" className="snippet-custom" />)
    const snippet = screen.getByTestId('snippet')
    expect(snippet).toHaveClass('rounded-md border snippet-custom')
  })
})

