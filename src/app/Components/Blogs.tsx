"use client"

import { motion } from "framer-motion"
import { Calendar, User, BookOpen } from "lucide-react"
import Link from "next/link"

interface BlogPost {
  id: number
  titleKey: string
  excerptKey: string
  categoryKey: string
  dateKey: string
  contentKey: string
  headingKey: string
  content2Key: string
  imageCaptionKey: string
  quoteKey: string
  content3Key: string
}

const blogPosts: BlogPost[] = [
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

export default function Blogs({ language }: { language: any }) {
  return (
    <section className="w-full py-24 px-4" id="blogs">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 mb-6"
          >
            <BookOpen className="w-4 h-4 text-purple-500" />
            <span className="text-sm font-medium text-purple-600 dark:text-purple-400">
              {language["my_blog"] || "My Blog"}
            </span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400">
              {language["my_blog"] || "My Blog"}
            </span>
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-600 dark:text-gray-400 leading-relaxed">
            {language["blog_subtitle"] || "Thoughts, ideas and insights about web development, design and technology."}
          </p>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group"
            >
              <div className="relative bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl rounded-3xl p-8 h-full border border-gray-200/50 dark:border-gray-700/50 shadow-2xl shadow-gray-200/40 dark:shadow-black/20 overflow-hidden">
                {/* Gradient Border Effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-400 rounded-3xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500" />

                <div className="relative z-10">
                  {/* Category and Date */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-600 dark:text-purple-400 text-sm font-medium rounded-full border border-purple-500/20">
                      {language[post.categoryKey] || post.categoryKey}
                    </span>
                    <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                      <Calendar className="w-4 h-4" />
                      {language[post.dateKey] || post.dateKey}
                    </div>
                  </div>

                  {/* Title */}
                  <Link href={`/blogs/${post.id}`}>
                    <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors cursor-pointer">
                      {language[post.titleKey] || post.titleKey}
                    </h3>
                  </Link>

                  {/* Excerpt */}
                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {language[post.excerptKey] || post.excerptKey}
                  </p>
                </div>

                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-tr-3xl rounded-bl-full" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}