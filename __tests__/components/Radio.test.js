import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import Radio from '@/components/Radio'

describe('Test Radio Component', () => {
  it('renders a radio component', () => {
    render(
      <Radio
        data-testid="radio"
        label="Red"
        name="red"
        value="red"
      />
    )
    const radio = screen.getByTestId('radio')
    expect(radio).toBeInTheDocument()
  })

  it('renders a radio and have default class', () => {
    render(
      <Radio
        data-testid="radio"
        label="Red"
        name="red"
        value="red"
      />
    )
    const radio = screen.getByTestId('radio')
    expect(radio).toHaveClass('h-4 w-4 cursor-pointer text-blue-600')
  })

  it('renders a radio with custom class', () => {
    render(
      <Radio
        data-testid="radio"
        label="Red"
        name="red"
        value="red"
        className="radio-custom"
      />
    )
    const radio = screen.getByTestId('radio')
    expect(radio).toHaveClass('radio-custom')
  })

  it('renders a radio with option red and blue', () => {
    render(
      <>
        <Radio data-testid="radio-red" label="Red" name="red" value="red" />
        <Radio data-testid="radio-blue" label="Blue" name="blue" value="blue" />
      </>
    )
    const radioRed = screen.getByTestId('radio-red')
    const radioBlue = screen.getByTestId('radio-blue')
    expect(radioRed).toHaveAccessibleName('Red')
    expect(radioBlue).toHaveAccessibleName('Blue')
  })

  it('renders a radio with option red and blue, then select red option', async () => {
    render(
      <>
        <Radio data-testid="radio-red" label="Red" name="red" value="red" />
        <Radio data-testid="radio-blue" label="Blue" name="blue" value="blue" />
      </>
    )
    const radioRed = screen.getByTestId('radio-red')
    const radioBlue = screen.getByTestId('radio-blue')
    // when clicked option with value 'red', 
    // option red must be true
    await userEvent.click(radioRed)
    expect(radioRed).toBeChecked()
    expect(radioBlue).not.toBeChecked()
  })

  it('renders a radio with option red and blue, then select blue option', async () => {
    render(
      <>
        <Radio data-testid="radio-red" label="Red" name="red" value="red" />
        <Radio data-testid="radio-blue" label="Blue" name="blue" value="blue" />
      </>
    )
    const radioRed = screen.getByTestId('radio-red')
    const radioBlue = screen.getByTestId('radio-blue')
    // when clicked option with value 'blue', 
    // option blue must be true
    await userEvent.click(radioBlue)
    expect(radioRed).not.toBeChecked()
    expect(radioBlue).toBeChecked()
  })
})

