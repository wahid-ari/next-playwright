import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import LinkButtonOutline from '@/components/LinkButtonOutline'

describe('Test LinkButtonOutline Component', () => {
  it('renders a linkbuttonoutline', () => {
    render(<LinkButtonOutline href="#">Link Button Outline</LinkButtonOutline>)
    const linkbuttonoutline = screen.getByText('Link Button Outline')
    expect(linkbuttonoutline).toBeInTheDocument()
  })
  it('renders a LinkButtonOutline Pills and have rounded-full class', () => {
    render(<LinkButtonOutline href="#" pills>Link Button Outline Pills</LinkButtonOutline>)
    const linkbuttonoutline = screen.getByText('Link Button Outline Pills')
    expect(linkbuttonoutline).toBeInTheDocument()
    expect(linkbuttonoutline).toHaveClass('rounded-full')
  })
  it('renders a LinkButtonOutline and have default class', () => {
    render(<LinkButtonOutline href="#">Link Button Outline</LinkButtonOutline>)
    const linkbuttonoutline = screen.getByText('Link Button Outline')
    expect(linkbuttonoutline).toHaveClass('text-blue-500 border border-blue-500')
  })
  it('renders a LinkButtonOutline and have custom class', () => {
    render(<LinkButtonOutline href="#" className="linkbuttonoutline-custom">Link Button Outline</LinkButtonOutline>)
    const linkbuttonoutline = screen.getByText('Link Button Outline')
    expect(linkbuttonoutline).toHaveClass('text-blue-500 border border-blue-500 linkbuttonoutline-custom')
  })
  it('renders a LinkButtonOutline and have "href" attribute', () => {
    render(<LinkButtonOutline href="#">LinkButtonOutline</LinkButtonOutline>)
    const linkbuttonoutline = screen.getByText('LinkButtonOutline')
    expect(linkbuttonoutline).toHaveAttribute('href', '/#')
  })

  it(
    `renders a LinkButtonOutline.green, 
    renders LinkButtonOutline.green pills,  
    renders LinkButtonOutline.green default class,
    renders LinkButtonOutline.green custom class,
    renders LinkButtonOutline.green href`,
    () => {
      render(
        <>
          <LinkButtonOutline.green href="#">Link Button Outline Green</LinkButtonOutline.green>
          <LinkButtonOutline.green href="#" pills>Link Button Outline Green Pills</LinkButtonOutline.green>
          <LinkButtonOutline.green href="#" className="linkbuttonoutline-custom">Link Button Outline Green Custom Class</LinkButtonOutline.green>
          <LinkButtonOutline.green href="#">Link Button Outline Green Type</LinkButtonOutline.green>
        </>
      )
      const linkbuttonoutline = screen.getByText('Link Button Outline Green')
      const linkbuttonoutlinePills = screen.getByText('Link Button Outline Green Pills')
      const linkbuttonoutlineCustomClass = screen.getByText('Link Button Outline Green Custom Class')
      const linkbuttonoutlineAttribute = screen.getByText('Link Button Outline Green Type')
      expect(linkbuttonoutline).toHaveClass('text-emerald-500')
      expect(linkbuttonoutlinePills).toHaveClass('rounded-full')
      expect(linkbuttonoutlineCustomClass).toHaveClass('linkbuttonoutline-custom')
      expect(linkbuttonoutlineAttribute).toHaveAttribute('href', '/#')
    })

  it.each(
    [['green', 'emerald'],
    ['yellow', 'amber'],
    ['orange', 'orange'],
    ['red', 'red'],
    ['purple', 'violet'],
    ['dark', 'gray']])
    ('"LinkButtonOutline.%s" should have "text-%s-500" class and "href" attribute',
      (variant, className) => {
        render(
          <>
            <LinkButtonOutline.green href="#">LinkButtonOutline green</LinkButtonOutline.green>
            <LinkButtonOutline.yellow href="#">LinkButtonOutline yellow</LinkButtonOutline.yellow>
            <LinkButtonOutline.orange href="#">LinkButtonOutline orange</LinkButtonOutline.orange>
            <LinkButtonOutline.red href="#">LinkButtonOutline red</LinkButtonOutline.red>
            <LinkButtonOutline.purple href="#">LinkButtonOutline purple</LinkButtonOutline.purple>
            <LinkButtonOutline.dark href="#">LinkButtonOutline dark</LinkButtonOutline.dark>
          </>
        )
        expect(screen.queryByText(`LinkButtonOutline ${variant}`, { exact: false })).toHaveClass(
          `text-${className}-500`
        )
        expect(screen.queryByText(`LinkButtonOutline ${variant}`, { exact: false })).toHaveAttribute(
          `href`
        )
      }
    )
})

