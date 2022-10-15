import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Badge from '@/components/Badge'

describe('Test Badge Component', () => {
  it('renders a badge', () => {
    render(<Badge>Badge</Badge>)
    const badge = screen.getByText('Badge')
    expect(badge).toBeInTheDocument()
  })
  it('renders a badge pills', () => {
    render(<Badge pills>Badge Pills</Badge>)
    const badge = screen.getByText('Badge Pills')
    expect(badge).toBeInTheDocument()
  })
  it('renders a badge large', () => {
    render(<Badge large>Badge Large</Badge>)
    const badge = screen.getByText('Badge Large')
    expect(badge).toBeInTheDocument()
  })
  it('renders a badge and have default class', () => {
    render(<Badge>Badge</Badge>)
    const badge = screen.getByText('Badge')
    expect(badge).toHaveClass('text-blue-600 bg-blue-100')
  })
  it('renders a badge and have custom class', () => {
    render(<Badge className="badge-custom">Badge</Badge>)
    const badge = screen.getByText('Badge')
    expect(badge).toHaveClass('text-blue-600 bg-blue-100 badge-custom')
  })

  it(
    `renders a Badge.green, 
    renders Badge.green pills, 
    renders Badge.green large, 
    renders Badge.green default class,
    renders Badge.green custom class`,
    () => {
      render(
        <>
          <Badge.green>Badge Green</Badge.green>
          <Badge.green pills>Badge Green Pills</Badge.green>
          <Badge.green large>Badge Green Large</Badge.green>
          <Badge.green className="badge-custom">Badge Green Custom Class</Badge.green>
        </>
      )
      const badge = screen.getByText('Badge Green')
      const badgePills = screen.getByText('Badge Green Pills')
      const badgeLarge = screen.getByText('Badge Green Large')
      const badgeCustomClass = screen.getByText('Badge Green Custom Class')
      expect(badge).toBeInTheDocument()
      expect(badge).toHaveClass('text-green-600 bg-green-100')
      expect(badgePills).toBeInTheDocument()
      expect(badgePills).toHaveClass('rounded-full')
      expect(badgeLarge).toBeInTheDocument()
      expect(badgeLarge).toHaveClass('text-sm')
      expect(badgeCustomClass).toBeInTheDocument()
      expect(badgeCustomClass).toHaveClass('badge-custom')
    })

  it.each(
    [['blue', 'blue'],
    ['green', 'green'],
    ['yellow', 'yellow'],
    ['red', 'red'],
    ['orange', 'orange'],
    ['purple', 'violet'],
    ['dark', 'gray']])
    ('"Badge.%s" should have "text-%s-600" class',
      (variant, className) => {
        // function Variants () {
        //   return `<Badge.${variant}>Badge ${variant}</Badge.${variant}>`
        // }
        // const Variants = `Badge.${variant}`
        // console.log(Variants)
        render(
          <>
            {/* <Variants /> */}
            {/* <Variants>Badge ${variant}</Variants> */}
            <Badge>Badge blue</Badge>
            <Badge.green>Badge green</Badge.green>
            <Badge.yellow>Badge yellow</Badge.yellow>
            <Badge.red>Badge red</Badge.red>
            <Badge.orange>Badge orange</Badge.orange>
            <Badge.purple>Badge purple</Badge.purple>
            <Badge.dark>Badge dark</Badge.dark>
          </>
        )
        expect(screen.queryByText(`Badge ${variant}`, { exact: false })).toHaveClass(
          `text-${className}-600`
        )
      }
    )
})

