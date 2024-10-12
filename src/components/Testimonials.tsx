import testimonials from "../assets/data/testimonials";

const Testimonials = () => {

  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold mb-8 gradient-text">Client Testimonials</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <blockquote key={index} className="bg-purple-900 bg-opacity-20 p-6 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-purple-800 hover:bg-opacity-30">
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