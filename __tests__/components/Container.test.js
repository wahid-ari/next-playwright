import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Container from '@/components/Container'

describe('Test Container Component', () => {
  it('renders a container', () => {
    render(<Container data-testid="container">Lorem Ipsum</Container>)
    const container = screen.getByTestId('container')
    expect(container).toBeInTheDocument()
  })
  it('renders a container and have text content', () => {
    render(<Container data-testid="container">Lorem Ipsum</Container>)
    const container = screen.getByTestId('container')
    expect(container).toHaveTextContent('Lorem Ipsum')
  })
  it('renders a container and have default class', () => {
    render(<Container data-testid="container">Lorem Ipsum</Container>)
    const container = screen.getByTestId('container')
    expect(container).toHaveClass('rounded-md border')
  })
  it('renders a container and have custom class', () => {
    render(<Container data-testid="container" className="container-custom">Lorem Ipsum</Container>)
    const container = screen.getByTestId('container')
    expect(container).toHaveClass('rounded-md border container-custom')
  })

  it.each(
    [['small', 'p-2'],
    ['medium', 'p-4'],
    ['large', 'p-6']])
    ('"Container %s" should have "%s" class',
      (variant, className) => {
        render(
          <>
            <Container small>Container small</Container>
            <Container medium>Container medium</Container>
            <Container large>Container large</Container>
          </>
        )
        expect(screen.queryByText(`Container ${variant}`, { exact: false })).toHaveClass(
          className
        )
      }
    )
})

