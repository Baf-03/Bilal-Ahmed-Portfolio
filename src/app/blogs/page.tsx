import Link from "next/link"
import Image from "next/image"
import { getBlogPosts } from "./blog.data"
import { RiTextDirectionL } from "react-icons/ri"
import { ExternalLink } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default async function BlogsPage() {
  const blogs = await getBlogPosts()

  return (
    <div className="container mx-auto px-4 py-12 ">
       <motion.h1
        className="text-center text-3xl sm:text-4xl md:text-5xl font-bold mb-3 pb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        My Blog
      </motion.h1>
      <p className="text-gray-600 mb-12 text-center max-w-2xl mx-auto">
        Thoughts ideas and insights about web development design and technology.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-700">
        {blogs.map((blog) => (
          <Link href={`/blogs/${blog.slug}`} key={blog.id} className="group">
            <article className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:translate-y-[-4px]">
              <div className="relative h-56 w-full">
                <Image src={blog.coverImage || "/placeholder.svg"} alt={blog.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="inline-block bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs px-3 py-1 rounded-full">
                    {blog.category}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400 text-sm ml-auto">{blog.date}</span>
                </div>
                <h2 className="text-xl font-bold mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                  {blog.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{blog.excerpt}</p>
                <div className="flex items-center">
                  <div className="relative h-8 w-8 rounded-full overflow-hidden mr-3">
                    <Image
                      src={blog.author.avatar || "/placeholder.svg"}
                      alt={blog.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="text-sm text-gray-700 dark:text-gray-300">{blog.author.name}</span>
                  <div className="ml-auto text-purple-600 dark:text-purple-400 font-medium text-sm group-hover:translate-x-1 transition-transform duration-300 flex gap-x-2 items-center">
                   <ExternalLink/> Read more
                  </div>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  )
}

