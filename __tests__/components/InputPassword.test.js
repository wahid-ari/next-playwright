import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import InputPassword from '@/components/InputPassword'
import { useState } from 'react'

describe('Test InputPassword Component', () => {
  it('renders a inputpassword', () => {
    render(<InputPassword data-testid="inputpassword" />)
    const inputpassword = screen.getByTestId('inputpassword')
    expect(inputpassword).toBeInTheDocument()
  })
  it('renders a inputpassword with label', () => {
    render(<InputPassword data-testid="inputpassword" label="password" />)
    const inputpassword = screen.getByTestId('inputpassword')
    expect(inputpassword).toBeInTheDocument()
  })
  it('renders a inputpassword with attribute id', () => {
    render(<InputPassword data-testid="inputpassword" id="password" />)
    const inputpassword = screen.getByTestId('inputpassword')
    expect(inputpassword).toHaveAttribute('id', 'password')
  })
  it('renders a inputpassword with attribute password', () => {
    render(<InputPassword data-testid="inputpassword" password="password" />)
    const inputpassword = screen.getByTestId('inputpassword')
    expect(inputpassword).toHaveAttribute('password', 'password')
  })
  it('renders a inputpassword with attribute type', () => {
    render(<InputPassword data-testid="inputpassword" type="password" />)
    const inputpassword = screen.getByTestId('inputpassword')
    expect(inputpassword).toHaveAttribute('type', 'password')
  })
  it('renders a inputpassword with attribute placeholder', () => {
    render(<InputPassword data-testid="inputpassword" placeholder="password" />)
    const inputpassword = screen.getByTestId('inputpassword')
    expect(inputpassword).toHaveAttribute('placeholder', 'password')
  })
  it('renders a inputpassword with attribute value', () => {
    function Wrapper() {
      const [text, setText] = useState("abc123")
      return <InputPassword data-testid="inputpassword" value={text} onChange={(e) => setText(e.target.value)} />
    }
    render(<Wrapper />)
    const inputpassword = screen.getByTestId('inputpassword')
    expect(inputpassword).toHaveAttribute('value', 'abc123')
    expect(inputpassword).toHaveDisplayValue('abc123')
    expect(inputpassword).toHaveValue('abc123')
  })
  it('renders a inputpassword with attribute required', () => {
    render(<InputPassword data-testid="inputpassword" required />)
    const inputpassword = screen.getByTestId('inputpassword')
    expect(inputpassword).toHaveAttribute('required')
    expect(inputpassword).toBeRequired()
  })
  it('renders a inputpassword and have default class', () => {
    render(<InputPassword data-testid="inputpassword" />)
    const inputpassword = screen.getByTestId('inputpassword')
    expect(inputpassword).toHaveClass('text-sm rounded-md border')
  })
  it('renders a inputpassword and have custom class', () => {
    render(<InputPassword data-testid="inputpassword" className="inputpassword-custom" />)
    const inputpassword = screen.getByTestId('inputpassword')
    expect(inputpassword).toHaveClass('inputpassword-custom')
  })
  it('renders a inputpassword and typed a password', async () => {
    function Wrapper() {
      const [inputpassword, setInputPassword] = useState("")
      return <InputPassword data-testid="inputpassword" value={inputpassword} onChange={(e) => setInputPassword(e.target.value)} />
    }
    render(<Wrapper />)
    const inputpassword = screen.getByTestId('inputpassword')
    expect(inputpassword).toBeInTheDocument()
    // click the inputpassword value, then type a "password"
    await userEvent.type(inputpassword, 'abc123')
    // the inputpasswordValue should have "password" content
    expect(inputpassword).toHaveDisplayValue('abc123')
    expect(inputpassword).toHaveValue('abc123')
  })
  it('renders a InputPassword component and click show password', async () => {
    render(<InputPassword data-testid="inputpassword" btnTestId="inputpassword-btn" />)
    const inputpassword = screen.getByTestId('inputpassword')
    const showPasswordBtn = screen.getByTestId('inputpassword-btn')
    expect(inputpassword).toBeInTheDocument()
    // click the inputpassword show password button
    await userEvent.click(showPasswordBtn)
    // the inputpassword should show the password by changing type to text
    expect(inputpassword).toHaveAttribute('type', 'text')
  })

  // INPUT DISABLED ============================================
  it('renders a InputPassword.disabled and have attribute disabled', () => {
    render(<InputPassword disabled data-testid="inputpassword-disabled" />)
    const inputpassword = screen.getByTestId('inputpassword-disabled')
    expect(inputpassword).toHaveAttribute('disabled')
  })
  it('renders a InputPassword.disabled and have cursor-not-allowed class', () => {
    render(<InputPassword disabled data-testid="inputpassword-disabled" />)
    const inputpassword = screen.getByTestId('inputpassword-disabled')
    expect(inputpassword).toHaveClass('cursor-not-allowed')
  })
  it('renders a InputPassword.disabled with attribute value', () => {
    function Wrapper() {
      const [text, setText] = useState("abc123")
      return <InputPassword disabled data-testid="inputpassword-disabled" value={text} onChange={(e) => setText(e.target.value)} />
    }
    render(<Wrapper />)
    const inputpassword = screen.getByTestId('inputpassword-disabled')
    expect(inputpassword).toHaveAttribute('value', 'abc123')
    expect(inputpassword).toHaveValue('abc123')
  })
})

