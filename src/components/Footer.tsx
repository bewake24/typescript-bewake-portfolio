import React, { useState } from 'react';
import {Link }from 'react-router-dom';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscriptionStatus, setSubscriptionStatus] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the email to a server for newsletter subscription
    console.log('Subscribed email:', email);
    setSubscriptionStatus('Thank you for subscribing!');
    setEmail('');
  };

  return (
    <footer className="bg-purple-900 bg-opacity-20 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <Link to="/credits" className=" text-md text-purple-400 ease-in-out transform hover:scale-110" >Credits</Link>
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
              <button type="submit" className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors">
                Subscribe
              </button>
            </form>
            {subscriptionStatus && (
              <p className="mt-2 text-sm text-green-400">{subscriptionStatus}</p>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;




// {/* <Link to="/credits" className=" text-md text-purple-400 ease-in-out transform hover:scale-110" >Credits</Link> */}