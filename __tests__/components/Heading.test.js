import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Heading from '@/components/Heading'

describe('Test Heading Component', () => {
  it('renders a heading', () => {
    render(<Heading>Heading</Heading>)
    const heading = screen.getByText('Heading')
    expect(heading).toBeInTheDocument()
  })
  it('renders a heading with default class', () => {
    render(<Heading>Heading</Heading>)
    const heading = screen.getByText('Heading')
    expect(heading).toHaveClass('text-4xl font-semibold')
  })
  it('renders a heading with custom class', () => {
    render(<Heading className="heading-custom">Heading</Heading>)
    const heading = screen.getByText('Heading')
    expect(heading).toHaveClass('text-4xl font-semibold heading-custom')
  })

  it(
    `renders a Heading.h2, 
    renders Heading.h2 with default class,
    renders Heading.h2 with custom class`,
    () => {
      render(
        <>
          <Heading.h2>Heading h2</Heading.h2>
          <Heading.h2 className="heading-custom">Heading h2 Custom Class</Heading.h2>
        </>
      )
      const heading = screen.getByText('Heading h2')
      const headingCustomClass = screen.getByText('Heading h2 Custom Class')
      expect(heading).toBeInTheDocument()
      expect(heading).toHaveClass('text-3xl font-semibold')
      expect(headingCustomClass).toBeInTheDocument()
      expect(headingCustomClass).toHaveClass('heading-custom')
    })

  it.each(
    [['h2', '3xl'],
    ['h3', '2xl'],
    ['h4', 'xl'],
    ['h5', 'lg'],
    ['h6', 'base']])
    ('"Heading.%s" should have "text-%s" class',
      (variant, className) => {
        render(
          <>
            <Heading.h2>Heading h2</Heading.h2>
            <Heading.h3>Heading h3</Heading.h3>
            <Heading.h4>Heading h4</Heading.h4>
            <Heading.h5>Heading h5</Heading.h5>
            <Heading.h6>Heading h6</Heading.h6>
          </>
        )
        expect(screen.queryByText(`Heading ${variant}`, { exact: false })).toHaveClass(
          `text-${className}`
        )
      }
    )
})

