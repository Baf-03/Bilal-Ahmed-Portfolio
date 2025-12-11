// app/not-found.tsx
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata = {
  title: 'Page Not Found – Bilal Ahmed',
}

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 px-4 text-gray-900 dark:text-gray-100">
      <h1 className="text-6xl md:text-8xl font-bold mb-4">404</h1>
      <p className="text-lg md:text-xl text-center mb-8 max-w-md">
        Oops! The page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        <ArrowLeft className="h-5 w-5" />
        Go Home
      </Link>
    </main>
  )
}
