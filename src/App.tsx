import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Intro from './components/Intro';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import BlogPage from './components/BlogPage';
import BlogPostPage from './components/BlogPostPage';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatIDo from './components/WhatIDo/WhatIDo';
import Credits from './components/Credits';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#1e1e3a] text-white">
        <Header />
        <main className="container mx-auto px-4">
          <Routes>
            <Route path="/" element={
              <>
                <Intro />
                {/* <About /> */}
                <WhatIDo />
                <Skills />
                <Projects />
                <Testimonials />
                <Blog />
                <Contact />
              </>
            } />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/credits" element={<Credits />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;