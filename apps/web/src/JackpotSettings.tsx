import React from 'react'

export interface Config {
  pool: number
  probability: number
  rakePercent: number
}

type Props = {
  config: Config
  onChange: (c: Config) => void
}

export default function JackpotSettings({ config, onChange }: Props) {
  return (
    <div className="space-y-2">
      <input
        aria-label="pool"
        className="border p-1"
        type="number"
        value={config.pool}
        onChange={(e) => onChange({ ...config, pool: Number(e.target.value) })}
      />
      <input
        aria-label="probability"
        className="border p-1"
        type="number"
        value={config.probability}
        step="0.01"
        onChange={(e) =>
          onChange({ ...config, probability: Number(e.target.value) })
        }
      />
      <input
        aria-label="rake"
        className="border p-1"
        type="number"
        value={config.rakePercent}
        step="0.1"
        onChange={(e) =>
          onChange({ ...config, rakePercent: Number(e.target.value) })
        }
      />
    </div>
  )
}
