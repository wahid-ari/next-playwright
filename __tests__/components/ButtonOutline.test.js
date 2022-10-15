import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import ButtonOutline from '@/components/ButtonOutline'

describe('Test ButtonOutline Component', () => {
  it('renders a buttonoutline', () => {
    render(<ButtonOutline>ButtonOutline</ButtonOutline>)
    const buttonoutline = screen.getByText('ButtonOutline')
    expect(buttonoutline).toBeInTheDocument()
  })
  it('renders a buttonoutline pills and have rounded-full class', () => {
    render(<ButtonOutline pills>ButtonOutline Pills</ButtonOutline>)
    const buttonoutline = screen.getByText('ButtonOutline Pills')
    expect(buttonoutline).toBeInTheDocument()
    expect(buttonoutline).toHaveClass('rounded-full')
  })
  it('renders a buttonoutline and have default class', () => {
    render(<ButtonOutline>ButtonOutline</ButtonOutline>)
    const buttonoutline = screen.getByText('ButtonOutline')
    expect(buttonoutline).toHaveClass('text-blue-500 font-medium border border-blue-500')
  })
  it('renders a buttonoutline and have custom class', () => {
    render(<ButtonOutline className="button-outline-custom">ButtonOutline</ButtonOutline>)
    const buttonoutline = screen.getByText('ButtonOutline')
    expect(buttonoutline).toHaveClass('text-blue-500 font-medium border border-blue-500 button-outline-custom')
  })
  it('renders a buttonoutline and have attribute', () => {
    render(<ButtonOutline type="submit">ButtonOutline</ButtonOutline>)
    const buttonoutline = screen.getByText('ButtonOutline')
    expect(buttonoutline).toHaveAttribute('type', 'submit')
  })
  it('renders a buttonoutline and disabled', () => {
    render(<ButtonOutline disabled>ButtonOutline</ButtonOutline>)
    const buttonoutline = screen.getByText('ButtonOutline')
    expect(buttonoutline).toHaveAttribute('disabled')
    expect(buttonoutline).toHaveClass('cursor-not-allowed')
  })

  it(
    `renders a ButtonOutline.green, 
    renders ButtonOutline.green pills,  
    renders ButtonOutline.green default class,
    renders ButtonOutline.green custom class,
    renders ButtonOutline.green type submit,
    renders ButtonOutline.green disabled`,
    () => {
      render(
        <>
          <ButtonOutline.green>ButtonOutline Green</ButtonOutline.green>
          <ButtonOutline.green pills>ButtonOutline Green Pills</ButtonOutline.green>
          <ButtonOutline.green className="button-outline-custom">ButtonOutline Green Custom Class</ButtonOutline.green>
          <ButtonOutline.green type="submit">ButtonOutline Green Type</ButtonOutline.green>
          <ButtonOutline.green disabled>ButtonOutline Green Disabled</ButtonOutline.green>
        </>
      )
      const buttonoutline = screen.getByText('ButtonOutline Green')
      const buttonoutlinePills = screen.getByText('ButtonOutline Green Pills')
      const buttonoutlineCustomClass = screen.getByText('ButtonOutline Green Custom Class')
      const buttonoutlineType = screen.getByText('ButtonOutline Green Type')
      const buttonoutlineDisabled = screen.getByText('ButtonOutline Green Disabled')
      expect(buttonoutline).toHaveClass('text-emerald-500')
      expect(buttonoutlinePills).toHaveClass('rounded-full')
      expect(buttonoutlineCustomClass).toHaveClass('button-outline-custom')
      expect(buttonoutlineType).toHaveAttribute('type', 'submit')
      expect(buttonoutlineDisabled).toHaveAttribute('disabled')
    })

  it.each(
    [['green', 'emerald'],
    ['yellow', 'amber'],
    ['orange', 'orange'],
    ['red', 'red'],
    ['purple', 'violet'],
    ['dark', 'gray']])
    ('"ButtonOutline.%s" should have "text-%s-500" class',
      (variant, className) => {
        render(
          <>
            <ButtonOutline.green>ButtonOutline green</ButtonOutline.green>
            <ButtonOutline.yellow>ButtonOutline yellow</ButtonOutline.yellow>
            <ButtonOutline.orange>ButtonOutline orange</ButtonOutline.orange>
            <ButtonOutline.red>ButtonOutline red</ButtonOutline.red>
            <ButtonOutline.purple>ButtonOutline purple</ButtonOutline.purple>
            <ButtonOutline.dark>ButtonOutline dark</ButtonOutline.dark>
          </>
        )
        expect(screen.queryByText(`ButtonOutline ${variant}`, { exact: false })).toHaveClass(
          `text-${className}-500`
        )
      }
    )
})

