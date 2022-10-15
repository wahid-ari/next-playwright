import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Progress from '@/components/Progress'

describe('Test Progress Component', () => {
  it('renders a progress', () => {
    render(<Progress data-testid="progress" percent={50}/>)
    const progress = screen.getByTestId('progress')
    expect(progress).toBeInTheDocument()
  })
  it('renders a progress and have custom class', () => {
    render(<Progress data-testid="progress" percent={50} height="h-3"/>)
    const progress = screen.getByTestId('progress')
    expect(progress).toBeInTheDocument()
    expect(progress).toHaveClass('h-3')
  })
  it('renders a progress percentage and show percentage', () => {
    render(<Progress.percentage data-testid="progress" percent={50}/>)
    const progress = screen.getByTestId('progress')
    expect(progress).toBeInTheDocument()
    expect(progress).toHaveTextContent('50')
  })
  it('renders a progress percentage and have custom class', () => {
    render(<Progress.percentage data-testid="progress" percent={50} className="mb-2" />)
    const progress = screen.getByTestId('progress')
    expect(progress).toBeInTheDocument()
    expect(progress).toHaveClass('mb-2')
  })
})

