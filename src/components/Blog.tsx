import { Link } from 'react-router-dom';
import BlogGrid from './BlogGrid';
import blogs from '../assets/data/Blogs.tsx';

const Blog = () => {
  const featuredPosts = blogs.filter(post => post.tags?.includes('featured'));
  return (
    <section id="blog" className="py-20">
      <h2 className="text-3xl font-bold mb-8 gradient-text">Blog</h2>
      <BlogGrid blogPosts={featuredPosts}/>
      <div className="mt-8">
        <Link to="/blog" className="gradient-bg px-6 py-3 rounded-full inline-block hover:opacity-90 transition-opacity">
          View All Posts
        </Link>
      </div>
    </section>
  );
};

export default Blog;