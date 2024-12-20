import React, { useEffect, useState } from "react";
import GitHubCalendar from "react-github-calendar";
import axios from "axios";

const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;
const GITHUB_USERNAME = "github-pratik";

interface Repository {
  id: string;
  name: string;
  html_url: string;
}

const About: React.FC = () => {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const repoResponse = await axios.get(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos`,
          {
            headers: { Authorization: `Bearer ${GITHUB_TOKEN}` },
          }
        );
        setRepositories(repoResponse.data.slice(0, 5));
      } catch (err) {
        console.error("Failed to fetch GitHub data:", err);
      }
    };
    fetchGitHubData();
  }, []);

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-extrabold text-center mb-16 text-gray-800 dark:text-gray-100">
          About
        </h2>

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Education */}
          <div className="p-8 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md">
            <h3 className="text-3xl font-bold mb-6 text-yellow-500">
              Education
            </h3>
            <ul className="space-y-6 text-lg text-gray-600 dark:text-gray-300">
              <li>
                <h4 className="font-bold">George Mason University</h4>
                <p>Master of Science in (Computer Science)</p>
                <span className="text-sm text-yellow-500">2024 — 2026</span>
              </li>
              <li>
                <h4 className="font-bold">
                  Pimpri Chinchwad College Of Engineering Pune
                </h4>
                <p>Bachelor in Technology (Computer Engineering)</p>
                <span className="text-sm text-yellow-500">2020 — 2024</span>
              </li>
            </ul>
          </div>

          {/* Experience */}
          <div className="p-8 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md">
            <h3 className="text-3xl font-bold mb-6 text-yellow-500">
              Experience
            </h3>
            <ul className="space-y-6 text-lg text-gray-600 dark:text-gray-300">
              <li>
                <h4 className="font-bold">Persistent Martian Program</h4>
                <p>Persistent Systems</p>
                <span className="text-sm text-yellow-500">
                  Jun 2024 — Aug 2024
                </span>
                <p>Java · Agile Methodologies · Linux · SQL</p>
              </li>
              <li>
                <h4 className="font-bold">Web Developer Internship</h4>
                <p>PHN Technology Pvt Ltd</p>
                <span className="text-sm text-yellow-500">
                  Apr 2023 - Jun 2023
                </span>
                <p>
                  Web Infrastructure · Cloud Services · Full Stack · Web
                  Development
                </p>
              </li>
            </ul>
          </div>

          {/* Certification */}
          <div className="p-8 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md">
            <h3 className="text-3xl font-bold mb-6 text-yellow-500">
              Certification
            </h3>
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-gray-800 dark:text-gray-200">
                  AWS Certified Solutions Architect
                </p>
                <p className="text-gray-600 dark:text-gray-400">Issued: 2023</p>
              </div>
              <div>
                <p className="font-semibold text-gray-800 dark:text-gray-200">
                  Microsoft Azure Fundamentals
                </p>
                <p className="text-gray-600 dark:text-gray-400">Issued: 2022</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* LinkedIn */}
          <div className="p-8 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md">
            <h3 className="text-3xl font-bold mb-6 text-yellow-500">
              LinkedIn Activity
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              LinkedIn activity will be available soon. Stay tuned!
            </p>
          </div>

          {/* GitHub */}
          <div className="p-8 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md">
            <h3 className="text-3xl font-bold mb-6 text-yellow-500">
              GitHub Activity
            </h3>
            <h4 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-4">
              Recent Repositories
            </h4>
            <ul className="space-y-3">
              {repositories.map((repo) => (
                <li key={repo.id}>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    {repo.name}
                  </a>
                </li>
              ))}
            </ul>

            <h4 className="text-xl font-medium text-gray-700 dark:text-gray-300 mt-8 mb-4">
              GitHub Contribution Calendar
            </h4>
            <div className="bg-white rounded-lg shadow-md p-4 not-prose">
              <GitHubCalendar
                username={GITHUB_USERNAME}
                blockSize={12}
                blockMargin={4}
                fontSize={14}
                colorScheme="light"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
