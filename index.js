import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main className="container mx-auto p-4">
        {/* Hero Section */}
        <section className="text-center py-20">
          <h2 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h2>
          <p className="text-gray-700 mb-6">I am a Full Stack Developer proficient in Java, React, and more.</p>
          <a href="#projects" className="bg-blue-500 text-white py-2 px-4 rounded-full">See My Work</a>
        </section>

        {/* About Section */}
        <section id="about" className="py-20">
          <h3 className="text-3xl font-bold mb-4">About Me</h3>
          <p className="text-gray-700">I am passionate about building scalable applications and problem-solving with creative solutions. My experience includes working with technologies like React, Tailwind CSS, and Next.js.</p>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <h3 className="text-3xl font-bold mb-4">Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-2">Project 1</h4>
              <p className="text-gray-600">Description of Project 1.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-2">Project 2</h4>
              <p className="text-gray-600">Description of Project 2.</p>
            </div>
            {/* Add more projects as needed */}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <h3 className="text-3xl font-bold mb-4">Contact Me</h3>
          <p className="text-gray-700">You can reach me at: <a href="mailto:youremail@example.com" className="text-blue-500">youremail@example.com</a></p>
        </section>
      </main>
      <Footer />
    </>
  );
}
