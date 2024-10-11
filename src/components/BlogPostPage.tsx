import React from 'react';
import { useParams, Link } from 'react-router-dom';

interface BlogPost {
  id: number;
  title: string;
  content: string;
  category: string;
  author: string;
  date: string;
  thumbnail: string;
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: '5 Tips for Efficient Full-Stack Development',
    content: `
      <p>Full-stack development can be challenging, but with the right approach, you can significantly improve your efficiency. Here are five tips to help you become a more effective full-stack developer:</p>
      
      <h2>1. Master Your Development Environment</h2>
      <p>Invest time in setting up a productive development environment. This includes choosing the right IDE, configuring useful extensions, and setting up shortcuts that speed up your workflow.</p>
      
      <h2>2. Embrace Version Control</h2>
      <p>Use Git effectively to manage your codebase. Learn advanced Git features like branching strategies, rebasing, and resolving merge conflicts efficiently.</p>
      
      <h2>3. Automate Repetitive Tasks</h2>
      <p>Identify repetitive tasks in your development process and automate them. This could include setting up build processes, running tests, or deploying your application.</p>
      
      <h2>4. Stay Updated with Latest Technologies</h2>
      <p>Keep yourself updated with the latest trends and technologies in both frontend and backend development. This will help you make informed decisions about which tools to use for your projects.</p>
      
      <h2>5. Practice Continuous Learning</h2>
      <p>Set aside time regularly to learn new skills or improve existing ones. This could involve reading tech blogs, taking online courses, or contributing to open-source projects.</p>
      
      <p>By implementing these tips, you'll be well on your way to becoming a more efficient and effective full-stack developer.</p>
    `,
    category: 'Development',
    author: 'Vivek Kumar',
    date: '2024-03-15',
    thumbnail: 'https://images.unsplash.com/photo-1721332149267-ef9b10eaacd9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D',
    slug: '5-tips-for-efficient-full-stack-development'
  },
  // Add more blog posts with full content here
];

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(post => post.slug === slug);

  if (!post) {
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
          <div className="prose prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </article>
    </div>
  );
};

export default BlogPostPage;