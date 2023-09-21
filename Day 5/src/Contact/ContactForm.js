import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isSuccessVisible, setIsSuccessVisible] = useState(false);

  useEffect(() => {
    if (isSuccessVisible) {
      const timeout = setTimeout(() => {
        setIsSuccessVisible(false);
        setSuccessMessage('');
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [isSuccessVisible]);

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm('service_3eevvvm', 'template_hqow6fn', e.target, 'ub-T53FxKv8542maZ')
      .then(
        (result) => {
          console.log('Email sent successfully:', result);
          setSuccessMessage('Message sent successfully!');
          setIsSuccessVisible(true);
        },
        (error) => {
          console.error('Error sending email:', error);
        }
      );
  }

  return (
    <div className="max-w-md mx-auto mt-6 relative">
      {isSuccessVisible && (
        <div className="bg-green-200 text-green-800 p-2 rounded-md text-right absolute right-0 top-0 mt-4 transition-opacity duration-400">
          {successMessage}
        </div>
      )}
      <form onSubmit={sendEmail}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name:
          </label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email:
          </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
            Message:
          </label>
          <textarea
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
