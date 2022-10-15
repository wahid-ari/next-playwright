import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import BadgeOutline from '@/components/BadgeOutline'

describe('Test BadgeOutline Component', () => {
  it('renders a badgeoutline', () => {
    render(<BadgeOutline>BadgeOutline</BadgeOutline>)
    const badgeoutline = screen.getByText('BadgeOutline')
    expect(badgeoutline).toBeInTheDocument()
  })
  it('renders a badgeoutline pills', () => {
    render(<BadgeOutline pills>Badge Outline Pills</BadgeOutline>)
    const badgeoutline = screen.getByText('Badge Outline Pills')
    expect(badgeoutline).toBeInTheDocument()
  })
  it('renders a badgeoutline large', () => {
    render(<BadgeOutline large>Badge Outline Large</BadgeOutline>)
    const badgeoutline = screen.getByText('Badge Outline Large')
    expect(badgeoutline).toBeInTheDocument()
  })
  it('renders a badgeoutline and have default class', () => {
    render(<BadgeOutline>Badge Outline</BadgeOutline>)
    const badgeoutline = screen.getByText('Badge Outline')
    expect(badgeoutline).toHaveClass('text-blue-500 border border-blue-500')
  })
  it('renders a badgeoutline and have custom class', () => {
    render(<BadgeOutline className="badge-outline-custom">Badge Outline</BadgeOutline>)
    const badgeoutline = screen.getByText('Badge Outline')
    expect(badgeoutline).toHaveClass('text-blue-500 border border-blue-500 badge-outline-custom')
  })

  it(
    `renders a BadgeOutline.green, 
    renders BadgeOutline.green pills, 
    renders BadgeOutline.green large, 
    renders BadgeOutline.green default class,
    renders BadgeOutline.green custom class`,
    () => {
      render(
        <>
          <BadgeOutline.green>Badge Outline Green</BadgeOutline.green>
          <BadgeOutline.green pills>Badge Outline Green Pills</BadgeOutline.green>
          <BadgeOutline.green large>Badge Outline Green Large</BadgeOutline.green>
          <BadgeOutline.green className="badge-outline-custom">Badge Outline Green Custom Class</BadgeOutline.green>
        </>
      )
      const badgeoutline = screen.getByText('Badge Outline Green')
      const badgeoutlinePills = screen.getByText('Badge Outline Green Pills')
      const badgeoutlineLarge = screen.getByText('Badge Outline Green Large')
      const badgeoutlineCustomClass = screen.getByText('Badge Outline Green Custom Class')
      expect(badgeoutline).toBeInTheDocument()
      expect(badgeoutline).toHaveClass('text-green-500 border border-green-500')
      expect(badgeoutlinePills).toBeInTheDocument()
      expect(badgeoutlinePills).toHaveClass('rounded-full')
      expect(badgeoutlineLarge).toBeInTheDocument()
      expect(badgeoutlineLarge).toHaveClass('text-sm')
      expect(badgeoutlineCustomClass).toBeInTheDocument()
      expect(badgeoutlineCustomClass).toHaveClass('badge-outline-custom')
    })

  it.each(
    [['blue', 'blue'],
    ['green', 'green'],
    ['yellow', 'yellow'],
    ['red', 'red'],
    ['orange', 'orange'],
    ['purple', 'violet'],
    ['dark', 'gray']])
    ('"BadgeOutline.%s" should have "text-%s-500" class',
      (variant, className) => {
        // function Variants () {
        //   return `<BadgeOutline.${variant}>BadgeOutline ${variant}</BadgeOutline.${variant}>`
        // }
        // const Variants = `BadgeOutline.${variant}`
        // console.log(Variants)
        render(
          <>
            {/* <Variants /> */}
            {/* <Variants>BadgeOutline ${variant}</Variants> */}
            <BadgeOutline>Badge Outline blue</BadgeOutline>
            <BadgeOutline.green>Badge Outline green</BadgeOutline.green>
            <BadgeOutline.yellow>Badge Outline yellow</BadgeOutline.yellow>
            <BadgeOutline.red>Badge Outline red</BadgeOutline.red>
            <BadgeOutline.orange>Badge Outline orange</BadgeOutline.orange>
            <BadgeOutline.purple>Badge Outline purple</BadgeOutline.purple>
            <BadgeOutline.dark>Badge Outline dark</BadgeOutline.dark>
          </>
        )
        expect(screen.queryByText(`Badge Outline ${variant}`, { exact: false })).toHaveClass(
          `text-${className}-500`
        )
      }
    )
})

