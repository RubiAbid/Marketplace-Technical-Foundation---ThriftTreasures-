"use client"
import { useState } from 'react'
import Image from 'next/image'
import Navbar from '@/components/Navbar'

const AboutUs = () => {
  const [contactModal, setContactModal] = useState(false)
  const [messageSent, setMessageSent] = useState(false)

  const toggleContactModal = () => setContactModal(!contactModal)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Simulate message submission logic here (you can replace this with real API call)
    setMessageSent(true) // Set messageSent to true after the form is submitted
    setTimeout(() => setContactModal(false), 2000) // Close modal after 2 seconds
  }

  return (
    <div className="font-sans bg-gray-50">
      <Navbar/>
      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-96" style={{ backgroundImage: "url('/path/to/hero-image.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container mx-auto text-center text-black py-32">
          <h1 className="text-5xl font-bold">About Us</h1>
          <p className="text-xl mt-4">Discover our story and why we are the best place for your thrift store finds!</p>
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="container mx-auto py-16 px-4 text-center">
        <h2 className="text-3xl font-semibold">Who We Are</h2>
        <p className="text-lg mt-4 max-w-3xl mx-auto text-gray-600">
          We are a curated thrift store offering a wide selection of affordable, pre-loved clothing for men and women. Our mission is to make fashion accessible, without compromising quality. We provide a personalized shopping experience and take pride in offering the highest standard of customer service.
        </p>
      </section>

      {/* Our Values Section */}
      <section 
        className="py-16 bg-cover bg-center" 
        style={{ backgroundImage: "url('/path/to/your-image.jpg')" }} // Add your image here
      >
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold text-black">What Sets Us Apart</h2>
          <div className="mt-8 max-w-3xl mx-auto">
            <div className="flex items-center mb-8">
              <Image src="/low price.webp" alt="Affordable Prices" width={50} height={50} />
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-black">Affordable Prices</h3>
                <p className="text-black">We believe that everyone should have access to stylish, high-quality clothing at affordable prices.</p>
              </div>
            </div>
            <div className="flex items-center mb-8">
              <Image src="/discount.png" alt="Unique Selection" width={50} height={50} />
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-black">Unique Selection</h3>
                <p className="text-black">Our handpicked selection of pre-loved clothing features one-of-a-kind pieces that you won&apos;t find anywhere else.</p>
              </div>
            </div>
            <div className="flex items-center">
              <Image src="/quality.jpeg" alt="Quality Assurance" width={50} height={50} />
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-black">Quality Assurance</h3>
                <p className="text-black">We ensure that every item we sell is in great condition, so you can shop with confidence knowing you&apos;re getting top-quality pre-loved pieces.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Modal Button */}
      <section className="container mx-auto text-center py-16">
        <button 
          className="bg-blue-500 text-black px-6 py-3 rounded-md shadow-md hover:bg-blue-600 transition"
          onClick={toggleContactModal}
        >
          Contact Us
        </button>
      </section>

      {/* Contact Modal */}
      {contactModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg max-w-sm w-full">
            <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
            {messageSent && (
              <div className="bg-green-200 text-green-800 p-4 mb-4 rounded-md">
                Message sent successfully!
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700">Your Name</label>
                <input type="text" id="name" className="w-full p-2 border rounded-lg mt-2" placeholder="Enter your name" required />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700">Your Email</label>
                <input type="email" id="email" className="w-full p-2 border rounded-lg mt-2" placeholder="Enter your email" required />
              </div>
              <button 
                type="submit" 
                className="w-full bg-green-500 text-black p-2 rounded-md"
              >
                Send Message
              </button>
            </form>
            <button 
              onClick={toggleContactModal}
              className="mt-4 text-red-500 hover:text-red-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AboutUs
