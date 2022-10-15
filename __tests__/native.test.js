import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Native from '@/pages/native'

describe('Native', () => {
  it('renders a heading', () => {
    render(<Native />)
    const heading = screen.getByTestId('heading')
    expect(heading).toBeInTheDocument()
  })

  it('renders a native button', () => {
    render(<Native />)
    const button = screen.getByTestId('button-native')
    expect(button).toBeInTheDocument()
  })

  it('renders a native input', () => {
    render(<Native />)
    const input = screen.getByTestId('input-native')
    expect(input).toBeInTheDocument()
  })

  it('renders <a></a> tag with link as text and not disabled', () => {
    render(<Native />)
    const aTag = screen.getByText('link')
    expect(aTag).toBeInTheDocument()
    expect(aTag).not.toBeDisabled()
  })

})

test('Test toBeDisabled', () => {
  render(<Native />)
  const button = screen.getByTestId('button-native-disabled')
  const input = screen.getByTestId('input-native-disabled')
  const aTag = screen.getByText('link')
  expect(button).toBeDisabled()
  expect(input).toBeDisabled()
  expect(aTag).not.toBeDisabled()
})

test('Test toBeEmptyDOMElement', () => {
  render(<Native />)
  expect(screen.queryByTestId('empty')).toBeEmptyDOMElement()
  expect(screen.queryByTestId('not-empty')).not.toBeEmptyDOMElement()
  expect(screen.queryByTestId('with-whitespace')).not.toBeEmptyDOMElement()
})

test('Test toBeInTheDocument', () => {
  render(<Native />)
  expect(screen.getByTestId('html-element'),).toBeInTheDocument()
  expect(screen.getByTestId('svg-element')).toBeInTheDocument()
  expect(screen.queryByTestId('does-not-exist'),).not.toBeInTheDocument()
})

test('Test toBeRequired', () => {
  render(<Native />)
  expect(screen.getByTestId('required-input')).toBeRequired()
  expect(screen.getByTestId('aria-required-input')).toBeRequired()
  expect(screen.getByTestId('conflicted-input')).toBeRequired()
  expect(screen.getByTestId('aria-not-required-input')).not.toBeRequired()
  expect(screen.getByTestId('optional-input')).not.toBeRequired()
  expect(screen.getByTestId('unsupported-type')).not.toBeRequired()
  expect(screen.getByTestId('select')).toBeRequired()
  expect(screen.getByTestId('textarea')).toBeRequired()
  expect(screen.getByTestId('supported-role')).not.toBeRequired()
  expect(screen.getByTestId('supported-role-aria')).toBeRequired()
})

test('Test toBeValid', () => {
  render(<Native />)
  expect(screen.getByTestId('no-aria-invalidd')).toBeValid()
  expect(screen.getByTestId('aria-invalidd')).not.toBeValid()
  expect(screen.getByTestId('aria-invalid-valuee')).not.toBeValid()
  expect(screen.getByTestId('aria-invalid-falsee')).toBeValid()
  expect(screen.getByTestId('valid-formm')).toBeValid()
  expect(screen.getByTestId('invalid-formm')).not.toBeValid()
})

test('Test toBeInvalid', () => {
  render(<Native />)
  expect(screen.getByTestId('no-aria-invalid')).not.toBeInvalid()
  expect(screen.getByTestId('aria-invalid')).toBeInvalid()
  expect(screen.getByTestId('aria-invalid-value')).toBeInvalid()
  expect(screen.getByTestId('aria-invalid-false')).not.toBeInvalid()
  expect(screen.getByTestId('valid-form')).not.toBeInvalid()
  expect(screen.getByTestId('invalid-form')).toBeInvalid()
})

test('Test toBeVisible', () => {
  render(<Native />)
  expect(screen.getByText('Zero Opacity Example')).not.toBeVisible()
  expect(screen.getByText('Visibility Hidden Example')).not.toBeVisible()
  expect(screen.getByText('Display None Example')).not.toBeVisible()
  expect(screen.getByText('Hidden Parent Example')).not.toBeVisible()
  expect(screen.getByText('Visible Example')).toBeVisible()
  expect(screen.getByText('Hidden Attribute Example')).not.toBeVisible()
  expect(screen.getByText('Hidden Details Example')).not.toBeVisible()
  expect(screen.getByText('Visible Details Example')).toBeVisible()
})

test('Test toContainElement', () => {
  render(<Native />)
  const ancestor = screen.getByTestId('ancestor')
  const descendant = screen.getByTestId('descendant')
  expect(ancestor).toContainElement(descendant)
  expect(descendant).not.toContainElement(ancestor)
})

