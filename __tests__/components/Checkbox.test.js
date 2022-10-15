import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import Checkbox from '@/components/Checkbox'

describe('Test Checkbox Component', () => {
  it('renders a checkbox component', () => {
    render(
      <Checkbox
        data-testid="checkbox"
        label="Red"
        name="red"
        value="red"
      />
    )
    const checkbox = screen.getByTestId('checkbox')
    expect(checkbox).toBeInTheDocument()
  })

  it('renders a checkbox and have default class', () => {
    render(
      <Checkbox
        data-testid="checkbox"
        label="Red"
        name="red"
        value="red"
      />
    )
    const checkbox = screen.getByTestId('checkbox')
    expect(checkbox).toHaveClass('h-4 w-4 cursor-pointer text-blue-500')
  })

  it('renders a checkbox with custom class', () => {
    render(
      <Checkbox
        data-testid="checkbox"
        label="Red"
        name="red"
        value="red"
        className="checkbox-custom"
      />
    )
    const checkbox = screen.getByTestId('checkbox')
    expect(checkbox).toHaveClass('checkbox-custom')
  })

  it('renders a checkbox with option red and blue', () => {
    render(
      <>
        <Checkbox data-testid="checkbox-red" label="Red" name="red" value="red" />
        <Checkbox data-testid="checkbox-blue" label="Blue" name="blue" value="blue" />
      </>
    )
    const checkboxRed = screen.getByTestId('checkbox-red')
    const checkboxBlue = screen.getByTestId('checkbox-blue')
    expect(checkboxRed).toHaveAccessibleName('Red')
    expect(checkboxBlue).toHaveAccessibleName('Blue')
  })

  it('renders a checkbox with option red and blue, then select an red option', async () => {
    render(
      <>
        <Checkbox data-testid="checkbox-red" label="Red" name="red" value="red" />
        <Checkbox data-testid="checkbox-blue" label="Blue" name="blue" value="blue" />
      </>
    )
    const checkboxRed = screen.getByTestId('checkbox-red')
    const checkboxBlue = screen.getByTestId('checkbox-blue')
    // when clicked option with value 'red', 
    // option red must be true
    await userEvent.click(checkboxRed)
    expect(checkboxRed).toBeChecked()
    expect(checkboxBlue).not.toBeChecked()
  })

  it('renders a checkbox with option red and blue, then select red and blue option', async () => {
    render(
      <>
        <Checkbox data-testid="checkbox-red" label="Red" name="red" value="red" />
        <Checkbox data-testid="checkbox-blue" label="Blue" name="blue" value="blue" />
      </>
    )
    const checkboxRed = screen.getByTestId('checkbox-red')
    const checkboxBlue = screen.getByTestId('checkbox-blue')
    // when clicked option with value 'red' and 'blue, 
    // option red and blue must be true
    await userEvent.click(checkboxRed)
    await userEvent.click(checkboxBlue)
    expect(checkboxRed).toBeChecked()
    expect(checkboxBlue).toBeChecked()
  })
})

