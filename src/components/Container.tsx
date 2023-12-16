import clsx from 'clsx'

export function Container({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={clsx(className, 'mx-auto max-w-3xl px-6 lg:max-w-5xl')}>
      {children}
    </div>
  )
}
