import { WEBSITE_HOST_URL } from '@/lib/constants'
import type { Metadata } from 'next'

const meta = {
  title: 'About JULOG',
  description: 'JULOG에 대해 소개합니다.',
  url: `${WEBSITE_HOST_URL}/about`,
}

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: meta.url,
  },
  twitter: {
    title: meta.title,
    description: meta.description,
  },
  alternates: {
    canonical: meta.url,
  },
}

export default function About() {
  return (
    <div className="space-y-7">
      <h1>About</h1>
      <p>공사중...</p>
    </div>
  )
}
