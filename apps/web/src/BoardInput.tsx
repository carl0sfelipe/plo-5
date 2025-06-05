import React from 'react'

type Props = {
  value: string
  onChange: (v: string) => void
}

export default function BoardInput({ value, onChange }: Props) {
  return (
    <input
      aria-label="board"
      className="border p-1"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  )
}
