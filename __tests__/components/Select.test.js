import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import Select from '@/components/Select'

describe('Test Select Component', () => {
  it('renders a select component', () => {
    render(
      <Select name="select" data-testid="select-component">
        <Select.option value="red">Red</Select.option>
        <Select.option value="blue">Blue</Select.option>
      </Select>
    )
    const select = screen.getByTestId('select-component')
    expect(select).toBeInTheDocument()
  })
  
  it('renders a select and have default class', () => {
    render(
      <Select name="select" data-testid="select-component">
        <Select.option value="red">Red</Select.option>
        <Select.option value="blue">Blue</Select.option>
      </Select>
    )
    const select = screen.getByTestId('select-component')
    expect(select).toHaveClass('cursor-pointer text-sm rounded-md')
  })

  it('renders a select with custom class', () => {
    render(
      <Select name="select" className="mt-4 select-custom" data-testid="select-component">
        <Select.option value="red">Red</Select.option>
        <Select.option value="blue">Blue</Select.option>
      </Select>
    )
    const select = screen.getByTestId('select-component')
    expect(select).toHaveClass('mt-4 select-custom')
  })

  it('renders a select with option red and blue', () => {
    render(
      <Select name="select" data-testid="select-component">
        <Select.option value="red">Red</Select.option>
        <Select.option value="blue">Blue</Select.option>
      </Select>
    )
    const select = screen.getByTestId('select-component')
    expect(select).toHaveTextContent('Red')
    expect(select).toHaveTextContent('Blue')
  })

  it('renders a select and display the correct number of options', () => {
    render(
      <Select>
        <Select.option data-testid="option-red" value="red">Red</Select.option>
        <Select.option data-testid="option-blue" value="blue">Blue</Select.option>
      </Select>
    )
    expect(screen.getAllByRole('option').length).toBe(2)
  })

  it('renders a select with option red and blue, then select an red option', async () => {
    render(
      <Select data-testid="select-component">
        <Select.option data-testid="option-red" value="red">Red</Select.option>
        <Select.option data-testid="option-blue" value="blue">Blue</Select.option>
      </Select>
    )
    const select = screen.getByTestId('select-component')
    const red = screen.getByTestId('option-red')
    const blue = screen.getByTestId('option-blue')
    // when clicked option with value 'red', 
    // option red must be true and blue must be false
    await userEvent.selectOptions(select, red)
    expect(red.selected).toBe(true);
    expect(blue.selected).toBe(false);
  })

  it('renders a select with option red and blue, then select an blue option', async () => {
    render(
      <Select data-testid="select-component">
        <Select.option data-testid="option-red" value="red">Red</Select.option>
        <Select.option data-testid="option-blue" value="blue">Blue</Select.option>
      </Select>
    )
    const select = screen.getByTestId('select-component')
    const red = screen.getByTestId('option-red')
    const blue = screen.getByTestId('option-blue')
    // when clicked option with value 'blue', 
    // option blue must be true and red must be false
    await userEvent.selectOptions(select, blue)
    expect(blue.selected).toBe(true);
    expect(red.selected).toBe(false);
  })
})

