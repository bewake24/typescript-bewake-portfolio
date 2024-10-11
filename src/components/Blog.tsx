import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  return (
    <section id="blog" className="py-20">
      <h2 className="text-3xl font-bold mb-8 gradient-text">Blog</h2>
      <article className="bg-purple-900 bg-opacity-20 p-6 rounded-lg">
        <h3 className="text-2xl font-semibold mb-4">Latest Post: 5 Tips for Efficient Full-Stack Development</h3>
        <p className="mb-4">Discover some of the best practices and tools to streamline your development process.</p>
        <Link to="/blog" className="text-purple-400 hover:underline">Read More</Link>
      </article>
      <div className="mt-8">
        <Link to="/blog" className="gradient-bg px-6 py-3 rounded-full inline-block hover:opacity-90 transition-opacity">
          View All Posts
        </Link>
      </div>
    </section>
  );
};

export default Blog;