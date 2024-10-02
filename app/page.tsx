import Intro from '@/components/intro'
import { MDXRemote } from 'next-mdx-remote/rsc'

import RecentProjects from '@/components/recent-components'

export default function Home() {
  const content = `
   # This is a markdown Heading`
  return (
    <section className='py-24'>
      <div className='container max-w-3xl'>
        <Intro />

        <RecentProjects />
      </div>
    </section>
  )
}
