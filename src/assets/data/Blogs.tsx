import { ReactNode } from "react";
interface Blogs {
    id: number;
    title: string;
    excerpt: string;
    category: string;
    author: string;
    tags?: string[];
    date: string;
    thumbnail: string;
    slug: string;
    content?: ReactNode;
  }

  const blogs: Blogs[] = [

    {
      id: 2,
      title: "The Future of Frontend Development: Trends to Watch",
      excerpt: "Stay ahead of the curve with the latest frontend development trends and technologies.",
      category: "Development",
      author: "Rahul Sharma",
      tags: ["frontend", "trends"],
      date: "2024-03-10",
      thumbnail: "https://images.unsplash.com/photo-1679429651111-5e5f6f5f5f5f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D",
      slug: "the-future-of-frontend-development-trends-to-watch",
      content: <>
      <p className="mb-4 text-slate-300 text-xl">Full-stack development can be challenging, but with the right approach, you can significantly improve your efficiency. Here are five tips to help you become a more effective full-stack developer:</p>
      
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
    </>
    },
    {
        id: 3,
        title: "Building a RESTful API with Node.js and Express",
        excerpt: "Learn how to build a robust and scalable RESTful API using Node.js and Express.",
        category: "Development",
        author: "Saurabh Singh",
        tags: ["nodejs", "express"],
        date: "2024-03-05",
        thumbnail: "https://images.unsplash.com/photo-1679429651111-5e5f6f5f5f5f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D",
        slug: "building-a-restful-api-with-nodejs-and-express"
      },
      {
        id: 4,
        title: "The Benefits of Using a Static Site Generator",
        excerpt: "Discover the advantages of using a static site generator for your next project.",
        category: "Development",
        author: "Vivek Kumar",
        tags: ["static-site-generator"],
        date: "2024-03-01",
        thumbnail: "https://images.unsplash.com/photo-1721332149267-ef9b10eaacd9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D",
        slug: "the-benefits-of-using-a-static-site-generator"
      },
      {
        id: 5,
        title: "A Beginner's Guide to Machine Learning with Python",
        excerpt: "Get started with machine learning using Python and popular libraries like scikit-learn and TensorFlow.",
        category: "Machine Learning",
        author: "Rahul Sharma",
        tags: ["machine-learning", "python"],
        date: "2024-02-25",
        thumbnail: "https://images.unsplash.com/photo-1679429651111-5e5f6f5f5f5f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D",
        slug: "a-beginners-guide-to-machine-learning-with-python"
      },
      {
        id: 6,
        title: "Building a Chatbot with Node.js and Dialogflow",
        excerpt: "Learn how to build a conversational chatbot using Node.js and Dialogflow.",
        category: "Development",
        author: "Saurabh Singh",
        tags: ["nodejs", "dialogflow"],
        date: "2024-02-20",
        thumbnail: "https://images.unsplash.com/photo-1679429651111-5e5f6f5f5f5f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D",
        slug: "building-a-chatbot-with-nodejs-and-dialogflow"
      },
      {
        id: 7,
        title: "The Benefits of Using a Cloud-Based IDE",
        excerpt: "Discover the advantages of using a cloud-based IDE for your development needs.",
        category: "Development",
        author: "Vivek Kumar",
        tags: ["cloud-based-ide"],
        date: "2024-02-15",
        thumbnail: "https://images.unsplash.com/photo-1721332149267-ef9b10eaacd9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D",
        slug: "the-benefits-of-using-a-cloud-based-ide"
      },
      {
        id: 8,
        title: "A Beginner's Guide to Web Development with HTML, CSS, and JavaScript",
        excerpt: "Get started with web development using HTML, CSS, and JavaScript.",
        category: "Development",
        author: "Rahul Sharma",
        tags: ["web-development", "html", "css", "javascript"],
        date: "2024-02-10",
        thumbnail: "https://images.unsplash.com/photo-1679429651111-5e5f6f5f5f5f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D",
        slug: "a-beginners-guide-to-web-development-with-html-css-and-javascript"
      },
      {
        id: 9,
        title: "Building a RESTful API with Django and Django Rest Framework",
        excerpt: "Learn how to build a robust and scalable RESTful API using Django and Django Rest Framework.",
        category: "Development",
        author: "Saurabh Singh",
        tags: ["django", "django-rest-framework"],
        date: "2024-02-05",
        thumbnail: "https://images.unsplash.com/photo-1679429651111-5e5f6f5f5f5f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D",
        slug: "building-a-restful-api-with-django-and-django-rest-framework"
      },
      {
        id: 10,
        title: '5 Tips for Efficient Full-Stack Development',
        excerpt: 'Discover some of the best practices and tools to streamline your development process.',
        category: 'Development',
        author: 'Vivek Kumar',
        tags: ["featured"],
        date: '2024-03-15',
        thumbnail: 'https://images.unsplash.com/photo-1721332149267-ef9b10eaacd9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D',
        slug: '5-tips-for-efficient-full-stack-development'
      },
      {
        id: 11,
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
        id: 12,
        title: 'Mastering React Hooks: A Comprehensive Guide',
        excerpt: 'Learn how to leverage the power of React Hooks to write more efficient and maintainable code.',
        category: 'React',
        author: 'John Doe',
        tags: ['featured', 'react'],
        date: '2024-03-05',
        thumbnail: 'https://plus.unsplash.com/premium_photo-1724145883752-a31483e8eed0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDYyfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D',
        slug: 'mastering-react-hooks-comprehensive-guide'
      },

    // Add more blog posts as needed
  ];

export default blogs;