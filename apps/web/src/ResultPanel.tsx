import React from 'react'

type Props = {
  equity: number
}

export default function ResultPanel({ equity }: Props) {
  return (
    <div className="mt-4">
      <h2>Net EV</h2>
      <div>{(equity * 100).toFixed(2)}%</div>
    </div>
  )
}
