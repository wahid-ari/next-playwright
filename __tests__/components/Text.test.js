import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Text from '@/components/Text'

describe('Test Text Component', () => {
  it('renders a text', () => {
    render(<Text>Text</Text>)
    const text = screen.getByText('Text')
    expect(text).toBeInTheDocument()
  })
  it('renders a text with default class', () => {
    render(<Text>Text</Text>)
    const text = screen.getByText('Text')
    expect(text).toHaveClass('text-sm dark:text-white')
  })
  it('renders a text with custom class', () => {
    render(<Text className="text-custom">Text</Text>)
    const text = screen.getByText('Text')
    expect(text).toHaveClass('text-sm dark:text-white text-custom')
  })

  it(
    `renders a Text.medium, 
    renders Text.medium with default class,
    renders Text.medium with custom class`,
    () => {
      render(
        <>
          <Text.medium>Text Medium</Text.medium>
          <Text.medium className="text-custom">Text Medium Custom Class</Text.medium>
        </>
      )
      const text = screen.getByText('Text Medium')
      const textCustomClass = screen.getByText('Text Medium Custom Class')
      expect(text).toBeInTheDocument()
      expect(text).toHaveClass('font-medium')
      expect(textCustomClass).toBeInTheDocument()
      expect(textCustomClass).toHaveClass('text-custom')
    })

  it.each(
    [['light', 'light'],
    ['medium', 'medium'],
    ['semibold', 'semibold'],
    ['bold', 'bold'],
    ['extrabold', 'extrabold']])
    ('"Text.%s" should have "font-%s" class',
      (variant) => {
        render(
          <>
            <Text.light>Text light</Text.light>
            <Text.medium>Text medium</Text.medium>
            <Text.semibold>Text semibold</Text.semibold>
            <Text.bold>Text bold</Text.bold>
            <Text.extrabold>Text extrabold</Text.extrabold>
          </>
        )
        expect(screen.queryByText(`Text ${variant}`, { exact: false })).toHaveClass(
          `font-${variant}`
        )
      }
    )
})

