import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  tags?: string[];
  date: string;
  thumbnail: string;
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: '5 Tips for Efficient Full-Stack Development',
    excerpt: 'Discover some of the best practices and tools to streamline your development process.',
    category: 'Development',
    author: 'Vivek Kumar',
    // tags: [],
    date: '2024-03-15',
    thumbnail: 'https://images.unsplash.com/photo-1721332149267-ef9b10eaacd9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D',
    slug: '5-tips-for-efficient-full-stack-development'
  },
  {
    id: 2,
    title: 'The Future of Web Development: What to Expect in 2025',
    excerpt: 'Explore the upcoming trends and technologies that will shape the web development landscape.',
    category: 'Technology',
    author: 'Vivek Kumar',
    tags: ['web development', 'featured'],
    date: '2024-03-10',
    thumbnail: 'https://images.unsplash.com/photo-1726954531046-d033ef59ff0f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQxfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D',
    slug: 'future-of-web-development-2025'
  },
  {
    id: 3,
    title: 'Mastering React Hooks: A Comprehensive Guide',
    excerpt: 'Learn how to leverage the power of React Hooks to write more efficient and maintainable code.',
    category: 'React',
    author: 'John Doe',
    // tags: [],
    date: '2024-03-05',
    thumbnail: 'https://plus.unsplash.com/premium_photo-1724145883752-a31483e8eed0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDYyfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D',
    slug: 'mastering-react-hooks-comprehensive-guide'
  },
  {
    id: 4,
    title: 'Mastering React Hooks: A Comprehensive Guide',
    excerpt: 'Learn how to leverage the power of React Hooks to write more efficient and maintainable code.',
    category: 'React',
    author: 'John Doe',
    date: '2024-03-05',
    // tags: [],
    thumbnail: 'https://images.unsplash.com/photo-1721332149267-ef9b10eaacd9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D',
    slug: 'mastering-react-hooks-comprehensive-guide'
  },
  // Add more blog posts as needed
];

const BlogPage: React.FC = () => {
  const [categoryFilter, setCategoryFilter] = useState('');
  const [authorFilter, setAuthorFilter] = useState('');
  const [dateFilter, setDateFilter] = useState('');

  const filteredPosts = blogPosts.filter(post => 
    (!categoryFilter || post.category === categoryFilter) &&
    (!authorFilter || post.author === authorFilter) &&
    (!dateFilter || post.date.includes(dateFilter))
  );

  const categories = Array.from(new Set(blogPosts.map(post => post.category)));
  const authors = Array.from(new Set(blogPosts.map(post => post.author)));

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