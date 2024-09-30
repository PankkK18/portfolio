'use client'; // Client-side rendering

import React, { useState } from 'react'; // Import useState from React
import Header from '../components/Header';
import Footer from '../components/Footer';
import './app.css'; // Ensure this path is correct

export default function Home() {
  // State for form data and response messages
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [responseMessage, setResponseMessage] = useState('');
  const [loading, setLoading] = useState(false); // Loading state for form submission

  // Form submission handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (res.status === 201) {
        setResponseMessage(result.message);
        setFormData({ name: '', email: '', message: '' }); // Clear form fields
      } else {
        setResponseMessage(result.message);
      }
    } catch (error) {
      setResponseMessage('An error occurred. Please try again.');
    }

    setLoading(false); // End loading
  };

  // List of projects
  const projects = [
    {
      title: 'DYPCET Hub',
      description: 'A centralized platform for college clubs to share information. Built using HTML5, CSS, JavaScript, and PHP.',
      details: 'The system integrates all club activities and provides students with real-time updates on events, meetings, and opportunities.',
      link: 'https://github.com/PankkK18/DYPCET_HUB-',
    },
    {
      title: 'Reduce Oil Consumption and Monitoring',
      description: 'A web solution to monitor and reduce oil consumption using JavaScript and PHP.',
      details: 'The project involves the use of data analysis and visualization to help users reduce unnecessary oil wastage.',
      link: 'https://github.com/PankkK18/Oil_Consumption_Monitoring-',
    },
    {
      title: 'Portfolio with Parallax Animation',
      description: 'A portfolio built with modern web technologies and parallax animation.',
      details: 'Features smooth animations and responsive design. Built using HTML, CSS, JavaScript, and the parallax.js library.',
      link: 'https://github.com/PankkK18/ParallaxAnimation-Portfolio',
    },
    {
      title: 'New Project',
      description: 'A description of the new project goes here.',
      details: 'Details on how the project works, the technologies used, and the challenges faced.',
      link: 'https://github.com/PankkK18/New_Project',
    },
  ];

  // List of skills
  const skills = [
    { name: 'MongoDB', img: '/icons8-mongo-db-48.png', description: 'MongoDB, MySQL' },
    { name: 'Frameworks & Tools', img: '/icons8-tailwind-css-48.png', description: 'React.js, Tailwind CSS, Next.js, Git, GitHub' },
    { name: 'Languages', img: '/icons8-python-48.png', description: 'Java, Python, JavaScript, C++, SQL' },
    { name: 'JavaScript Frameworks', img: '/js.png', description: 'React, Vue.js' },
    { name: 'Version Control', img: '/icons8-github-30.png', description: 'Git, GitHub' },
    { name: 'Cloud Services', img: '/aws.png', description: 'AWS, Azure' },
  ];

  // Achievements & Certifications
  const achievements = [
    'Winner of XYZ Hackathon 2023',
    'Certified Java Developer - Coursera',
    'Udemy Course on Full Stack Development - Completed with Distinction',
  ];

  return (
    <>
      <Header />
      <main className="container mx-auto p-4">
        {/* Introduction Section */}
        <section className="relative text-center py-20">
          {/* Background Div */}
          <div className="absolute top-0 left-0 w-full bg-gradient-to-r" style={{ height: '300px' }}>
            <img src="/bg.jpg" alt="Background" className="w-full h-full object-cover opacity-50" />
            {/* Text Section inside Background Div */}
            <div className="absolute right-0 bottom-0 p-4 text-right text-white">
              <h2 className="text-4xl font-bold mb-2">Pankaj Ghuge</h2>
              <p className="text-gray-200 mb-4">
                Full Stack Developer | Machine Learning Enthusiast | Cloud Computing Expert
              </p>
            </div>
          </div>

          {/* Profile Section */}
          <div className="relative z-10 container mx-auto flex flex-col items-center pt-24">
            <div className="relative w-48 h-48 rounded-full overflow-hidden shadow-lg border-4 border-white mb-4">
              <img src="/tj.jpg" alt="Pankaj Ghuge" className="object-cover w-full h-full" />
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <h3 className="text-3xl font-bold mb-4">Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-black-100 p-8 rounded-lg shadow-md border border-gray-700 transition-transform duration-300 ease-in-out hover:scale-105"
              >
                <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
                <p className="text-gray-600">{project.description}</p>
                <p className="text-gray-500">{project.details}</p>
                <a href={project.link} className="text-blue-500" target="_blank" rel="noopener noreferrer">View Project</a>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20">
          <h3 className="text-3xl font-bold mb-8 text-center text-white">Skills</h3>
          <div className="overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-black-800 p-8 rounded-lg shadow-lg flex items-center border border-gray-700 transition-transform duration-300 ease-in-out hover:scale-110"
                >
                  <img
                    src={skill.img}
                    alt={skill.name}
                    className="w-16 h-16 mr-6"
                  />
                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-white">{skill.name}</h4>
                    <p className="text-gray-400">{skill.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section id="achievements" className="py-20">
          <h3 className="text-3xl font-bold mb-8 text-center">Achievements & Certifications</h3>
          <ul className="list-disc list-inside">
            {achievements.map((achievement, index) => (
              <li key={index} className="text-gray-300">{achievement}</li>
            ))}
          </ul>
        </section>

        {/* Connect with Me Section */}
        <section id="connect" className="py-20 text-center">
          <h3 className="text-3xl font-bold mb-4">Connect with Me</h3>
          <div className="flex justify-center space-x-8">
            <a href="https://github.com/PankkK18" className="hover:scale-110 transition-transform duration-300">
              <img src="/icons8-github-30.png" alt="GitHub" className="w-12 h-12" />
            </a>
            <a href="https://www.linkedin.com/in/pankaj-ghuge-075013276" className="hover:scale-110 transition-transform duration-300">
              <img src="/icons8-linkedin-48.png" alt="LinkedIn" className="w-12 h-12" />
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
