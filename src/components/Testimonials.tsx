import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      text: "Vivek exceeded our expectations with his exceptional communication skills, deep knowledge, prompt after-sale support, constant availability, and remarkable efficiency in creating the website for Stana Global. I highly recommended him",
      author: "Shrey Gupta",
      position: "Founder at Stana Global"
    },
    {
      text: "Vivek's attention to detail is exceptional. He was able to create a custom web solution for our business that not only improved our workflow but also enhanced our customers' experience. Highly recommended!",
      author: "Maria Rodriguez",
      position: "Small Business Owner"
    },
    {
      text: "Professional, communicative, and technically brilliant. Vivek exceeded our expectations and delivered exactly what we needed. We will definitely work with him again in the future.",
      author: "John Lee",
      position: "E-commerce Manager"
    }
  ];

  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold mb-8 gradient-text">Client Testimonials</h2>
      <div className="space-y-8">
        {testimonials.map((testimonial, index) => (
          <blockquote key={index} className="bg-purple-900 bg-opacity-20 p-6 rounded-lg">
            <p className="mb-4 italic">"{testimonial.text}"</p>
            <footer className="text-right">
              <strong>{testimonial.author}</strong>
              <p className="text-sm text-gray-400">{testimonial.position}</p>
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;