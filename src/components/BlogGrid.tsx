import React from 'react';
import { Link } from 'react-router-dom';

interface BlogGridProps {
    blogPosts: {
        id: number;
        title: string;
        excerpt: string;
        category: string;
        author: string;
        tags?: string[];
        date: string;
        thumbnail: string;
        slug: string;
    }[];
  }

const BlogGrid: React.FC<BlogGridProps> = ({ blogPosts }) => {

  return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {blogPosts.map(post => (
          <article key={post.id} className="bg-purple-900 bg-opacity-20 rounded-lg overflow-hidden">
            <img src={post.thumbnail} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="mb-4 text-sm">{post.excerpt}</p>
              <div className="text-xs text-gray-400 mb-2">
                <span>{post.category}</span> | <span>{post.author}</span> | <span>{post.date}</span>
              </div>
              <Link to={`/blog/${post.slug}`} className="text-purple-400 hover:underline text-sm">Read More</Link>
            </div>
          </article>
        ))}
      </div>
  );
};

export default BlogGrid;