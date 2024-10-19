import { useState } from 'react';
import { newsLetterURL, newsLetterFieldEmailId } from '../assets/index'

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscriptionStatus, setSubscriptionStatus] = useState('');
  const [visible, setVisible] = useState(true);

  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append(newsLetterFieldEmailId, email); // Use the correct field ID
    try {
      await fetch(newsLetterURL, {
        method: 'POST',
        body: formData,
        mode: 'no-cors', // Required to bypass CORS errors
      });
      setSubscriptionStatus('Thank you for subscribing!');
    } catch (error) {
      setSubscriptionStatus('Subscription failed. Please try again.');
    }

    setEmail('');
    setTimeout(() => setVisible(false), 3000);
  };

  return (
    <footer className="bg-purple-900 bg-opacity-20 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <a href="/credits" className="text-md text-purple-400 ease-in-out transform hover:scale-110">
            Credits
          </a>
          <p>&copy; 2024 Vivek Kumar. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <form onSubmit={handleSubscribe} className="flex space-x-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="px-3 py-2 bg-purple-800 bg-opacity-50 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
              >
                Subscribe
              </button>
            </form>

            {subscriptionStatus && (
              <p className={`transition-opacity absolute z-50 duration-1000 ${
                visible ? 'opacity-100' : 'opacity-0'
              } text-green-400`}>{subscriptionStatus}</p>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
