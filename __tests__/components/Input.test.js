import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import Input from '@/components/Input'
import { useState } from 'react'

describe('Test Input Component', () => {
  it('renders a input', () => {
    render(<Input data-testid="input" />)
    const input = screen.getByTestId('input')
    expect(input).toBeInTheDocument()
  })
  it('renders a input with label', () => {
    render(<Input data-testid="input" label="name" />)
    const input = screen.getByTestId('input')
    expect(input).toBeInTheDocument()
  })
  it('renders a input with attribute id', () => {
    render(<Input data-testid="input" id="name" />)
    const input = screen.getByTestId('input')
    expect(input).toHaveAttribute('id', 'name')
  })
  it('renders a input with attribute name', () => {
    render(<Input data-testid="input" name="name" />)
    const input = screen.getByTestId('input')
    expect(input).toHaveAttribute('name', 'name')
  })
  it('renders a input with attribute type', () => {
    render(<Input data-testid="input" type="text" />)
    const input = screen.getByTestId('input')
    expect(input).toHaveAttribute('type', 'text')
  })
  it('renders a input with attribute placeholder', () => {
    render(<Input data-testid="input" placeholder="name" />)
    const input = screen.getByTestId('input')
    expect(input).toHaveAttribute('placeholder', 'name')
  })
  it('renders a input with attribute value', () => {
    function Wrapper() {
      const [text, setText] = useState("name")
      return <Input data-testid="input" value={text} onChange={(e) => setText(e.target.value)} />
    }
    render(<Wrapper />)
    const input = screen.getByTestId('input')
    expect(input).toHaveAttribute('value', 'name')
    expect(input).toHaveDisplayValue('name')
    expect(input).toHaveValue('name')
  })
  it('renders a input with attribute required', () => {
    render(<Input data-testid="input" required />)
    const input = screen.getByTestId('input')
    expect(input).toHaveAttribute('required')
    expect(input).toBeRequired()
  })
  it('renders a input and have default class', () => {
    render(<Input data-testid="input" />)
    const input = screen.getByTestId('input')
    expect(input).toHaveClass('text-sm rounded-md border')
  })
  it('renders a input and have custom class', () => {
    render(<Input data-testid="input" className="input-custom" />)
    const input = screen.getByTestId('input')
    expect(input).toHaveClass('input-custom')
  })
  it('renders a input and typed a text', async () => {
    function Wrapper() {
      const [input, setInput] = useState("")
      return <Input data-testid="input" value={input} onChange={(e) => setInput(e.target.value)} />
    }
    render(<Wrapper />)
    const input = screen.getByTestId('input')
    expect(input).toBeInTheDocument()
    // click the input value, then type a "name"
    await userEvent.type(input, 'name')
    // the inputValue should have "name" content
    expect(input).toHaveDisplayValue('name')
    expect(input).toHaveValue('name')
  })

  // INPUT DISABLED ============================================
  it('renders a Input.disabled and have attribute disabled', () => {
    render(<Input.disabled data-testid="input-disabled" />)
    const input = screen.getByTestId('input-disabled')
    expect(input).toHaveAttribute('disabled')
  })
  it('renders a Input.disabled and have cursor-not-allowed class', () => {
    render(<Input.disabled data-testid="input-disabled" />)
    const input = screen.getByTestId('input-disabled')
    expect(input).toHaveClass('cursor-not-allowed')
  })
  it('renders a Input.disabled with attribute value', () => {
    function Wrapper() {
      const [text, setText] = useState("name")
      return <Input.disabled data-testid="input-disabled" value={text} onChange={(e) => setText(e.target.value)} />
    }
    render(<Wrapper />)
    const input = screen.getByTestId('input-disabled')
    expect(input).toHaveAttribute('value', 'name')
    expect(input).toHaveValue('name')
  })
})

