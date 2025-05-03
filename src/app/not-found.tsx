// app/not-found.tsx
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'

export const metadata = {
  title: 'Page Not Found – Bilal Ahmed',
}

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-tr from-indigo-600 via-purple-600 to-fuchsia-600 px-4 text-white">
      {/* decorative planet / blob */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-fuchsia-400/30 blur-3xl animate-pulse" />
        <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-indigo-400/30 blur-3xl animate-pulse" />
      </div>

      {/* logo / avatar */}
      <Image
        src="/rocket.png"          // replace with your logo or delete this line
        alt=""
        width={96}
        height={96}
        className="rounded-full border-4 border-white/30 mb-8 relative z-10"
        priority
      />

      {/* headline */}
      <h1 className="relative z-10 text-center text-7xl md:text-9xl font-extrabold tracking-tighter drop-shadow-lg">
        404
      </h1>
      <p className="relative z-10 mt-6 max-w-xl text-center text-lg md:text-xl text-white/80">
        Oops! The page you were looking for doesn’t exist—or has drifted off
        into the cosmos. Let’s get you back on course.
      </p>

      {/* back home button */}
      <Link
        href="/"
        className="relative z-10 mt-10 inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 text-base font-semibold
                   text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2
                   transition-colors"
      >
        <ArrowLeft className="h-5 w-5" />
        Take me home
      </Link>

      {/* footer mark */}
      <span className="relative z-10 mt-14 text-xs text-white/40">
        © {new Date().getFullYear()} Bilal Ahmed
      </span>
    </main>
  )
}
