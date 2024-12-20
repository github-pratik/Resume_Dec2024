import React, { useState, useEffect } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Sun, Moon } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Contact from './components/Contact';

const queryClient = new QueryClient();

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [visitorCount, setVisitorCount] = useState<number | null>(null);

  // Toggle dark mode and apply class to <html>
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark'); // Add "dark" to <html>
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Fetch visitor count from the backend API
  useEffect(() => {
    const fetchVisitorCount = async () => {
      try {
        const response = await fetch('/api/visitorCount'); // Replace with your API route
        const data = await response.json();
        setVisitorCount(data.count);
      } catch (error) {
        console.error('Failed to fetch visitor count:', error);
      }
    };

    fetchVisitorCount();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen transition-colors duration-300">
        {/* Dark Mode Toggle */}
        <div className="fixed top-4 right-4 z-50">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            {darkMode ? (
              <Sun className="w-6 h-6 text-yellow-400" />
            ) : (
              <Moon className="w-6 h-6 text-gray-800" />
            )}
          </button>
        </div>

        {/* Page Components */}
        <Header />
        <main>
          <Hero />
          <About />
          <Portfolio />
          <Skills />
          <Contact />
        </main>

        {/* Footer */}
        <footer className="bg-gray-100 dark:bg-gray-800 text-center py-4">
          <p className="text-gray-600 dark:text-gray-300">
            {visitorCount !== null ? (
              <>Total Visitors: <strong>{visitorCount}</strong></>
            ) : (
              <>Loading visitor count...</>
            )}
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            &copy; {new Date().getFullYear()} Pratik Patil. All rights reserved.
          </p>
        </footer>
      </div>
    </QueryClientProvider>
  );
}

export default App;
