"use client"

import { useParams, useRouter } from "next/navigation"
import { Calendar, ArrowLeft, Share2, BookOpen, Clock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import en from "../../locales/en.json"
import es from "../../locales/es.json"
import de from "../../locales/de.json"
import { motion } from "framer-motion"

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
    image: "/blogs/blog1.png",
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
    image: "/blogs/blog2.png",
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
    image: "/blogs/blog3.png",
  },
  {
    id: 4,
    titleKey: "blog_4_title",
    excerptKey: "blog_4_excerpt",
    categoryKey: "blog_4_category",
    dateKey: "blog_4_date",
    contentKey: "blog_4_content_1",
    headingKey: "blog_4_heading_1",
    content2Key: "blog_4_content_2",
    imageCaptionKey: "blog_4_image_caption",
    quoteKey: "blog_4_quote",
    content3Key: "blog_4_content_3",
    readTime: "8 min read",
    image: "/blogs/blog4.png",
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
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-[#1c1e21]">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-gray-600 dark:text-gray-400">Loading...</p>
        </div>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 bg-gray-50 dark:bg-[#1c1e21]">
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
    <div className="min-h-screen pt-24 pb-12 md:pt-32 md:pb-24 bg-[#e7e5e4] dark:bg-[#1c1e21]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto px-4"
      >
        {/* Back Button */}
        <div className="mb-8">
          <Link
            href="/#blogs"
            className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500/30 transition-all duration-300 font-medium text-sm md:text-base"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            {language["back_to_blogs"] || "Back to blogs"}
          </Link>
        </div>

        {/* Article Container */}
        <article className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-[2rem] p-6 md:p-10 lg:p-14 shadow-2xl border border-gray-200/50 dark:border-gray-800/50 overflow-hidden">
          {/* Subtle Glow Effect */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-teal-400"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl -z-10 -translate-x-1/2 translate-y-1/2"></div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            {/* Meta tags */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <span className="px-4 py-1.5 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs md:text-sm font-semibold tracking-wide rounded-full uppercase">
                {language[post.categoryKey] || post.categoryKey}
              </span>
              <div className="flex items-center gap-2 text-xs md:text-sm text-gray-500 dark:text-gray-400 font-medium">
                <Calendar className="w-4 h-4" />
                {language[post.dateKey] || post.dateKey}
              </div>
              <div className="flex items-center gap-2 text-xs md:text-sm text-gray-500 dark:text-gray-400 font-medium">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </div>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 text-gray-900 dark:text-white leading-tight tracking-tight text-left">
              {language[post.titleKey] || post.titleKey}
            </h1>

            {/* Excerpt */}
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed font-medium text-left border-l-4 border-blue-500 pl-4 md:pl-6 py-1">
              {language[post.excerptKey] || post.excerptKey}
            </p>

            {/* Main Content */}
            <div className="space-y-8 text-left">
              <p className="text-gray-700 dark:text-gray-300 leading-loose text-base md:text-lg">
                {language[post.contentKey] || post.contentKey}
              </p>

              {/* HD Generated Image */}
              <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden group shadow-2xl">
                <Image src={post.image} alt={language[post.titleKey] || post.titleKey} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-end p-6 md:p-10 text-center">
                  <p className="text-white/90 font-medium text-sm md:text-base max-w-2xl drop-shadow-md">
                    {language[post.imageCaptionKey] || post.imageCaptionKey}
                  </p>
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
                {language[post.headingKey] || post.headingKey}
              </h2>

              <p className="text-gray-700 dark:text-gray-300 leading-loose text-base md:text-lg">
                {language[post.content2Key] || post.content2Key}
              </p>

              {/* Styled Blockquote */}
              <blockquote className="my-10 relative">
                <div className="absolute top-0 left-0 w-8 h-8 -mt-2 -ml-2 text-blue-500/20 dark:text-blue-400/20 scale-[2]">
                  "
                </div>
                <p className="relative z-10 text-xl md:text-2xl font-serif italic text-gray-800 dark:text-gray-200 leading-relaxed px-6 md:px-10 py-6 bg-gradient-to-r from-blue-50 to-transparent dark:from-blue-900/10 dark:to-transparent rounded-r-2xl border-l-4 border-blue-500">
                  {language[post.quoteKey] || post.quoteKey}
                </p>
              </blockquote>

              <p className="text-gray-700 dark:text-gray-300 leading-loose text-base md:text-lg">
                {language[post.content3Key] || post.content3Key}
              </p>
            </div>
          </motion.div>

          {/* Share Section & Author bio */}
          <div className="mt-16 pt-8 border-t border-gray-100 dark:border-gray-800">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">

              {/* Author Bio */}
              <div className="flex items-center gap-4 text-left">
                <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-blue-500 to-teal-400 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  BA
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white text-lg">Bilal Ahmed</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400 max-w-[250px]">
                    {post.categoryKey.includes("AI") || post.categoryKey.includes("Artificial")
                      ? (language["blog_author_bio_ai"] || "Tech Enthusiast and AI Strategist")
                      : (language["blog_author_bio_fullstack"] || "Full-Stack Developer")
                    }
                  </p>
                </div>
              </div>

              {/* Share Button */}
              <button
                onClick={handleShare}
                className="group relative inline-flex items-center gap-3 px-8 py-3.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Share2 className="w-4 h-4 relative z-10" />
                <span className="relative z-10">{language["share_article"] || "Share Article"}</span>
              </button>
            </div>
          </div>
        </article>

        {/* More Articles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16"
        >
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              {language["more_articles"] || "More Articles"}
            </h3>
            <Link href="/#blogs" className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium">
              View all
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[...blogPosts].reverse()
              .filter(p => p.id !== post.id)
              .slice(0, 2)
              .map(relatedPost => (
                <Link
                  key={relatedPost.id}
                  href={`/blogs/${relatedPost.id}`}
                  className="group block p-0 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 hover:bg-white dark:hover:bg-gray-800 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10 overflow-hidden"
                >
                  <div className="relative w-full h-40 overflow-hidden">
                    <Image src={relatedPost.image} alt={relatedPost.titleKey} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs font-semibold rounded-full mb-3">
                      {language[relatedPost.categoryKey] || relatedPost.categoryKey}
                    </span>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug">
                      {language[relatedPost.titleKey] || relatedPost.titleKey}
                    </h4>
                  </div>
                </Link>
              ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}