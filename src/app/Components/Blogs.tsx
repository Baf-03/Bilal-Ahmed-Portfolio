"use client"

import { Calendar, BookOpen, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

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
  image: string
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
    image: "/blogs/blog4.png",
  },
]

export default function Blogs({ language }: { language: any }) {
  return (
    <section className="w-full py-12 md:py-24 px-4" id="blogs">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 md:px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-teal-500/10 border border-blue-500/20 mb-4 md:mb-6">
            <BookOpen className="w-4 h-4 text-blue-500" />
            <span className="text-xs md:text-sm font-medium text-blue-600 dark:text-blue-400">
              {language["my_blog"] || "My Blog"}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
              {language["blog_title"] || "Latest Insights"}
            </span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl max-w-2xl mx-auto text-gray-600 dark:text-gray-400 leading-relaxed">
            {language["blog_subtitle"] || "Thoughts, ideas and insights about web development, design and technology."}
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mt-16">
          {[...blogPosts].reverse()
            .map((post) => (
              <article
                key={post.id}
                className="group relative"
              >
                {/* Gradient Border Effect on hover */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-teal-400 rounded-3xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500 -z-10" />

                <div className="relative bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl rounded-3xl p-6 md:p-8 h-full border border-gray-200/50 dark:border-gray-700/50 shadow-xl shadow-gray-200/40 dark:shadow-black/20 transition-transform duration-300 group-hover:-translate-y-2">
                  {/* Decorative Corner */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-teal-500/10 rounded-tr-3xl rounded-bl-full" />

                  {/* Image & Category */}
                  <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-6 group-hover:shadow-lg transition-transform duration-500">
                    <Image src={post.image} alt={post.titleKey} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between z-10">
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-md text-white border border-white/30 text-xs md:text-sm font-medium rounded-full">
                        {language[post.categoryKey] || post.categoryKey}
                      </span>
                      <div className="flex items-center gap-1 text-xs md:text-sm text-white/90 font-medium">
                        <Calendar className="w-3 h-3 md:w-4 md:h-4" />
                        {language[post.dateKey] || post.dateKey}
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <Link href={`/blogs/${post.id}`} className="block relative z-10">
                    <h3 className="text-lg md:text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors cursor-pointer">
                      {language[post.titleKey] || post.titleKey}
                    </h3>
                  </Link>

                  {/* Excerpt */}
                  <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-6 leading-relaxed relative z-10 line-clamp-3">
                    {language[post.excerptKey] || post.excerptKey}
                  </p>

                  {/* Read More Link */}
                  <Link
                    href={`/blogs/${post.id}`}
                    className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors relative z-10 group/link"
                  >
                    <span>{language["read_more"] || "Read More"}</span>
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
        </div>
      </div>
    </section>
  )
}