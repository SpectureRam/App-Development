import React, { useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import Navbar2 from "../Pages/Navbar";
import { useEffect } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
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
    <div>
      <Navbar2 />
      <div className="font-sans text-base text-gray-900 sm:px-10">
      {isSuccessVisible && (
        <div className="bg-green-200 text-green-800 p-2 rounded-md text-right absolute right-0 top-0 mt-4 transition-opacity duration-400">
          {successMessage}
        </div>
      )}
        <div className="text-base text-gray-900">
          <div className="mx-auto w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
            <div className="mx-2 pt-12 text-center md:mx-auto md:w-2/3 md:pb-12">
              <h1 className="mb-4 text-3xl font-black sm:text-5xl xl:text-6xl">
                Contact us
              </h1>
              <div className="text-lg sm:text-xl xl:text-xl">
                <div className="text-gray-900">
                  <p className="mb-4">
                    Write your concerns and our team will contact you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto mb-20 flex w-full max-w-screen-lg flex-col overflow-hidden rounded-xl text-gray-900 md:flex-row md:border md:shadow-lg">
          <form onSubmit={sendEmail} className="mx-auto w-full max-w-xl border-gray-200 px-10 py-8 md:px-8">
            <div className="mb-4">
              <label className="text mb-2 block font-medium" htmlFor="text">
                Your Name:
              </label>
              <input
                className="w-full rounded border border-gray-300 px-3 py-2 outline-none ring-blue-500 focus:ring"
                id="text"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="text mb-2 block font-medium" htmlFor="subject">
                Email:
              </label>
              <input
                className="w-full rounded border border-gray-300 px-3 py-2 outline-none ring-blue-500 focus:ring"
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="text mb-2 block font-medium"
                htmlFor="message"
              >
                Message:
              </label>
              <textarea
                className="h-52 w-full rounded border border-gray-300 px-3 py-2 outline-none ring-blue-500 focus:ring"
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
            <div className="flex items-center">
              <div className="flex-1"></div>
              <button
                className="rounded-xl bg-yellow-400 px-4 py-3 text-center font-bold text-black hover:bg-black text-white"
                type="submit"
              >
                Send message
              </button>
            </div>
          </form>
          <div class="mt-10 bg-yellow-400 px-10 py-8 text-black-300 md:mt-0 md:ml-auto">
      <div class="">
        <p class="mb-4 font-medium border-b  pb-2">OFFICE HOURS</p>
        <p class="mb-4">Monday – Thursday: 08:00 – 16:00</p>
        <p class="mb-4">Friday: 08:00 - 15:00</p>
        <p class="mb-4">Weekend: Closed</p>
        <p class="mb-4">
          Email:
          <a href="#" class="font-semibold underline">support@essentia.com</a>
        </p>
        <p class="mb-4">
          Phone:
          <a href="#" class="font-semibold underline">+91 91111 91111</a>
        </p>
        <hr class="my-2 h-0 border-t border-r-0 border-b-0 border-l-0 border-gray-300" />
        <p class="mb-4">Org.no: 63452-2832</p>
        <p class="mb-4">VAT no: 32353</p>
      </div>
    </div>
  </div>
</div>
</div>
  );
};

export default ContactForm;