test('Test toHaveAccessibleDescription', () => {
  render(<Native />)
  expect(screen.getByTestId('link')).toHaveAccessibleDescription()
  expect(screen.getByTestId('link')).toHaveAccessibleDescription('A link to start over')
  expect(screen.getByTestId('link')).not.toHaveAccessibleDescription('Home page')
  expect(screen.getByTestId('extra-link')).not.toHaveAccessibleDescription()
  expect(screen.getByTestId('avatar')).not.toHaveAccessibleDescription()
  expect(screen.getByTestId('logo')).not.toHaveAccessibleDescription('Company logo')
  expect(screen.getByTestId('logo')).toHaveAccessibleDescription(
    'The logo of Our Company',
  )
})

test('Test toHaveAccessibleName', () => {
  render(<Native />)
  expect(screen.getByTestId('img-alt')).toHaveAccessibleName('Test alt')
  expect(screen.getByTestId('img-empty-alt')).not.toHaveAccessibleName()
  expect(screen.getByTestId('svg-title')).toHaveAccessibleName('Test title')
  expect(screen.getByTestId('button-img-alt')).toHaveAccessibleName()
  expect(screen.getByTestId('img-paragraph')).not.toHaveAccessibleName()
  expect(screen.getByTestId('svg-button')).toHaveAccessibleName()
  expect(screen.getByTestId('svg-without-title')).not.toHaveAccessibleName()
  expect(screen.getByTestId('input-title')).toHaveAccessibleName()
})

test('Test toHaveAttribute', () => {
  render(<Native />)
  const button = screen.getByTestId('ok-button')
  expect(button).toHaveAttribute('disabled')
  expect(button).toHaveAttribute('type', 'submit')
  expect(button).not.toHaveAttribute('type', 'button')
  expect(button).toHaveAttribute('type', expect.stringContaining('sub'))
  expect(button).toHaveAttribute('type', expect.not.stringContaining('but'))
})

test('Test toHaveClass', () => {
  render(<Native />)
  const deleteButton = screen.getByTestId('delete-button')
  const noClasses = screen.getByTestId('no-classes')
  expect(deleteButton).toHaveClass('extra')
  expect(deleteButton).toHaveClass('btn-danger btn')
  expect(deleteButton).toHaveClass('btn-danger', 'btn')
  expect(deleteButton).not.toHaveClass('btn-link')
  // to check if the element has EXACTLY a set of classes
  expect(deleteButton).toHaveClass('btn extra btn-danger text-sm text-white py-1 px-2 block rounded my-3 bg-blue-500 hover:bg-blue-600 hover:cursor-pointer transition-all', { exact: true })
  // if it has more than expected it is going to fail
  expect(deleteButton).not.toHaveClass('btn-danger extra', { exact: true })
  expect(noClasses).not.toHaveClass()
})

test('Test toHaveFocus', () => {
  render(<Native />)
  const input = screen.getByTestId('element-to-focus')
  input.focus()
  expect(input).toHaveFocus()
  input.blur()
  expect(input).not.toHaveFocus()
})

test('Test toHaveFormValues', () => {
  render(<Native />)
  expect(screen.getByTestId('login-form')).toHaveFormValues({
    username: 'john.doe',
    password: '12345678',
    rememberMe: true,
  })
})

test('Test toHaveTextContent', () => {
  render(<Native />)
  const element = screen.getByTestId('text-content')
  expect(element).toHaveTextContent('Content')
  // to match the whole content
  expect(element).toHaveTextContent(/^Text Content$/)
  // to use case-insensitive match
  expect(element).toHaveTextContent(/content$/i)
  expect(element).not.toHaveTextContent('content')
})

test('Test toHaveValue', () => {
  render(<Native />)
  const textInput = screen.getByTestId('input-text')
  const numberInput = screen.getByTestId('input-number')
  const emptyInput = screen.getByTestId('input-empty')
  const selectInput = screen.getByTestId('select-number')
  expect(textInput).toHaveValue('text')
  expect(numberInput).toHaveValue(5)
  expect(emptyInput).not.toHaveValue()
  expect(selectInput).toHaveValue('second')
})

test('Test toHaveDisplayValue', () => {
  render(<Native />)
  const input = screen.getByLabelText('First name')
  const textarea = screen.getByLabelText('Description')
  expect(input).toHaveDisplayValue('text')
  expect(input).toHaveDisplayValue(/tex/)
  expect(textarea).toHaveDisplayValue('text')
  expect(textarea).toHaveDisplayValue(/tex/)
})

test('Test toBeChecked', () => {
  render(<Native />)
  const inputCheckboxChecked = screen.getByTestId('input-checkbox-checked')
  const inputCheckboxUnchecked = screen.getByTestId('input-checkbox-unchecked')
  expect(inputCheckboxChecked).toBeChecked()
  expect(inputCheckboxUnchecked).not.toBeChecked()

  const inputRadioChecked = screen.getByTestId('input-radio-checked')
  const inputRadioUnchecked = screen.getByTestId('input-radio-unchecked')
  expect(inputRadioChecked).toBeChecked()
  expect(inputRadioUnchecked).not.toBeChecked()
})

