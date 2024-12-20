import React from 'react';

const skills = {
  'Programming Languages': ['JavaScript', 'TypeScript', 'Python', 'Java'],
  'Frontend': ['React', 'Vue.js', 'HTML5', 'CSS3', 'Tailwind CSS'],
  'Backend': ['Node.js', 'Express', 'Django', 'PostgreSQL', 'MongoDB'],
  'DevOps & Tools': ['Git', 'Docker', 'AWS', 'CI/CD', 'Linux'],
  'Soft Skills': ['Problem Solving', 'Team Leadership', 'Communication', 'Agile Methodology'],
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          Skills & Expertise
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-full text-sm text-gray-800 dark:text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
