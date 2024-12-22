import Giscus from '@/components/Giscus'
import ProgressBar from '@/components/ProgressBar'
import { WEBSITE_HOST_URL } from '@/lib/constants'
import { allPosts } from 'contentlayer/generated'
import { format, parseISO } from 'date-fns'
import type { MDXComponents } from 'mdx/types'
import type { Metadata } from 'next'
import { useMDXComponent } from 'next-contentlayer/hooks'
import NextImage from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { CiCalendar, CiClock1 } from 'react-icons/ci'

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post._raw.flattenedPath,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata | undefined> {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)

  if (!post) {
    return
  }

  const { title, description, date, url } = post

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime: date,
      url: `${WEBSITE_HOST_URL}/posts/${url}`,
    },
    twitter: {
      title,
      description,
    },
    alternates: {
      canonical: `${WEBSITE_HOST_URL}/posts/${url}`,
    },
  }
}

// Define your custom MDX components.
const mdxComponents: MDXComponents = {
  a: ({ href, children }) => <Link href={href as string}>{children}</Link>,
  Image: (props) => <NextImage className="rounded-lg" {...props} />,
}

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)

  if (!post) {
    notFound()
  }

  const MDXContent = useMDXComponent(post.body.code)

  return (
    <div>
      <ProgressBar />
      <h1 className="text-4xl font-bold">{post.title}</h1>
      <div className="text-md tex mt-3 flex items-center gap-x-4 text-gray-500">
        <div className="flex items-center gap-1">
          <CiCalendar className="inline-block" />
          <time dateTime={post.date}>
            {format(parseISO(post.date), 'yy.MM.dd')}
          </time>
        </div>
        <div className="line-clamp-1 flex items-center gap-1">
          <CiClock1 className="inline-block" />
          <div className="w-8">{post.readingMinutes}분</div>
        </div>
      </div>
      <article className="prose w-full dark:prose-invert">
        <MDXContent components={mdxComponents} />
      </article>
      <Giscus />
    </div>
  )
}

export default PostLayout
