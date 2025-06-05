import HandInput from './HandInput'
import ResultPanel from './ResultPanel'
import { useState } from 'react'

export default function App() {
  const [hand, setHand] = useState('')
  const [equity, setEquity] = useState<number | null>(null)

  async function calculate() {
    const res = await fetch('/equity', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ hand }),
    })
    const data = await res.json()
    setEquity(data.equity)
  }

  return (
    <div className="p-4">
      <HandInput value={hand} onChange={setHand} />
      <button className="mt-2 px-4 py-1 bg-blue-500 text-white" onClick={calculate}>Calculate</button>
      {equity !== null && <ResultPanel equity={equity} />}
    </div>
  )
}
