import { Providers } from '@/app/providers'
import { Container } from '@/components/Container'
import ThemeSwitch from '@/components/ThemeSwitch'
import { WEBSITE_HOST_URL } from '@/lib/constants'
import clsx from 'clsx'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import './globals.css'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

const meta = {
  title: 'JULOG',
  description: `JongUng's Log 개발하면서 공부한 것, 느낀 것을 기록하는 공간입니다.`,
  image: `${WEBSITE_HOST_URL}/og-preview.jpg`,
}

export const metadata: Metadata = {
  title: {
    default: meta.title,
    template: '%s | JULOG',
  },
  description: meta.description,
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: WEBSITE_HOST_URL,
    siteName: meta.title,
    locale: 'ko-KR',
    type: 'website',
    images: [
      {
        url: meta.image,
      },
    ],
  },
  twitter: {
    title: meta.title,
    description: meta.description,
    images: meta.image,
    card: 'summary_large_image',
  },
  alternates: {
    canonical: WEBSITE_HOST_URL,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={clsx(inter.className, 'bg-zinc-50 dark:bg-gray-900')}>
        <Providers>
          {/* <NextTopLoader showSpinner={false} color="#378B29" /> */}
          <div className="absolute top-0 -z-10 -mt-40 h-60 w-full bg-gradient-to-r from-primary to-[#378B29] opacity-20 blur-2xl"></div>
          <header className="py-2">
            <Container>
              <div className="flex items-center justify-between py-4">
                <Link href="/" className="m-1 rounded-md p-1 hover:opacity-50">
                  <div className="text-xl font-bold">JULOG</div>
                </Link>
                <ThemeSwitch />
              </div>
            </Container>
          </header>
          <main className="mt-6">
            <Container>{children}</Container>
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
