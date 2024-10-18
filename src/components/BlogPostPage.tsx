import React from 'react';
import { useParams, Link } from 'react-router-dom';
import blogs from "../assets/data/Blogs.tsx"

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogs.find(post => post.slug === slug);

  if (!post?.content) {
    return <div>Blog post not found</div>;
  }

  return (
    <div className="py-20">
      <Link to="/blog" className="text-purple-400 hover:underline mb-4 inline-block">&larr; Back to Blog</Link>
      <article className="bg-purple-900 bg-opacity-20 rounded-lg overflow-hidden">
        <img src={post.thumbnail} alt={post.title} className="w-full h-64 object-cover" />
        <div className="p-8">
          <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
          <div className="text-sm text-gray-400 mb-4">
            <span>{post.category}</span> | <span>{post.author}</span> | <span>{post.date}</span>
          </div>
          <div>{post.content}</div>
        </div>
      </article>
    </div>
  );
};

export default BlogPostPage;