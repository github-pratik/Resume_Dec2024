import React, { useState, useEffect } from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa"; // Import icons
import "/Users/shashikant/Personal_Proj/Portfolio/src/styles/heroAnimation.css"; // Include the CSS for rotating text

export default function Hero() {
  const [showModal, setShowModal] = useState(false);
  const [resumeOptions, setResumeOptions] = useState<ResumeOption[]>([]);

  // Define the structure of resume options
interface ResumeOption {
  id: string;
  name: string;
  link: string;
}

  // Fetch resume options from backend
  useEffect(() => {
    const fetchResumes = async () => {
      try {
        const response = await fetch("/api/resumes"); // Replace with your API endpoint
        const data = await response.json();
        setResumeOptions(data);
      } catch (error) {
        console.error("Failed to fetch resumes:", error);
      }
    };

    fetchResumes();
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center bg-gray-50 dark:bg-gray-900 transition-colors duration-300 px-4 sm:px-6"
    >
      {/* Top Header with Beta Tag */}
      <div className="absolute top-8 sm:top-20 left-1/2 transform -translate-x-1/2 flex flex-col sm:flex-row items-center gap-2">
        <h1 className="text-lg sm:text-2xl font-bold text-gray-800 dark:text-gray-300">
          Pratik Patil
        </h1>
        <span className="bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs sm:text-sm font-bold px-2 py-1 rounded-full">
          Beta
        </span>
      </div>

      {/* Main Content */}
      <div className="text-center mt-24">
        <div className="text-3xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
          <h2 className="leading-snug">I’m the</h2>
          <span className="nowrap">
            <span className="window">
              <div className="window-inner">
                <span>Pratik Patil<br /></span>
                <span>Problem Solver.<br /></span>
                <span>Developer.<br /></span>
                <span>Innovator.<br /></span>
                <span>Cloud Practitioner.<br /></span>
                <span>Engineer.<br /></span>
              </div>
            </span>
          </span>
        </div>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
          Hi there! My name is <strong>Pratik Patil</strong>. I’m a software
          developer and problem solver, currently pursuing a master’s degree in
          computer science at a leading U.S. university, aiming to work in{" "}
          <strong>cloud computing</strong>, <strong>AI & ML</strong>, and{" "}
          <strong>Data Analysis</strong>.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 mt-4 text-2xl sm:text-3xl">
          {/* Email */}
          <a
            href="mailto:p.pshpatil@gmail.com"
            className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/pshpatil/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          {/* GitHub */}
          <a
            href="https://github.com/github-pratik"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </div>

        {/* Download Resume Button */}
        <button
          onClick={() => setShowModal(true)}
          className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Download Resume
        </button>
      </div>

      {/* Modal for Resume Options */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 w-11/12 max-w-md">
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">
              Choose a Resume
            </h3>
            <ul className="space-y-4">
              {resumeOptions.map((resume) => (
                <li key={resume.id}>
                  {resume.link ? (
                    <a
                      href={resume.link}
                      download
                      className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                    >
                      {resume.name}
                    </a>
                  ) : (
                    <span className="text-gray-500 dark:text-gray-400">
                      {resume.name}
                    </span>
                  )}
                </li>
              ))}
            </ul>
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
