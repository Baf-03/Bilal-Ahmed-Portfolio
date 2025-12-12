"use client"

import { useParams, useRouter } from "next/navigation"
import { Calendar, ArrowLeft, Share2, BookOpen, Clock } from "lucide-react"
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
    readTime: "5 min read",
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
    readTime: "4 min read",
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
    readTime: "6 min read",
  },
]

export default function BlogDetail() {
  const params = useParams()
  const router = useRouter()
  const [language, setLanguage] = useState<LanguageData>(en)
  const [loading, setLoading] = useState(true)
  const [darkMode, setDarkMode] = useState(false)

  const id = parseInt(params.id as string)
  const post = blogPosts.find(p => p.id === id)

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language");
    const storedDarkMode = localStorage.getItem("darkmode");

    if (storedLanguage === "es") {
      setLanguage(es);
    } else if (storedLanguage === "de") {
      setLanguage(de);
    } else {
      setLanguage(en);
    }

    if (storedDarkMode) {
      setDarkMode(JSON.parse(storedDarkMode));
    }

    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-gray-600 dark:text-gray-400">Loading...</p>
        </div>
      </div>
    )
  }

  if (!post) {
    return (
      <div className={`min-h-screen flex items-center justify-center px-4 ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">{language["blog_not_found"] || "Blog Post Not Found"}</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">{language["blog_not_found_message"] || "The blog post you're looking for doesn't exist."}</p>
          <Link href="/" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-teal-400 text-white font-semibold rounded-full hover:scale-105 transition-transform">
            <ArrowLeft className="w-4 h-4" />
            {language["back_home"] || "Back to Home"}
          </Link>
        </div>
      </div>
    )
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: language[post.titleKey],
          url: window.location.href
        });
      } catch (err) {
        console.log('Share cancelled');
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gradient-to-br from-gray-50 to-gray-100'}`}>
      <div className="max-w-4xl mx-auto px-4 py-12 md:py-24">
        {/* Back Button */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            {language["back_to_blogs"] || "Back to blogs"}
          </Link>
        </div>

        {/* Article */}
        <article className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-6 md:p-10 lg:p-12 shadow-xl shadow-gray-200/40 dark:shadow-black/20 border border-gray-200/50 dark:border-gray-700/50">
          {/* Category, Date, and Read Time */}
          <div className="flex flex-wrap items-center gap-3 md:gap-4 mb-6">
            <span className="px-3 md:px-4 py-1.5 md:py-2 bg-gradient-to-r from-blue-500/10 to-teal-500/10 text-blue-600 dark:text-blue-400 text-xs md:text-sm font-medium rounded-full border border-blue-500/20">
              {language[post.categoryKey] || post.categoryKey}
            </span>
            <div className="flex items-center gap-2 text-xs md:text-sm text-gray-500 dark:text-gray-400">
              <Calendar className="w-4 h-4" />
              {language[post.dateKey] || post.dateKey}
            </div>
            <div className="flex items-center gap-2 text-xs md:text-sm text-gray-500 dark:text-gray-400">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </div>
          </div>

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
            {language[post.titleKey] || post.titleKey}
          </h1>

          {/* Excerpt */}
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed font-medium">
            {language[post.excerptKey] || post.excerptKey}
          </p>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent mb-8"></div>

          {/* Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8 text-base md:text-lg">
              {language[post.contentKey] || post.contentKey}
            </p>

            <h2 className="text-xl md:text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              {language[post.headingKey] || post.headingKey}
            </h2>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8 text-base md:text-lg">
              {language[post.content2Key] || post.content2Key}
            </p>

            {/* Image Placeholder */}
            <div className="bg-gradient-to-r from-blue-500/10 to-teal-500/10 rounded-2xl p-6 md:p-8 mb-8 border border-blue-500/20">
              <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-teal-500/20 rounded-xl mb-4 flex items-center justify-center">
                <BookOpen className="w-12 h-12 text-blue-500/50" />
              </div>
              <p className="text-center text-gray-600 dark:text-gray-400 italic text-sm md:text-base">
                {language[post.imageCaptionKey] || post.imageCaptionKey}
              </p>
            </div>

            {/* Quote */}
            <blockquote className="border-l-4 border-blue-500 pl-4 md:pl-6 italic text-gray-700 dark:text-gray-300 mb-8 py-2 bg-blue-50/50 dark:bg-blue-900/20 rounded-r-lg">
              <p className="text-base md:text-lg">"{language[post.quoteKey] || post.quoteKey}"</p>
            </blockquote>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base md:text-lg">
              {language[post.content3Key] || post.content3Key}
            </p>
          </div>

          {/* Share Section */}
          <div className="mt-10 md:mt-12 pt-6 md:pt-8 border-t border-gray-200/50 dark:border-gray-700/50">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {language["enjoyed_article"] || "Enjoyed this article? Share it with others!"}
              </p>
              <button
                onClick={handleShare}
                className="inline-flex items-center gap-2 px-5 md:px-6 py-2.5 md:py-3 bg-gradient-to-r from-blue-500 to-teal-400 text-white font-semibold rounded-full shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105 active:scale-95 text-sm md:text-base"
              >
                <Share2 className="w-4 h-4" />
                {language["share_article"] || "Share Article"}
              </button>
            </div>
          </div>
        </article>

        {/* More Articles */}
        <div className="mt-12">
          <h3 className="text-xl md:text-2xl font-bold mb-6 text-gray-900 dark:text-white">
            {language["more_articles"] || "More Articles"}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {blogPosts
              .filter(p => p.id !== post.id)
              .slice(0, 2)
              .map(relatedPost => (
                <Link
                  key={relatedPost.id}
                  href={`/blogs/${relatedPost.id}`}
                  className="group p-4 md:p-6 bg-white/80 dark:bg-gray-800/80 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 hover:border-blue-500/50 transition-all hover:-translate-y-1 shadow-md"
                >
                  <span className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                    {language[relatedPost.categoryKey] || relatedPost.categoryKey}
                  </span>
                  <h4 className="text-base md:text-lg font-semibold mt-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {language[relatedPost.titleKey] || relatedPost.titleKey}
                  </h4>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}