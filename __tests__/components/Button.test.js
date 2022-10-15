import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Button from '@/components/Button'

describe('Test Button Component', () => {
  it('renders a button', () => {
    render(<Button>Button</Button>)
    const button = screen.getByText('Button')
    expect(button).toBeInTheDocument()
  })
  it('renders a button pills and have rounded-full class', () => {
    render(<Button pills>Button Pills</Button>)
    const button = screen.getByText('Button Pills')
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass('rounded-full')
  })
  it('renders a button and have default class', () => {
    render(<Button>Button</Button>)
    const button = screen.getByText('Button')
    expect(button).toHaveClass('text-white font-medium bg-blue-500')
  })
  it('renders a button and have custom class', () => {
    render(<Button className="button-custom">Button</Button>)
    const button = screen.getByText('Button')
    expect(button).toHaveClass('text-white font-medium bg-blue-500 button-custom')
  })
  it('renders a button and have attribute', () => {
    render(<Button type="submit">Button</Button>)
    const button = screen.getByText('Button')
    expect(button).toHaveAttribute('type', 'submit')
  })
  it('renders a button and disabled', () => {
    render(<Button disabled>Button</Button>)
    const button = screen.getByText('Button')
    expect(button).toHaveAttribute('disabled')
    expect(button).toHaveClass('cursor-not-allowed')
  })

  it(
    `renders a Button.green, 
    renders Button.green pills,  
    renders Button.green default class,
    renders Button.green custom class,
    renders Button.green type submit,
    renders Button.green disabled`,
    () => {
      render(
        <>
          <Button.green>Button Green</Button.green>
          <Button.green pills>Button Green Pills</Button.green>
          <Button.green className="button-custom">Button Green Custom Class</Button.green>
          <Button.green type="submit">Button Green Type</Button.green>
          <Button.green disabled>Button Green Disabled</Button.green>
        </>
      )
      const button = screen.getByText('Button Green')
      const buttonPills = screen.getByText('Button Green Pills')
      const buttonCustomClass = screen.getByText('Button Green Custom Class')
      const buttonType = screen.getByText('Button Green Type')
      const buttonDisabled = screen.getByText('Button Green Disabled')
      expect(button).toHaveClass('bg-emerald-500')
      expect(buttonPills).toHaveClass('rounded-full')
      expect(buttonCustomClass).toHaveClass('button-custom')
      expect(buttonType).toHaveAttribute('type', 'submit')
      expect(buttonDisabled).toHaveAttribute('disabled')
    })

  it.each(
    [['green', 'emerald'],
    ['yellow', 'amber'],
    ['orange', 'orange'],
    ['red', 'red'],
    ['purple', 'violet'],
    ['dark', 'gray']])
    ('"button.%s" should have "bg-%s-500" class',
      (variant, className) => {
        render(
          <>
            <Button.green>Button green</Button.green>
            <Button.yellow>Button yellow</Button.yellow>
            <Button.orange>Button orange</Button.orange>
            <Button.red>Button red</Button.red>
            <Button.purple>Button purple</Button.purple>
            <Button.dark>Button dark</Button.dark>
          </>
        )
        expect(screen.queryByText(`Button ${variant}`, { exact: false })).toHaveClass(
          `bg-${className}-500`
        )
      }
    )
})

