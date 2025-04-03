
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4">
      <h1 className="text-6xl font-bold text-gray-900 dark:text-gray-100 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-6">Blog Post Not Found</h2>
      <p className="text-gray-600 dark:text-gray-400 text-center max-w-md mb-8">
        The blog post you're looking for doesn't exist or has been moved to another location.
      </p>
      <Link
        href="/blogs"
        className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-300"
      >
        Back to Blogs
      </Link>
    </div>
  )
}

