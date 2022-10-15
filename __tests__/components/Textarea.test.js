import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import Textarea from '@/components/Textarea'
import { useState } from 'react'

describe('Test Textarea Component', () => {
  it('renders a textarea', () => {
    render(<Textarea data-testid="textarea" />)
    const textarea = screen.getByTestId('textarea')
    expect(textarea).toBeInTheDocument()
  })
  it('renders a textarea with label', () => {
    render(<Textarea data-testid="textarea" label="name" />)
    const textarea = screen.getByTestId('textarea')
    expect(textarea).toBeInTheDocument()
  })
  it('renders a textarea with attribute id', () => {
    render(<Textarea data-testid="textarea" id="description" />)
    const textarea = screen.getByTestId('textarea')
    expect(textarea).toHaveAttribute('id', 'description')
  })
  it('renders a textarea with attribute name', () => {
    render(<Textarea data-testid="textarea" name="description" />)
    const textarea = screen.getByTestId('textarea')
    expect(textarea).toHaveAttribute('name', 'description')
  })
  it('renders a textarea with attribute placeholder', () => {
    render(<Textarea data-testid="textarea" placeholder="name" />)
    const textarea = screen.getByTestId('textarea')
    expect(textarea).toHaveAttribute('placeholder', 'name')
  })
  it('renders a textarea with attribute rows (height)', () => {
    render(<Textarea data-testid="textarea" height={2} />)
    const textarea = screen.getByTestId('textarea')
    expect(textarea).toHaveAttribute('rows', '2')
  })
  it('renders a textarea with attribute value', () => {
    function Wrapper() {
      const [textarea, setTextarea] = useState("Description")
      return <Textarea data-testid="textarea" value={textarea} onChange={(e) => setTextarea(e.target.value)} />
    }
    render(<Wrapper />)
    const textarea = screen.getByTestId('textarea')
    expect(textarea).toHaveDisplayValue('Description')
    expect(textarea).toHaveValue('Description')
  })
  it('renders a textarea with attribute required', () => {
    render(<Textarea data-testid="textarea" required />)
    const textarea = screen.getByTestId('textarea')
    expect(textarea).toHaveAttribute('required')
    expect(textarea).toBeRequired()
  })
  it('renders a textarea and have default class', () => {
    render(<Textarea data-testid="textarea" />)
    const textarea = screen.getByTestId('textarea')
    expect(textarea).toHaveClass('text-sm rounded-md border')
  })
  it('renders a textarea and have custom class', () => {
    render(<Textarea data-testid="textarea" className="textarea-custom" />)
    const textarea = screen.getByTestId('textarea')
    expect(textarea).toHaveClass('textarea-custom')
  })
  it('renders a textarea and typed a text', async () => {
    function Wrapper() {
      const [textarea, setTextarea] = useState()
      return <Textarea data-testid="textarea" value={textarea} onChange={(e) => setTextarea(e.target.value)} />
    }
    render(<Wrapper />)
    const textarea = screen.getByTestId('textarea')
    expect(textarea).toBeInTheDocument()
    // click the textarea value, then type a "Description"
    await userEvent.type(textarea, 'Description')
    // the textareaValue should have "Description" content
    expect(textarea).toHaveDisplayValue('Description')
    expect(textarea).toHaveValue('Description')
  })

  // TEXTAREA DISABLED ============================================
  it('renders a Textarea.disabled and have attribute disabled', () => {
    render(<Textarea.disabled data-testid="textarea-disabled" />)
    const textarea = screen.getByTestId('textarea-disabled')
    expect(textarea).toHaveAttribute('disabled')
  })
  it('renders a Textarea.disabled and have cursor-not-allowed class', () => {
    render(<Textarea.disabled data-testid="textarea-disabled" />)
    const textarea = screen.getByTestId('textarea-disabled')
    expect(textarea).toHaveClass('cursor-not-allowed')
  })
  it('renders a Textarea.disabled with attribute value', () => {
    function Wrapper() {
      const [text, setText] = useState("Description")
      return <Textarea.disabled data-testid="textarea-disabled" value={text} onChange={(e) => setText(e.target.value)} />
    }
    render(<Wrapper />)
    const textarea = screen.getByTestId('textarea-disabled')
    expect(textarea).toHaveDisplayValue('Description')
    expect(textarea).toHaveValue('Description')
  })
})

