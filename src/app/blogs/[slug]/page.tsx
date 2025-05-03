// app/blog/[slug]/page.tsx
import Image from 'next/image'
import Link from 'next/link'
import { headers } from 'next/headers'
import { ArrowLeft } from 'lucide-react'
import {
  FaWhatsapp,
  FaFacebookF,
  FaLinkedinIn,
  FaRedditAlien,
  FaTwitter,
} from 'react-icons/fa'
import { getBlogPostBySlug, getBlogPosts } from '../blog.data'
import { notFound } from 'next/navigation'

// ────────────────────────────────────────────────────────────────────────────────
// Static params for SSG
// ────────────────────────────────────────────────────────────────────────────────
export async function generateStaticParams() {
  const posts = await getBlogPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

// ────────────────────────────────────────────────────────────────────────────────
// Page component (server component → no extra client files)
// ────────────────────────────────────────────────────────────────────────────────
export default async function BlogPost({
  params,
}: {
  params: { slug: string }
}) {
  const post = await getBlogPostBySlug(params.slug)
  if (!post) notFound()

  /* ------------------------------------------------------------------------ */
  /*  Build an absolute URL for share links (works in dev, prod, or preview)  */
  /* ------------------------------------------------------------------------ */
  const hdrs = headers()
  const proto = hdrs.get('x-forwarded-proto') || 'https'
  const host = hdrs.get('x-forwarded-host') || hdrs.get('host')
  const url = `${proto}://${host}/blogs/${post.slug}`

  const encodedURL = encodeURIComponent(url)
  const encodedTitle = encodeURIComponent(post.title)

  const shareLinks = {
    whatsapp: `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedURL}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedURL}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedURL}`,
    reddit: `https://www.reddit.com/submit?url=${encodedURL}&title=${encodedTitle}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedURL}&text=${encodedTitle}`,
  }

  const btn =
    'w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center ' +
    'text-gray-600 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-purple-900 ' +
    'hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300'

  return (
    <div className="container mx-auto px-4 py-12">
      {/* back */}
      <Link
        href="/?element=blogs-section"
        className="inline-flex items-center text-purple-600 dark:text-purple-400 mb-8 hover:underline text-lg font-semibold z-10"
      >
        <ArrowLeft className="h-5 w-5 mr-2" />
        Back to blogs
      </Link>

      <article className="max-w-4xl mx-auto">
        {/* header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold my-12">{post.title}</h1>

          <div className="flex flex-wrap items-center text-gray-600 dark:text-gray-400 mb-8">
            {/* author */}
            <div className="flex items-center mr-6 mb-2">
              <div className="relative h-10 w-10 rounded-full overflow-hidden mr-3">
                <Image
                  src={post.author.avatar || '/placeholder.svg'}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <span>{post.author.name}</span>
            </div>
            {/* date */}
            <div className="flex items-center mr-6 mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span>{post.date}</span>
            </div>
            {/* category */}
            <div className="flex items-center mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                />
              </svg>
              <span>{post.category}</span>
            </div>
          </div>
        </div>

        {/* cover */}
        <div className="relative w-full h-96 mb-10 rounded-xl overflow-hidden">
          <Image
            src={post.coverImage || '/placeholder.svg'}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* content */}
        <div className="prose prose-lg dark:prose-invert max-w-none">
          {post.content.map((section: any, i: number) => (
            <div key={i} className="mb-8">
              {section.type === 'paragraph' && <p>{section.content}</p>}
              {section.type === 'heading' && (
                <h2 className="text-2xl font-bold mt-10 mb-4">
                  {section.content}
                </h2>
              )}
              {section.type === 'image' && (
                <div className="my-8 relative h-80 w-full rounded-lg overflow-hidden">
                  <Image
                    src={section.url || '/placeholder.svg'}
                    alt={section.alt || ''}
                    fill
                    className="object-cover"
                  />
                  {section.caption && (
                    <p className="text-center text-sm text-gray-500 mt-2">
                      {section.caption}
                    </p>
                  )}
                </div>
              )}
              {section.type === 'code' && (
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                  <code>{section.content}</code>
                </pre>
              )}
              {section.type === 'quote' && (
                <blockquote className="border-l-4 border-purple-500 pl-4 italic">
                  {section.content}
                </blockquote>
              )}
            </div>
          ))}
        </div>

        {/* ──────────────────────── share row ──────────────────────── */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <h3 className="text-2xl font-bold mb-6">Share this article</h3>
          <div className="flex gap-4">
            <a
              href={shareLinks.whatsapp}
              target="_blank"
              rel="noopener"
              aria-label="WhatsApp"
              className={btn}
            >
              <FaWhatsapp className="h-5 w-5" />
            </a>
            <a
              href={shareLinks.facebook}
              target="_blank"
              rel="noopener"
              aria-label="Facebook"
              className={btn}
            >
              <FaFacebookF className="h-5 w-5" />
            </a>
            <a
              href={shareLinks.linkedin}
              target="_blank"
              rel="noopener"
              aria-label="LinkedIn"
              className={btn}
            >
              <FaLinkedinIn className="h-5 w-5" />
            </a>
            <a
              href={shareLinks.reddit}
              target="_blank"
              rel="noopener"
              aria-label="Reddit"
              className={btn}
            >
              <FaRedditAlien className="h-5 w-5" />
            </a>
            <a
              href={shareLinks.twitter}
              target="_blank"
              rel="noopener"
              aria-label="Twitter / X"
              className={btn}
            >
              <FaTwitter className="h-5 w-5" />
            </a>
          </div>
        </div>
      </article>
    </div>
  )
}
