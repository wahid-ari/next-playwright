import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import AlertOutline from '@/components/AlertOutline'

const variants = ['blue', 'green', 'yellow', 'red', 'orange', 'violet', 'gray']

describe('Test AlertOutline Component', () => {
  it('renders a alertoutline', () => {
    render(<AlertOutline>Alert Outline</AlertOutline>)
    const alertoutline = screen.getByText('Alert Outline')
    expect(alertoutline).toBeInTheDocument()
  })
  it('renders a alertoutline pills', () => {
    render(<AlertOutline pills>Alert Outline Pills</AlertOutline>)
    const alertoutline = screen.getByText('Alert Outline Pills')
    expect(alertoutline).toBeInTheDocument()
  })
  it('renders a alertoutline large', () => {
    render(<AlertOutline large>Alert Outline Large</AlertOutline>)
    const alertoutline = screen.getByText('Alert Outline Large')
    expect(alertoutline).toBeInTheDocument()
  })
  it('renders a alertoutline and have default class', () => {
    render(<AlertOutline>Alert Outline</AlertOutline>)
    const alertoutline = screen.getByText('Alert Outline')
    expect(alertoutline).toHaveClass('text-blue-600 border border-blue-500')
  })
  it('renders a alertoutline and have custom class', () => {
    render(<AlertOutline className="alert-outline-custom">Alert Outline</AlertOutline>)
    const alertoutline = screen.getByText('Alert Outline')
    expect(alertoutline).toHaveClass('text-blue-600 border border-blue-500 alert-outline-custom')
  })

  it(
    `renders a AlertOutline.green, 
    renders AlertOutline.green pills, 
    renders AlertOutline.green large, 
    renders AlertOutline.green default class,
    renders AlertOutline.green custom class`,
    () => {
      render(
        <>
          <AlertOutline.green>Alert Outline Green</AlertOutline.green>
          <AlertOutline.green pills>Alert Outline Green Pills</AlertOutline.green>
          <AlertOutline.green large>Alert Outline Green Large</AlertOutline.green>
          <AlertOutline.green className="alert-outline-custom">Alert Outline Green Custom Class</AlertOutline.green>
        </>
      )
      const alertoutline = screen.getByText('Alert Outline Green')
      const alertoutlinePills = screen.getByText('Alert Outline Green Pills')
      const alertoutlineLarge = screen.getByText('Alert Outline Green Large')
      const alertoutlineCustomClass = screen.getByText('Alert Outline Green Custom Class')
      expect(alertoutline).toBeInTheDocument()
      expect(alertoutline).toHaveClass('text-green-600 border border-green-500')
      expect(alertoutlinePills).toBeInTheDocument()
      expect(alertoutlinePills).toHaveClass('rounded-full')
      expect(alertoutlineLarge).toBeInTheDocument()
      expect(alertoutlineLarge).toHaveClass('text-sm')
      expect(alertoutlineCustomClass).toBeInTheDocument()
      expect(alertoutlineCustomClass).toHaveClass('alert-outline-custom')
    })

  it.each(variants)('should have "text-%s-600" class',
    (variant) => {
      render(
        <>
          <AlertOutline>Alert Outline blue</AlertOutline>
          <AlertOutline.green>Alert Outline green</AlertOutline.green>
          <AlertOutline.yellow>Alert Outline yellow</AlertOutline.yellow>
          <AlertOutline.red>Alert Outline red</AlertOutline.red>
          <AlertOutline.orange>Alert Outline orange</AlertOutline.orange>
          <AlertOutline.purple>Alert Outline violet</AlertOutline.purple>
          <AlertOutline.dark>Alert Outline gray</AlertOutline.dark>
        </>
      )
      expect(screen.queryByText(`Alert Outline ${variant}`, { exact: false })).toHaveClass(
        `text-${variant}-600`
      )
    }
  )
})

