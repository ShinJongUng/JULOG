'use client'
import { useEffect } from 'react'
import useSWR from 'swr'

async function fetcher(...args: [string, RequestInit?]) {
  const res = await fetch(...args)
  return res.json()
}

export default function ViewCounter({ slug, blogPage = false }) {
  const { data } = useSWR(`/api/views/${slug}`, fetcher)
  const views: number = data?.total
  useEffect(() => {
    const registerView = () =>
      fetch(`/api/views/${slug}`, {
        method: 'POST',
      })

    if (blogPage) {
      registerView()
    }
  }, [slug])

  return `${views > 0 ? views.toLocaleString() : '–'} views`
}
