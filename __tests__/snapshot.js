import { render } from '@testing-library/react'
import Home from '@/pages/index'
import Native from '@/pages/native'

it('renders home page unchanged', () => {
  const { container } = render(<Home />)
  expect(container).toMatchSnapshot()
})

it('renders native page unchanged', () => {
  const { container } = render(<Native />)
  expect(container).toMatchSnapshot()
})