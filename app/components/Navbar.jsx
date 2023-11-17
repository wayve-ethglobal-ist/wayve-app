import Link from 'next/link'

export default function Navbar() {
  return (
    <nav>
      <Link href="/">Main</Link>
      <Link href="/features">Features</Link>
    </nav>
  )
}