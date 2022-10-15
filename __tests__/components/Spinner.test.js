import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Spinner from '@/components/Spinner'

describe('Test Spinner Component', () => {
  it('renders a spinner', () => {
    render(<Spinner data-testid="spinner" />)
    const spinner = screen.getByTestId('spinner')
    expect(spinner).toBeInTheDocument()
    expect(spinner).toHaveClass('fill-blue-600')
  })
  it('renders a spinner small', () => {
    render(<Spinner data-testid="spinner" small />)
    const spinner = screen.getByTestId('spinner')
    expect(spinner).toBeInTheDocument()
    expect(spinner).toHaveClass('!w-6 !h-6')
  })
  it('renders a spinner large', () => {
    render(<Spinner data-testid="spinner" large />)
    const spinner = screen.getByTestId('spinner')
    expect(spinner).toBeInTheDocument()
    expect(spinner).toHaveClass('!w-10 !h-10')
  })
  it('renders a spinner and have default class', () => {
    render(<Spinner data-testid="spinner" />)
    const spinner = screen.getByTestId('spinner')
    expect(spinner).toHaveClass('fill-blue-600')
  })
  it('renders a spinner and have custom class', () => {
    render(<Spinner data-testid="spinner" className="spinner-custom" />)
    const spinner = screen.getByTestId('spinner')
    expect(spinner).toHaveClass('spinner-custom')
  })

  it(
    `renders a Spinner.green, 
    renders Spinner.green small, 
    renders Spinner.green large, 
    renders Spinner.green default class,
    renders Spinner.green custom class`,
    () => {
      render(
        <>
          <Spinner.green data-testid="spinner">Spinner Green</Spinner.green>
          <Spinner.green data-testid="spinner-small" small>Spinner Green Small</Spinner.green>
          <Spinner.green data-testid="spinner-large" large>Spinner Green Large</Spinner.green>
          <Spinner.green data-testid="spinner-custom" className="spinner-custom">Spinner Green Custom Class</Spinner.green>
        </>
      )
      const spinner = screen.getByTestId('spinner')
      const spinnerSmall = screen.getByTestId('spinner-small')
      const spinnerLarge = screen.getByTestId('spinner-large')
      const spinnerCustomClass = screen.getByTestId('spinner-custom')
      expect(spinner).toBeInTheDocument()
      expect(spinner).toHaveClass('fill-green-600')
      expect(spinnerSmall).toBeInTheDocument()
      expect(spinnerSmall).toHaveClass('!w-6 !h-6')
      expect(spinnerLarge).toBeInTheDocument()
      expect(spinnerLarge).toHaveClass('!w-10 !h-10')
      expect(spinnerCustomClass).toBeInTheDocument()
      expect(spinnerCustomClass).toHaveClass('spinner-custom')
    })

  it.each(
    [['green', 'green'],
    ['yellow', 'yellow'],
    ['red', 'red'],
    ['orange', 'orange'],
    ['purple', 'violet'],
    ['dark', 'gray']])
    ('"Spinner.%s" should have "fill-%s-600" class',
      (variant, className) => {
        // function Variants () {
        //   return `<Spinner.${variant}>Spinner ${variant}</Spinner.${variant}>`
        // }
        // const Variants = `Spinner.${variant}`
        // console.log(Variants)
        render(
          <>
            {/* <Variants /> */}
            {/* <Variants>Spinner ${variant}</Variants> */}
            <Spinner.green data-testid="spinner-green"/>
            <Spinner.yellow data-testid="spinner-yellow"/>
            <Spinner.red data-testid="spinner-red"/>
            <Spinner.orange data-testid="spinner-orange"/>
            <Spinner.purple data-testid="spinner-purple"/>
            <Spinner.dark data-testid="spinner-dark"/>
          </>
        )
        expect(screen.queryByTestId(`spinner-${variant}`, { exact: false })).toHaveClass(
          `fill-${className}-600`
        )
      }
    )
})

