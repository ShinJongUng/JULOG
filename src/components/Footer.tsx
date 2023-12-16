import Link from 'next/link'
import { Container } from './Container'
import {
  RiLinkedinBoxFill,
  RiInstagramFill,
  RiGithubFill,
} from 'react-icons/ri'

export default function Footer() {
  const social = [
    {
      title: 'Linkedin',
      url: 'https://www.linkedin.com/in/%EC%A2%85%EC%9B%85-%EC%8B%A0-357a85237/',
      icon: RiLinkedinBoxFill,
    },
    {
      title: 'Instagram',
      url: 'https://www.instagram.com/photo.ung/',
      icon: RiInstagramFill,
    },
    {
      title: 'Github',
      url: 'https://github.com/ShinJongUng',
      icon: RiGithubFill,
    },
  ]

  return (
    <footer className="pb-14 pt-20">
      <Container>
        <div className="flex items-center justify-between text-sm">
          <p>© 2023 by Jongung</p>
          <ul className="flex items-center justify-center">
            {social.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.title}
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="items-centert mx-4 flex"
                >
                  <Icon className="h-5 w-5 fill-stone-500" />
                  <span className="ml-2 hidden text-stone-500 sm:block">
                    {item.title}
                  </span>
                </Link>
              )
            })}
          </ul>
        </div>
      </Container>
    </footer>
  )
}
