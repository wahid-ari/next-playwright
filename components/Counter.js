import { useState } from "react"

export default function Counter({ initialCount = 0, maxClicks = 3 }) {
  const [count, setCount] = useState(initialCount)
  const tooManyClick = count >= maxClicks

  return (
    <div className="flex items-center gap-x-2">
      <button data-testid="counter-btn-count" onClick={() => setCount(count + 1)} disabled={tooManyClick}
        className={`${tooManyClick && "cursor-not-allowed"} text-sm bg-teal-600 hover:bg-teal-700 transition-all text-white px-2 py-1 rounded`}>
        Count
      </button>
      <p data-testid="counter-count" className="dark:text-white">{count}</p>
      {tooManyClick &&
        <button data-testid="counter-btn-reset" onClick={() => setCount(initialCount)}
          className="text-sm bg-red-500 hover:bg-red-600 transition-all text-white px-2 py-1 rounded">Reset</button>
      }
    </div>
  )
}