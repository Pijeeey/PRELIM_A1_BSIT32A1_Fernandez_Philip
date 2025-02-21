import Header from '../components/Header';

import React from 'react'

function About() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">

      <section className="bg-gradient-to-r from-yellow-500 to-blue-300 text-white py-16 text-center">
        <h1 className="text-5xl font-bold">About</h1>
        <p className="mt-4 text-lg">Lyceum of Alabang so proud of you</p>
      </section>


      <section className="container mx-auto py-16 px-6">
        <h2 className="text-3xl font-semibold text-center">Lyceum of Alabang Educational Statement</h2>


        <div className="mt-10 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-yellow-600">Philosophy</h3>
          <p className="mt-2 text-lg">
            An institution that provides quality and relevant instruction and innovation for the next generation to improve the lives of individuals—physically, emotionally, morally, and spiritually—adhering to the principle of God.
          </p>
          <p className="mt-4 italic text-center text-gray-600">
            “I will instruct you and teach you in the way you should go; I will counsel you with my loving eyes on you.” – Psalm 32:8
          </p>
        </div>


        <div className="mt-10 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-yellow-600">Vision</h3>
          <p className="mt-2 text-lg">
            Lyceum of Alabang envisions becoming one of the nation’s leading educational institutions involved in the pursuit and advancement of knowledge, skills, and values for personal, community, and national development.
          </p>
        </div>


        <div className="mt-10 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-yellow-600">Mission</h3>
          <p className="mt-2 text-lg">
            Lyceum of Alabang shall provide world-class education and training through competent personnel, high-end facilities, advanced technology, and accredited curricula of industry-based courses.
          </p>
        </div>


        <div className="mt-10 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-yellow-600">Quality Policy</h3>
          <p className="mt-2 text-lg">
            We, at the Lyceum of Alabang, commit ourselves to exceed the expectations of our stakeholders through continual improvement for effective and efficient provision of quality education and training. We will ensure that all our academic and non-academic processes and activities are aligned with their voice.
          </p>
        </div>


        <div className="mt-10 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-yellow-600">Goals and Objectives</h3>
          <ul className="mt-2 text-lg list-disc pl-6">
            <li>Impart knowledge and intellectual skills and nurture different qualities of mind and character such as curiosity, critical judgment, ethical awareness, and creative imagination.</li>
            <li>Provide quality competence development and enhancement programs for faculty and staff to ensure optimum learning and excellent service to all stakeholders.</li>
            <li>Provide quality high-end facilities and equipment instrumental to the enhancement and advancement of learning.</li>
            <li>Develop individuals who are skilled in identifying, clarifying, choosing, and putting into practice decisions that are relevant to their personal, social, and cultural development.</li>
          </ul>
        </div>


        <div className="mt-10 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-yellow-600">Core Values</h3>
          <ul className="mt-2 text-lg list-disc pl-6">
            <li><strong>Excellent and Dynamic Service:</strong> We commit to excellence in the performance of our services through dynamic educational programs and modernization of resources for global competitiveness.</li>
            <li><strong>Educational Partnership:</strong> We engage in sustainable alliances with earnest parents and enthusiastic learners, creating a community of responsible partners in nation-building.</li>
            <li><strong>Human Resources Development:</strong> We equip and empower our human resources through continuous training for personal and professional development, creating a workforce responsive to the demands, changes, and innovations of the modern and fast-paced society.</li>
            <li><strong>Moral and Spiritual Leadership:</strong> We pursue moral and spiritual leadership in inspiring our students to embrace our core values.</li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default About
