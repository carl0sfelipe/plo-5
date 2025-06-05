import HandInput from './HandInput'
import BoardInput from './BoardInput'
import PotInput from './PotInput'
import JackpotSettings, { Config } from './JackpotSettings'
import ResultPanel from './ResultPanel'
import { useState } from 'react'

export default function App() {
  const [hand, setHand] = useState('')
  const [board, setBoard] = useState('')
  const [pot, setPot] = useState(100)
  const [config, setConfig] = useState<Config>({ pool: 1000, probability: 0.1, rakePercent: 5 })
  const [netEv, setNetEv] = useState<number | null>(null)

  async function calculate() {
    const res = await fetch('/net-ev', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ hand, board: board || undefined, pot, config }),
    })
    const data = await res.json()
    setNetEv(data.netEv)
  }

  return (
    <div className="p-4">
      <JackpotSettings config={config} onChange={setConfig} />
      <HandInput value={hand} onChange={setHand} />
      <BoardInput value={board} onChange={setBoard} />
      <PotInput value={pot} onChange={setPot} />
      <button className="mt-2 px-4 py-1 bg-blue-500 text-white" onClick={calculate}>Calculate</button>
      {netEv !== null && <ResultPanel equity={netEv} />}
    </div>
  )
}
