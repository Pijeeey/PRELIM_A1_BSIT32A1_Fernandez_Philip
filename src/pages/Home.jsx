import Header from '../components/Header';
import React from 'react'
import image from '../assets/img1-px.png';
import { Link, NavLink } from "react-router-dom";
function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">

    <section className="relative bg-gradient-to-r from-yellow-500 to-blue-300 text-white py-20 text-center">
  <h1 className="text-5xl font-bold">Welcome to Lyceum of Alabang</h1>
  <p className="mt-4 text-lg">Shaping the future through excellence in education</p>


  <div className="relative z-10 mt-6">
    <NavLink
      to="/contact"
      className="cursor-pointer bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold text-lg shadow-md hover:bg-gray-200 transition"
    >
      Inquire Now
    </NavLink>
  </div>


  <div className="absolute inset-0 opacity-20 pointer-events-none">
    <img 
      src={image}
      alt="Campus Image" 
      className="w-full h-full object-cover"
    />
  </div>
</section>

    


    <section className="container mx-auto py-16 px-6 grid md:grid-cols-3 gap-10">
      <div className="p-6 bg-white rounded-lg shadow-md text-center">
        <h3 className="text-xl font-semibold">Quality Education</h3>
        <p className="mt-2">We provide top-notch education to prepare students for their careers.</p>
      </div>
      <div className="p-6 bg-white rounded-lg shadow-md text-center">
        <h3 className="text-xl font-semibold">Modern Facilities</h3>
        <p className="mt-2">State-of-the-art classrooms, libraries, and laboratories.</p>
      </div>
      <div className="p-6 bg-white rounded-lg shadow-md text-center">
        <h3 className="text-xl font-semibold">Expert Faculty</h3>
        <p className="mt-2">Experienced and dedicated educators guiding every student.</p>
      </div>
    </section>
  </div>
  )
}

export default Home
