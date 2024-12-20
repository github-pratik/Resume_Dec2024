import React from 'react';
import LinkedInFeed from './LinkedInFeed';
import GitHubFeed from './GitHubFeed';

export default function ActivityFeed() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          Professional Activity
        </h2>
        
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md transition-all">
            <LinkedInFeed />
          </div>
            <GitHubFeed />
          
        
      </div>
    </section>
  );
}
