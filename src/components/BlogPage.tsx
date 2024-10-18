import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import blogs from '../assets/data/Blogs.tsx';

const BlogPage: React.FC = () => {
  const [categoryFilter, setCategoryFilter] = useState('');
  const [authorFilter, setAuthorFilter] = useState('');
  const [dateFilter, setDateFilter] = useState('');

  const filteredPosts = blogs.filter(post => 
    (!categoryFilter || post.category === categoryFilter) &&
    (!authorFilter || post.author === authorFilter) &&
    (!dateFilter || post.date.includes(dateFilter))
  );

  const categories = Array.from(new Set(blogs.map(post => post.category)));
  const authors = Array.from(new Set(blogs.map(post => post.author)));

  return (
    <div className="py-20">
      <h1 className="text-4xl font-bold mb-8 gradient-text">Blog</h1>
      
      <div className="mb-8 flex flex-wrap gap-4">
        <select 
          className="bg-purple-900 bg-opacity-20 p-2 rounded"
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          <option value="">All Categories</option>
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>

        <select 
          className="bg-purple-900 bg-opacity-20 p-2 rounded"
          value={authorFilter}
          onChange={(e) => setAuthorFilter(e.target.value)}
        >
          <option value="">All Authors</option>
          {authors.map(author => (
            <option key={author} value={author}>{author}</option>
          ))}
        </select>

        <input 
          type="date"
          className="bg-purple-900 bg-opacity-20 p-2 rounded"
          value={dateFilter}
          onChange={(e) => setDateFilter(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredPosts.map(post => (
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
    </div>
  );
};

export default BlogPage;