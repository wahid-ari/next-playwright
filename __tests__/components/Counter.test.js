import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import Counter from '@/components/Counter'

test('allows counter clicks until the maxClicks is reached, then requires a reset', async () => {
  render(<Counter initialCount={3} maxClicks={4} />)
  const counterButton = screen.getByTestId("counter-btn-count")
  const counterCount = screen.getByTestId("counter-count")

  // the counter is initialized to the initialCount
  expect(counterButton).toHaveTextContent('Count')
  expect(counterCount).toHaveTextContent('3')

  // when clicked, the counter increments the click
  await userEvent.click(counterButton)
  expect(counterCount).toHaveTextContent('4')

  // the counter button is disabled when it's hit the maxClicks
  expect(counterButton).toHaveAttribute('disabled')

  // the counter button no longer increments the count when clicked.
  await userEvent.click(counterButton)
  expect(counterCount).toHaveTextContent('4')

  // the reset button has been rendered and is clickable
  await userEvent.click(screen.getByTestId("counter-btn-reset"))

  // the counter is reset to the initialCount after reset button is clicked
  // the reset button disappear from document
  expect(counterCount).toHaveTextContent('3')
  expect(screen.queryByTestId("counter-btn-reset")).not.toBeInTheDocument()

  // the counter can be clicked and increment the count again
  await userEvent.click(counterButton)
  expect(counterCount).toHaveTextContent('4')
})