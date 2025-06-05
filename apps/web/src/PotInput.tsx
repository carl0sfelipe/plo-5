import React from 'react'

type Props = {
  value: number
  onChange: (v: number) => void
}

export default function PotInput({ value, onChange }: Props) {
  return (
    <input
      aria-label="pot"
      className="border p-1"
      type="number"
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
    />
  )
}
