import React, { useEffect, useState } from 'react';
import axios from 'axios';
import GitHubCalendar from 'react-github-calendar';

const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;
const USERNAME = 'github-pratik';

interface Repository {
  id: string;
  name: string;
  html_url: string;
}

const GitHubFeed: React.FC = () => {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const repoResponse = await axios.get(
          `https://api.github.com/users/${USERNAME}/repos`,
          {
            headers: { Authorization: `Bearer ${GITHUB_TOKEN}` },
          }
        );

        setRepositories(repoResponse.data.slice(0, 5));
      } catch (err) {
        console.error('Failed to fetch GitHub data:', err);
        setError(true);
      }
    };

    fetchGitHubData();
  }, []);

  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md transition-all">
      <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
        GitHub Activity
      </h3>

      {/* Recent Repositories */}
      <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-300 mb-2">
        Recent Repositories
      </h4>
      {repositories.length > 0 ? (
        <ul className="space-y-2 text-gray-700 dark:text-gray-300 font-medium">
          {repositories.map((repo) => (
            <li key={repo.id}>
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600 transition-colors"
              >
                {repo.name}
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600 dark:text-gray-400 font-normal">
          No repositories found.
        </p>
      )}

      {/* Separate Grid for Calendar */}
      <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-300 mt-6 mb-2">
        GitHub Contribution Calendar
      </h4>
      <div className="bg-white rounded-lg shadow-md p-4 dark:bg-white">
        <GitHubCalendar
          username={USERNAME}
          blockSize={14}
          blockMargin={5}
          fontSize={14}
          theme={{
            light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
          }}
          colorScheme="light"
        />
      </div>
    </div>
  );
};

export default GitHubFeed;
