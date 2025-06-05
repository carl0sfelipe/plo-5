import { motion } from 'framer-motion'
import React from 'react'

type Props = {
  value: string
  onChange: (v: string) => void
}

export default function HandInput({ value, onChange }: Props) {
  return (
    <motion.input
      aria-label="hand"
      className="border p-2"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  )
}
