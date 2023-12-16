'use client'
import React, { useState, useEffect } from 'react'

const ProgressBar = () => {
  const [scroll, setScroll] = useState(0)

  const handleScroll = () => {
    const totalHeight =
      document.documentElement.scrollHeight - window.innerHeight
    const currentScroll = window.pageYOffset
    setScroll((currentScroll / totalHeight) * 100)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className="fixed left-0 top-0 z-50 h-2 bg-gradient-to-r from-[#b4e9a7] to-primary "
      style={{ width: `${scroll}%` }}
    />
  )
}

export default ProgressBar
