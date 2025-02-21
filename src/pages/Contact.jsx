import Header from '../components/Header';
import React from 'react'

function Contact() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">

      <section className="bg-gradient-to-r from-yellow-500 to-blue-300 text-white py-20 text-center">
        <h1 className="text-5xl font-bold">Contact Us</h1>
        <p className="mt-4 text-lg">Get in touch with us for inquiries and assistance.</p>
      </section>


      <section className="container mx-auto py-16 px-6 grid md:grid-cols-2 gap-10">

        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Send a Message</h2>
          <form>
            <div className="mb-4">
              <label className="block font-semibold">Name</label>
              <input type="text" className="w-full p-3 border rounded-md" placeholder="Your Name" />
            </div>
            <div className="mb-4">
              <label className="block font-semibold">Email</label>
              <input type="email" className="w-full p-3 border rounded-md" placeholder="Your Email" />
            </div>
            <div className="mb-4">
              <label className="block font-semibold">Message</label>
              <textarea className="w-full p-3 border rounded-md" rows="4" placeholder="Your Message"></textarea>
            </div>
            <button className="w-full bg-yellow-500 text-white py-3 rounded-md hover:bg-yellow-600 transition-all">Send</button>
          </form>
        </div>


        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Our Contact Details</h2>
          <p><strong>Email:</strong> info@lyceumofalabang.edu</p>
          <p><strong>Phone:</strong> +63 123 456 7890</p>
          <p><strong>Address:</strong> 123 Lyceum St, Alabang, Philippines</p>
        </div>
      </section>
    </div>
  )
}

export default Contact
