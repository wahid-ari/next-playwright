import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import StatusIndicator from '@/components/StatusIndicator'

describe('Test StatusIndicator Component', () => {
  it('renders a StatusIndicator', () => {
    render(<StatusIndicator text="Status Indicator" />)
    const status = screen.getByText('Status Indicator')
    expect(status).toBeInTheDocument()
  })
  it('renders a StatusIndicator and have default class', () => {
    render(<StatusIndicator data-testid="status" text="Status Indicator" />)
    const status = screen.getByTestId('status')
    const statusText = screen.getByText('Status Indicator')
    expect(status).toHaveClass('flex items-center space-x-2')
    expect(statusText).toHaveClass('text-sm')
  })
  it('renders a StatusIndicator and have custom class', () => {
    render(<StatusIndicator data-testid="status" text="Status Indicator" className="status-custom" />)
    const status = screen.getByTestId('status')
    expect(status).toHaveClass('status-custom')
  })

  it.each(
    [['', 'normal'],
    ['success', 'success'],
    ['warning', 'warning'],
    ['danger', 'danger']])
    ('"StatusIndicator %s" should have text content "%s"',
      (variant, text) => {
        function Variants() {
          return `<StatusIndicator ${variant} text="${text}" />`
        }
        render(
          <Variants />
        )
        expect(screen.queryByText(`${text}`, { exact: false })).toBeInTheDocument()
      }
    )
})

