import React, { useState } from "react";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { LuLinkedin } from "react-icons/lu";
import { contactForm } from "../assets/index";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [formStatus, setFormStatus] = useState("");
  const [visible, setVisible] = useState(true);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append(contactForm.email, email);
    formData.append(contactForm.phone, phone);
    formData.append(contactForm.message, message);

    try {
      await fetch(contactForm.url, {
        method: 'POST',
        body: formData,
        mode: 'no-cors', // Required to bypass CORS errors
      });
      setFormStatus("Message sent successfully!");
    } catch (error) {
      setFormStatus("Error Sending message, please try again later");
    }

    setEmail('');
    setPhone('');
    setMessage('');
    setTimeout(() => setVisible(false), 3000);
  };

  return (
    <section id="contact" className="py-20">
      <h2 className="text-3xl font-bold mb-8 gradient-text">Contact Me</h2>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Section - Contact Links */}
        <div className="md:w-1/2">
          <p className="mb-6">
            If you'd like to work with me or just want to say hi, feel free to
            reach out!
          </p>
          <div className="space-y-4">
            <a
              href="mailto:vivek@valeff.com"
              className="flex items-center space-x-2 text-purple-400 hover:underline"
            >
              <MdOutlineMailOutline size={20} />
              <span>vivek@valeff.com</span>
            </a>
            <a
              href="https://twitter.com/bewake24"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-purple-400 hover:underline"
            >
              <FaXTwitter size={20} />
              <span>@bewake24</span>
            </a>
            <a
              href="https://linkedin.com/in/bewake24"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-purple-400 hover:underline"
            >
              <LuLinkedin size={20} />
              <span>@bewake24</span>
            </a>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="md:w-1/2">
          <div className="p-8 bg-purple-800 bg-opacity-10 rounded-xl shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-4 relative">
              <div>
                <label htmlFor="email" className="block mb-1">
                  Email (required)
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-3 py-2 bg-purple-900 bg-opacity-20 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block mb-1">
                  Phone Number (optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3 py-2 bg-purple-900 bg-opacity-20 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-1">
                  Message (required)
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={4}
                  className="w-full px-3 py-2 bg-purple-900 bg-opacity-20 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                ></textarea>
              </div>
              <div className="flex items-center space-x-4">
                <button
                  type="submit"
                  className="px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors"
                >
                  Send Message
                </button>
                {formStatus && (
                  <p
                    className={`transition-opacity z-50 duration-1000 ${
                      visible ? "opacity-100" : "opacity-0"
                    } text-green-400`}
                  >
                    {formStatus}
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
