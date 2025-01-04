<<<<<<< HEAD
# Pratik Patil's Portfolio

## Overview
Welcome to the source code of my personal portfolio! This project showcases my professional experience, skills, projects, and achievements. It also includes features like a GitHub activity feed, LinkedIn activity (coming soon), and downloadable resumes tailored to different roles.

## Features
- **Responsive Design:** Fully optimized for mobile, tablet, and desktop devices.
- **Dark Mode Support:** Switch between light and dark themes seamlessly.
- **GitHub Feed:** Displays recent repositories and contributions.
- **LinkedIn Feed:** Placeholder for LinkedIn activity (coming soon).
- **Dynamic Resume Downloads:** Choose and download resumes tailored to specific roles.

## Technologies Used
### Frontend
- React
- TypeScript
- Tailwind CSS
- React Icons
- Axios

### Backend
- Node.js (for API endpoints)
- Express
- MongoDB (for storing resume data)

### Deployment
- **Frontend:** [Vercel](https://vercel.com/)
- **Backend:** [Vercel Serverless Functions](https://vercel.com/docs/serverless-functions/introduction)

## Setup Instructions
### Prerequisites
- [Node.js](https://nodejs.org/) installed
- [Git](https://git-scm.com/) installed

### Steps
1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/portfolio.git
   cd portfolio
   ```

2. **Install Dependencies:**
=======
# Professional Portfolio with LinkedIn Integration

[![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-blue.svg)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-38B2AC.svg)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-5.4.2-646CFF.svg)](https://vitejs.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A modern, responsive portfolio website with automated LinkedIn profile synchronization. Built with React, TypeScript, and Tailwind CSS, featuring real-time professional updates and activity feeds.

## ✨ Features

- **Dynamic Portfolio Sections**
  - Professional introduction and hero section
  - Detailed about me section
  - Comprehensive skills showcase
  - Project portfolio with live demos
  - Contact form with social links

- **Professional Activity Integration**
  - Automated LinkedIn profile synchronization
  - GitHub activity feed
  - Real-time updates
  - Professional accomplishments tracking

- **Technical Features**
  - Type-safe development with TypeScript
  - Responsive design with Tailwind CSS
  - SEO optimization
  - Automated sitemap generation
  - Performance optimized

## 🚀 Quick Start

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/portfolio-website.git
   cd portfolio-website
   ```

2. Install dependencies:
>>>>>>> Initial commit
   ```bash
   npm install
   ```

<<<<<<< HEAD
3. **Set Environment Variables:**
   Create a `.env` file in the root directory and add the following:
   ```env
   VITE_GITHUB_TOKEN=your_github_token
   VITE_LINKEDIN_TOKEN=your_linkedin_token
   ```

4. **Run Locally:**
   ```bash
   npm run dev
   ```
   Visit `http://localhost:5173` in your browser.

5. **Build for Production:**
   ```bash
   npm run build
   ```

6. **Deploy:**
   - Push the code to a GitHub repository.
   - Connect your repository to Vercel for automatic deployment.

## Project Structure
```
portfolio/
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Portfolio.tsx
│   │   ├── Skills.tsx
│   │   ├── ActivityFeed/
│   │   │   ├── GitHubFeed.tsx
│   │   │   └── LinkedInFeed.tsx
│   │   ├── Contact.tsx
│   ├── styles/
│   │   ├── heroAnimation.css
│   │   └── global.css
│   ├── App.tsx
│   ├── main.tsx
├── public/
│   └── assets/
├── server/
│   ├── index.js
│   └── routes/
│       └── resumes.js
├── package.json
├── vite.config.ts
└── README.md
```

## API Endpoints
### `/api/resumes`
- **GET:** Fetch the list of available resumes.
- **POST:** Add a new resume (Admin-only feature).

## Deployment
1. **Frontend Deployment:**
   - Push your project to GitHub.
   - Connect your repository to Vercel.
   - Configure environment variables in Vercel.

2. **Backend Deployment:**
   - Add backend routes under the `api/` directory.
   - Deploy the backend as serverless functions on Vercel.

## Screenshots
### Hero Section
![Hero Section](./screenshots/hero.png)

### About Page
![About Page](./screenshots/about.png)

## Author
**Pratik Patil**

Feel free to connect with me:
- [LinkedIn](https://www.linkedin.com/in/pshpatil/)
- [GitHub](https://github.com/github-pratik)

## License
This project is licensed under the MIT License.

Made with ❤️ by Pratik

