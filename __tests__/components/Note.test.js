import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Note from '@/components/Note'

describe('Test Note Component', () => {
  it('renders a note', () => {
    render(<Note title="Title">Note</Note>)
    const note = screen.getByText('Note')
    expect(note).toBeInTheDocument()
  })
  it('renders a note and have text content', () => {
    render(<Note title="Title">Note</Note>)
    const note = screen.getByText('Note')
    expect(note).toHaveTextContent('Title')
    expect(note).toHaveTextContent('Note')
  })
  it('renders a note and have default class', () => {
    render(<Note title="Title">Note</Note>)
    const note = screen.getByText('Note')
    expect(note).toHaveClass('text-sm border')
  })
  it('renders a note and have custom class', () => {
    render(<Note title="Title" className="note-custom">Note</Note>)
    const note = screen.getByText('Note')
    expect(note).toHaveClass('note-custom')
  })
})

