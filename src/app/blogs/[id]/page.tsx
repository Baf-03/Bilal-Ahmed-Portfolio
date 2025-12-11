"use client"

import { useParams, useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Calendar, ArrowLeft, Share2, BookOpen } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import en from "../../locales/en.json"
import es from "../../locales/es.json"
import de from "../../locales/de.json"

type LanguageData = {
  [key: string]: string;
};

const blogPosts = [
  {
    id: 1,
    titleKey: "blog_1_title",
    excerptKey: "blog_1_excerpt",
    categoryKey: "blog_1_category",
    dateKey: "blog_1_date",
    contentKey: "blog_1_content_1",
    headingKey: "blog_1_heading_1",
    content2Key: "blog_1_content_2",
    imageCaptionKey: "blog_1_image_caption",
    quoteKey: "blog_1_quote",
    content3Key: "blog_1_content_3",
  },
  {
    id: 2,
    titleKey: "blog_2_title",
    excerptKey: "blog_2_excerpt",
    categoryKey: "blog_2_category",
    dateKey: "blog_2_date",
    contentKey: "blog_2_content_1",
    headingKey: "blog_2_heading_1",
    content2Key: "blog_2_content_2",
    imageCaptionKey: "blog_2_image_caption",
    quoteKey: "blog_2_quote",
    content3Key: "blog_2_content_3",
  },
  {
    id: 3,
    titleKey: "blog_3_title",
    excerptKey: "blog_3_excerpt",
    categoryKey: "blog_3_category",
    dateKey: "blog_3_date",
    contentKey: "blog_3_content_1",
    headingKey: "blog_3_heading_1",
    content2Key: "blog_3_content_2",
    imageCaptionKey: "blog_3_image_caption",
    quoteKey: "blog_3_quote",
    content3Key: "blog_3_content_3",
  },
]

export default function BlogDetail() {
  const params = useParams()
  const router = useRouter()
  const [language, setLanguage] = useState<LanguageData>(en)
  const [loading, setLoading] = useState(true)

  const id = parseInt(params.id as string)
  const post = blogPosts.find(p => p.id === id)

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language");

    if (storedLanguage === "es") {
      setLanguage(es);
    } else if (storedLanguage === "de") {
      setLanguage(de);
    } else {
      setLanguage(en);
    }

    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="loader"></div>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">{language["blog_not_found"] || "Blog Post Not Found"}</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">{language["blog_not_found_message"] || "The blog post you're looking for doesn't exist or has been moved to another location."}</p>
          <Link href="/" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-400 text-white font-semibold rounded-full hover:scale-105 transition-transform">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto px-4 py-24">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {language["back_to_blogs"] || "Back to blogs"}
          </Link>
        </motion.div>

        {/* Article Header */}
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl shadow-gray-200/40 dark:shadow-black/20"
        >
          {/* Category and Date */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="px-4 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-600 dark:text-purple-400 text-sm font-medium rounded-full border border-purple-500/20">
              {language[post.categoryKey] || post.categoryKey}
            </span>
            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <Calendar className="w-4 h-4" />
              {language[post.dateKey] || post.dateKey}
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400">
            {language[post.titleKey] || post.titleKey}
          </h1>

          {/* Excerpt */}
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
            {language[post.excerptKey] || post.excerptKey}
          </p>

          {/* Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
              {language[post.contentKey] || post.contentKey}
            </p>

            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              {language[post.headingKey] || post.headingKey}
            </h2>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
              {language[post.content2Key] || post.content2Key}
            </p>

            {/* Placeholder for image */}
            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl p-8 mb-8 border border-purple-500/20">
              <p className="text-center text-gray-600 dark:text-gray-400 italic">
                {language[post.imageCaptionKey] || post.imageCaptionKey}
              </p>
            </div>

            <blockquote className="border-l-4 border-purple-500 pl-6 italic text-gray-700 dark:text-gray-300 mb-8">
              "{language[post.quoteKey] || post.quoteKey}"
            </blockquote>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {language[post.content3Key] || post.content3Key}
            </p>
          </div>

          {/* Share Button */}
          <div className="mt-12 pt-8 border-t border-gray-200/50 dark:border-gray-700/50">
            <button
              onClick={() => navigator.share?.({ title: language[post.titleKey], url: window.location.href })}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-400 text-white font-semibold rounded-full shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/40 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <Share2 className="w-4 h-4" />
              Share this article
            </button>
          </div>
        </motion.article>
      </div>
    </div>
  )
}