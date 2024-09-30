import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default function About() {
  return (
    <>
      <Header />

      <main className="container mx-auto p-4">
        {/* About Me Section */}
        <section className="text-center py-20">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-gray-700 mb-6">
            Hello! I'm <strong>Pankaj Ghuge</strong>, a passionate Full Stack Developer with experience in Machine Learning and Cloud Computing. I specialize in building scalable web applications using technologies like React, Next.js, and Tailwind CSS.
          </p>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20">
          <h3 className="text-3xl font-bold mb-4">Education</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>
              <strong>Bachelor of Engineering in Computer Science</strong> - XYZ University (2016 - 2020)
            </li>
            {/* Add more educational qualifications if any */}
          </ul>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20">
          <h3 className="text-3xl font-bold mb-4">Professional Experience</h3>
          <div className="space-y-6 text-gray-700">
            <div>
              <h4 className="text-xl font-semibold">Full Stack Developer at ABC Corp</h4>
              <p className="italic">June 2020 - Present</p>
              <p>
                Developing and maintaining web applications using React, Node.js, and other modern technologies. Collaborated with cross-functional teams to deliver high-quality products.
              </p>
            </div>
            {/* Add more experiences if needed */}
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="py-20">
          <h3 className="text-3xl font-bold mb-4">Certifications</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>Certified React Developer - [Certification Authority]</li>
            <li>Machine Learning Specialization - Coursera</li>
            {/* Add more certifications if any */}
          </ul>
        </section>

        {/* Hobbies and Interests Section */}
        <section id="hobbies" className="py-20">
          <h3 className="text-3xl font-bold mb-4">Hobbies & Interests</h3>
          <p className="text-gray-700 mb-4">
            When I'm not coding, I enjoy:
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Exploring new technologies and programming languages</li>
            <li>Reading about artificial intelligence and machine learning</li>
            <li>Participating in hackathons and coding challenges</li>
            <li>Traveling and experiencing different cultures</li>
          </ul>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <h3 className="text-3xl font-bold mb-4">Get in Touch</h3>
          <p className="text-gray-700 mb-4">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out!
          </p>
          <p className="text-gray-700">
            <strong>Email:</strong> <a href="mailto:your.email@example.com" className="text-blue-500">your.email@example.com</a>
          </p>
          <p className="text-gray-700">
            <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/yourprofile" className="text-blue-500" target="_blank" rel="noopener noreferrer">linkedin.com/in/yourprofile</a>
          </p>
          {/* Add other contact methods if desired */}
        </section>
      </main>

      <Footer />
    </>
  );
}
