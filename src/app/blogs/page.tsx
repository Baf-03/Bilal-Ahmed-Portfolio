import { getBlogPosts } from './blog.data'
import BlogList from './BlogList'

export default async function BlogsPage() {
  const blogs = await getBlogPosts()

  return <BlogList blogs={blogs} />
}
