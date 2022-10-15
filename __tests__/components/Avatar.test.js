import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Avatar from '@/components/Avatar'
import imgAvatar from '../../public/avatar.png'

describe('Test Avatar Component', () => {
  it('renders a avatar', () => {
    render(
      <Avatar src={imgAvatar} alt="Image Component" className="mb-3" data-testid="avatar" />
    )
    const avatar = screen.getByTestId('avatar')
    expect(avatar).toBeInTheDocument()
  })
  it('renders a avatar and have default class', () => {
    render(
      <Avatar data-testid="avatar" src={imgAvatar} alt="Image Component" className="mb-3" />
    )
    const avatar = screen.getByTestId('avatar')
    expect(avatar).toHaveClass('relative h-8 w-8 border-blue-500 border-2 rounded-full')
  })
  it('renders a avatar and have custom class', () => {
    render(
      <Avatar data-testid="avatar" src={imgAvatar} alt="Image Component" className="avatar-custom" />
    )
    const avatar = screen.getByTestId('avatar')
    expect(avatar).toHaveClass('avatar-custom')
  })
  it('renders a avatar and have image as children', () => {
    render(
      <Avatar data-testid="avatar" id="img-component" src={imgAvatar} alt="Image Component" className="avatar-custom" />
    )
    const avatar = screen.getByTestId('avatar')
    const image = screen.getByTestId('img-component')
    expect(avatar).toContainElement(image)
  })
  it('renders a avatar and image have attributes src and alt', () => {
    render(
      <Avatar data-testid="avatar" id="img-component" src={imgAvatar} alt="Image Component" className="avatar-custom" />
    )
    const image = screen.getByTestId('img-component')
    expect(image).toHaveAttribute('src')
    expect(image).toHaveAttribute('alt', 'Image Component')
  })
  it('renders a avatar and image have default class', () => {
    render(
      <Avatar data-testid="avatar" id="img-component" src={imgAvatar} alt="Image Component" className="avatar-custom" />
    )
    const image = screen.getByTestId('img-component')
    expect(image).toHaveClass('rounded-full')
  })
})

