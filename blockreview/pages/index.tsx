import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Blockreview</h1>
      <div className='flex gap-5'>
        <Link href='/p/juicebox'>
          Juicebox
        </Link>
        <Link href='/p/polygon'>
          Polygon
        </Link>
        <Link href='/p/blockReview'>
          Blockreview
        </Link>
        <Link href='/p/metamask'>
          Metamask
        </Link>
      </div>
    </main>
  )
}
