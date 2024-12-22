import { Post } from 'contentlayer/generated'
import { format, parseISO } from 'date-fns'
import Link from 'next/link'
import { CiClock1, CiCalendar } from 'react-icons/ci'

export function PostCard(post: Post) {
  return (
    <article className="flex w-full items-center justify-between">
      <div className="group relative flex w-full flex-col">
        <h3 className="mt-3 text-lg font-semibold leading-6">
          <Link href={post.url} scroll>
            {post.title}
          </Link>
        </h3>
        <p className="mt-1 line-clamp-3 text-sm leading-6">
          {post.description}
        </p>
        <div className="mt-3 flex justify-between">
          <div className="flex h-[24px] items-center justify-center whitespace-nowrap rounded-lg bg-[#eceff1] px-[12px] py-0 text-[13px] text-[#4f4f4f] dark:bg-neutral-600 dark:text-neutral-200">
            {post.category}
          </div>
          <div className="flex items-center gap-x-4 text-xs md:hidden">
            <div className="flex items-center gap-1">
              <CiCalendar className="inline-block" />
              <time dateTime={post.date}>
                {format(parseISO(post.date), 'yy.MM.dd')}
              </time>
            </div>
            <div className="flex items-center gap-1">
              <CiClock1 className="inline-block" />
              {post.readingMinutes}분
            </div>
          </div>
        </div>
      </div>
      <div className="hidden w-96 items-center justify-end gap-x-4 text-xs md:flex">
        <div className="flex items-center gap-1">
          <CiCalendar className="inline-block" />
          <time dateTime={post.date}>
            {format(parseISO(post.date), 'yy.MM.dd')}
          </time>
        </div>
        <div className="line-clamp-1 flex items-center gap-1">
          <CiClock1 className="inline-block" />
          <div className="w-5">{post.readingMinutes}분</div>
        </div>
      </div>
    </article>
  )
}
