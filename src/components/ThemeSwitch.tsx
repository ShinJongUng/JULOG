'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { DarkModeSwitch } from 'react-toggle-dark-mode'

export function ThemeSwitch() {
  let { resolvedTheme, setTheme } = useTheme()
  let otherTheme = resolvedTheme === 'dark' ? 'light' : 'dark'
  let [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null
  return (
    <DarkModeSwitch
      checked={resolvedTheme == 'dark' ? true : false}
      onChange={() => setTheme(otherTheme)}
      size={25}
    />
  )
}

export default ThemeSwitch
