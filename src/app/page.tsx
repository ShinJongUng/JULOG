import { PostCard } from '@/components/PostCard'
import { allPosts } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'
import { RoughNotation } from 'react-rough-notation'
import { MotionDiv } from '@/components/FramerMotion'
import { fadeIn, fadeInUp } from '@/lib/animation'

export default function Home() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  )

  return (
    <div>
      <div className="whitespace-pre-line text-center text-3xl font-bold leading-10 sm:mx-0 sm:text-left sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl">
        안녕하세요!
        <br />
        <RoughNotation
          type="underline"
          show
          strokeWidth={2}
          padding={1}
          color="#999999"
        >
          <span className="background-animate bg-gradient-to-r from-primary to-[#378B29] bg-clip-text text-transparent">
            JULOG
          </span>
        </RoughNotation>
        에 오신 것을 환영합니다.
        <br />
      </div>

      <p className="mt-16 text-center text-gray-500 sm:text-left">
        개발하면서 공부한 것, 느낀 것을 기록하는 공간입니다.
      </p>

      <div className="mt-8 space-y-12 border-t border-gray-200 pt-10 dark:border-gray-700">
        {posts.map((post, idx) => (
          <div key={idx}>
            <PostCard key={idx} {...post} />
          </div>
        ))}
      </div>
    </div>
  )
}
