import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import LinkButton from '@/components/LinkButton'

describe('Test LinkButton Component', () => {
  it('renders a linkbutton', () => {
    render(<LinkButton href="#">Link Button</LinkButton>)
    const linkbutton = screen.getByText('Link Button')
    expect(linkbutton).toBeInTheDocument()
  })
  it('renders a LinkButton Pills and have rounded-full class', () => {
    render(<LinkButton href="#" pills>Link Button Pills</LinkButton>)
    const linkbutton = screen.getByText('Link Button Pills')
    expect(linkbutton).toBeInTheDocument()
    expect(linkbutton).toHaveClass('rounded-full')
  })
  it('renders a LinkButton and have default class', () => {
    render(<LinkButton href="#">Link Button</LinkButton>)
    const linkbutton = screen.getByText('Link Button')
    expect(linkbutton).toHaveClass('text-white font-medium bg-blue-500')
  })
  it('renders a LinkButton and have custom class', () => {
    render(<LinkButton href="#" className="linkbutton-custom">Link Button</LinkButton>)
    const linkbutton = screen.getByText('Link Button')
    expect(linkbutton).toHaveClass('text-white font-medium bg-blue-500 linkbutton-custom')
  })
  it('renders a LinkButton and have "href" attribute', () => {
    render(<LinkButton href="#">LinkButton</LinkButton>)
    const linkbutton = screen.getByText('LinkButton')
    expect(linkbutton).toHaveAttribute('href', '/#')
  })

  it(
    `renders a LinkButton.green, 
    renders LinkButton.green pills,  
    renders LinkButton.green default class,
    renders LinkButton.green custom class,
    renders LinkButton.green href`,
    () => {
      render(
        <>
          <LinkButton.green href="#">Link Button Green</LinkButton.green>
          <LinkButton.green href="#" pills>Link Button Green Pills</LinkButton.green>
          <LinkButton.green href="#" className="linkbutton-custom">Link Button Green Custom Class</LinkButton.green>
          <LinkButton.green href="#">Link Button Green Type</LinkButton.green>
        </>
      )
      const linkbutton = screen.getByText('Link Button Green')
      const linkbuttonPills = screen.getByText('Link Button Green Pills')
      const linkbuttonCustomClass = screen.getByText('Link Button Green Custom Class')
      const linkbuttonAttribute = screen.getByText('Link Button Green Type')
      expect(linkbutton).toHaveClass('bg-emerald-500')
      expect(linkbuttonPills).toHaveClass('rounded-full')
      expect(linkbuttonCustomClass).toHaveClass('linkbutton-custom')
      expect(linkbuttonAttribute).toHaveAttribute('href', '/#')
    })

  it.each(
    [['green', 'emerald'],
    ['yellow', 'amber'],
    ['orange', 'orange'],
    ['red', 'red'],
    ['purple', 'violet'],
    ['dark', 'gray']])
    ('"LinkButton.%s" should have "bg-%s-500" class and "href" attribute',
      (variant, className) => {
        render(
          <>
            <LinkButton.green href="#">LinkButton green</LinkButton.green>
            <LinkButton.yellow href="#">LinkButton yellow</LinkButton.yellow>
            <LinkButton.orange href="#">LinkButton orange</LinkButton.orange>
            <LinkButton.red href="#">LinkButton red</LinkButton.red>
            <LinkButton.purple href="#">LinkButton purple</LinkButton.purple>
            <LinkButton.dark href="#">LinkButton dark</LinkButton.dark>
          </>
        )
        expect(screen.queryByText(`LinkButton ${variant}`, { exact: false })).toHaveClass(
          `bg-${className}-500`
        )
        expect(screen.queryByText(`LinkButton ${variant}`, { exact: false })).toHaveAttribute(
          `href`
        )
      }
    )
})

