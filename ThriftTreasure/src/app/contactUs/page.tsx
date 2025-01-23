"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";

const ContactUs = () => {
  const [messageSent, setMessageSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Simulate message submission logic here (you can replace this with a real API call)
    setMessageSent(true); // Set messageSent to true after the form is submitted
    setTimeout(() => setMessageSent(false), 2000); // Automatically close the modal after 2 seconds
  };

  return (
    <div className="font-sans bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-96"
        style={{ backgroundImage: "url('/path/to/contact-hero-image.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container mx-auto text-center text-white py-32">
          <h1 className="text-5xl font-bold">Contact Us</h1>
          <p className="text-xl mt-4">
            We&apos;d love to hear from you! Feel free to reach out with any
            questions.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="container mx-auto py-16 px-4 text-center">
        <h2 className="text-3xl font-semibold">Get in Touch</h2>
        <p className="text-lg mt-4 max-w-3xl mx-auto text-gray-600">
          Have a question or feedback? Fill out the form below, and we&apos;ll
          get back to you as soon as possible.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 max-w-lg mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-3 border rounded-lg mt-2"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 border rounded-lg mt-2"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700">
              Your Message
            </label>
            <textarea
              id="message"
              className="w-full p-3 border rounded-lg mt-2"
              placeholder="Type your message here"
              rows={4}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-green-500 text-white px-6 py-3 rounded-md shadow-md hover:bg-green-600 transition"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Success Message Modal */}
      {messageSent && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg max-w-sm w-full">
            <h3 className="text-2xl font-semibold mb-4">
              Message Sent Successfully!
            </h3>
            <p className="text-lg text-gray-600">
              Thank you for reaching out. We&apos;ll get back to you soon.
            </p>
            <button
              onClick={() => setMessageSent(false)}
              className="mt-4 bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactUs;
