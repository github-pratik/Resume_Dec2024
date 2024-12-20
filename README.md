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
=======
3. Set up environment variables:
   ```bash
   cp .env.example .env
   ```

4. Configure your environment variables:
   ```env
   LINKEDIN_ACCESS_TOKEN=your_linkedin_token
   GITHUB_TOKEN=your_github_token
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

## 🛠️ Development

### Prerequisites

- Node.js 18.x or higher
- npm 9.x or higher

### Project Structure

```
src/
├── components/          # React components
│   ├── ActivityFeed/   # Activity feed components
│   ├── Header/         # Navigation components
│   └── ...            # Other components
├── services/           # API integration services
│   ├── linkedin/       # LinkedIn integration
│   └── github/        # GitHub integration
├── utils/             # Utility functions
├── database/          # Database configuration
└── types/            # TypeScript type definitions
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run sync` - Run LinkedIn sync service
- `npm run generate-sitemap` - Generate sitemap

## 🔄 LinkedIn Integration

The LinkedIn integration automatically syncs:
- Profile information
- Recent posts
- Work experience
- Professional accomplishments

To configure the sync service:

1. Set up LinkedIn API credentials in `.env`
2. Configure sync interval in `src/services/linkedin/config.ts`
3. Run the sync service: `npm run sync`

## 🎨 Customization

### Styling

The project uses Tailwind CSS for styling. Customize the theme in `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        // Add your custom colors
      },
      // Add other theme customizations
    },
  },
};
```

### Content

Update your personal information in:
- `src/components/Hero.tsx` - Main introduction
- `src/components/About.tsx` - About section
- `src/components/Portfolio.tsx` - Project showcase
- `src/components/Skills.tsx` - Skills section

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [React Documentation](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [LinkedIn API](https://developer.linkedin.com/)
- [GitHub API](https://docs.github.com/en/rest)

## 📧 Contact

Your Name - [@yourtwitter](https://twitter.com/yourtwitter) - email@example.com

Project Link: [https://github.com/yourusername/portfolio-website](https://github.com/yourusername/portfolio-website)

---

Made with ❤️ by [Your Name]
>>>>>>> Initial commit
