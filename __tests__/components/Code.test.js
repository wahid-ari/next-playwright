import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Code from '@/components/Code'

describe('Test Code Component', () => {
  it('renders a code', () => {
    render(
      <Code
        data-testid="code-wrapper-html"
        testId="code-html"
        lang='html'
        code={`<button> Button </button>`}
      />
    )
    const codeWrapper = screen.getByTestId('code-wrapper-html')
    const code = screen.getByTestId('code-html')
    expect(codeWrapper).toBeInTheDocument()
    expect(code).toBeInTheDocument()
  })
  it('renders a code and have default class', () => {
    render(
      <Code
        data-testid="code-wrapper-html"
        testId="code-html"
        lang='html'
        code={`<button> Button </button>`}
      />
    )
    const codeWrapper = screen.getByTestId('code-wrapper-html')
    const code = screen.getByTestId('code-html')
    expect(codeWrapper).toHaveClass('Code text-sm rounded-md border')
    expect(code).toHaveClass('language-html')
  })
  it('renders a code and have custom class', () => {
    render(
      <Code
        data-testid="code-wrapper-html"
        testId="code-html"
        className="code-custom"
        lang='html'
        code={`<button> Button </button>`}
      />
    )
    const codeWrapper = screen.getByTestId('code-wrapper-html')
    expect(codeWrapper).toHaveClass('code-custom')
  })
  it('renders a code wrapper and have code as children', () => {
    render(
      <Code
        data-testid="code-wrapper-html"
        testId="code-html"
        lang='html'
        code={`<button> Button </button>`}
      />
    )
    const codeWrapper = screen.getByTestId('code-wrapper-html')
    const code = screen.getByTestId('code-html')
    expect(codeWrapper).toContainElement(code)
  })
  it('renders a code wrapper and code have default class', () => {
    render(
      <Code
        testId="code-html"
        lang='html'
        code={`<button> Button </button>`}
      />
    )
    const code = screen.getByTestId('code-html')
    expect(code).toHaveClass('language-html')
  })
})