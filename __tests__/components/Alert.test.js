import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Alert from '@/components/Alert'

const variants = ['blue', 'green', 'yellow', 'red', 'orange', 'violet', 'gray']

describe('Test Alert Component', () => {
  it('renders a alert', () => {
    render(<Alert>Alert</Alert>)
    const alert = screen.getByText('Alert')
    expect(alert).toBeInTheDocument()
  })
  it('renders a alert pills', () => {
    render(<Alert pills>Alert Pills</Alert>)
    const alert = screen.getByText('Alert Pills')
    expect(alert).toBeInTheDocument()
  })
  it('renders a alert large', () => {
    render(<Alert large>Alert Large</Alert>)
    const alert = screen.getByText('Alert Large')
    expect(alert).toBeInTheDocument()
  })
  it('renders a alert and have default class', () => {
    render(<Alert>Alert</Alert>)
    const alert = screen.getByText('Alert')
    expect(alert).toHaveClass('text-blue-600 bg-opacity-10 bg-blue-600')
  })
  it('renders a alert and have custom class', () => {
    render(<Alert className="alert-custom">Alert</Alert>)
    const alert = screen.getByText('Alert')
    expect(alert).toHaveClass('text-blue-600 bg-opacity-10 bg-blue-600 alert-custom')
  })

  it(
    `renders a Alert.green, 
    renders Alert.green pills, 
    renders Alert.green large, 
    renders Alert.green default class,
    renders Alert.green custom class`,
    () => {
      render(
        <>
          <Alert.green>Alert Green</Alert.green>
          <Alert.green pills>Alert Green Pills</Alert.green>
          <Alert.green large>Alert Green Large</Alert.green>
          <Alert.green className="alert-custom">Alert Green Custom Class</Alert.green>
        </>
      )
      const alert = screen.getByText('Alert Green')
      const alertPills = screen.getByText('Alert Green Pills')
      const alertLarge = screen.getByText('Alert Green Large')
      const alertCustomClass = screen.getByText('Alert Green Custom Class')
      expect(alert).toBeInTheDocument()
      expect(alert).toHaveClass('text-green-600 bg-opacity-10 bg-green-600')
      expect(alertPills).toBeInTheDocument()
      expect(alertPills).toHaveClass('rounded-full')
      expect(alertLarge).toBeInTheDocument()
      expect(alertLarge).toHaveClass('text-sm')
      expect(alertCustomClass).toBeInTheDocument()
      expect(alertCustomClass).toHaveClass('alert-custom')
    })

  it.each(variants)('should have "text-%s-600" class',
    (variant) => {
      render(
        <>
          <Alert>Alert blue</Alert>
          <Alert.green>Alert green</Alert.green>
          <Alert.yellow>Alert yellow</Alert.yellow>
          <Alert.red>Alert red</Alert.red>
          <Alert.orange>Alert orange</Alert.orange>
          <Alert.purple>Alert violet</Alert.purple>
          <Alert.dark>Alert gray</Alert.dark>
        </>
      )
      expect(screen.queryByText(`Alert ${variant}`, { exact: false })).toHaveClass(
        `text-${variant}-600`
      )
    }
  )
})

