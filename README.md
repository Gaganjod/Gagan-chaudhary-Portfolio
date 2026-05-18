# 🌟 Gagan Chaudhary — Professional Portfolio

[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=Vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/gagan---/)

A premium, interactive, dark-themed responsive developer portfolio built with React, Vite, custom styling, and Framer Motion. This website showcases my projects, skills, education, professional experience, achievements, and competitive programming details through a polished, state-of-the-art visual experience.

---

## ⚡ Core Features

- **🎨 Modern Glassmorphic Design:** A premium UI utilizing deep overlays, dynamic gradients, blur filters, and harmonious curated colors.
- **✨ Micro-Interactions & Magnetic Controls:** Integrated high-end interactive features including magnetic buttons and hover animations to delight the user.
- **📱 Responsive Bento Layouts:** Grid structures designed to scale flawlessly from high-res desktop monitors to mobile devices.
- **📄 Native CV Viewer:** Fully integrated system showing a parsing-preview, download, and viewing interface for my curriculum vitae.
- **🚢 Enterprise Containerization:** Native Docker multi-stage configuration paired with Nginx for reverse proxying and optimized asset serving.

---

## 🛠️ Technology Stack

| Category | Technologies |
| :--- | :--- |
| **Core & Logic** | React 18, JavaScript (ES6+), HTML5, CSS3, TypeScript |
| **Styling & Animation** | Custom Tailwind CSS, Vanilla CSS Utilities, Framer Motion |
| **Icons & Media** | Lucide React Icons, React Icons |
| **Deployment & Ops** | Docker, Nginx, Docker Compose, Git / GitHub |

---

## 📂 Project Showcase

### 1. 🔍 OptiCV — AI Resume Intelligence Dashboard
*A Full-Stack AI Optimizer using Google's Gemini API for semantic gap analysis and automated resume content improvement.*
- **Features:** Bento-style dashboard interface, Side-by-Side Resume & Suggestion Mode, real-time Parsing Preview for ATS compatibility.
- **Stack:** `React.js`, `Node.js`, `Express.js`, `Gemini API`, `Tailwind CSS`, `Recharts`, `Framer Motion`, `TypeScript`.
- **Links:** [Live Demo](https://opti-cv-three.vercel.app/)

### 2. 🏥 Medicare
*A medical emergency tracking application designed for ambulance dispatching and tracking.*
- **Features:** Real-time health indicators, ambulance booking workflow, and an integrated AI disease identifier for first-line assessment.
- **Stack:** `JavaScript`, `AI Integration`, `Health Tech APIs`.
- **Links:** [GitHub Repository](https://github.com/Gaganjod/Medical_Export.git)

---

## 🏆 Key Achievements & Experience

### 💼 Software Developer Intern at Vyloo Technologies
- Contributed to backend logical structures, real-time modules, and mysql database integrations.
- Technologies: `Java`, `JavaScript`, `Git`, `MySQL`, `RESTful APIs`.

### 🚀 Competitive Programming Highlights
- **LeetCode:** Secured Global Rank **783rd** among 21k+ active participants in Biweekly Contest 96.
- **CodeChef:** Achieved Global Rank **557th** among 4k+ participants in Starters 76 (Div 3).

---

## 💻 Getting Started (Local Setup)

### 📋 Prerequisites
Ensure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (v18.x or v20.x recommended)
- [npm](https://www.npmjs.com/) (installed automatically with Node.js)
- [Git](https://git-scm.com/)

### 🚀 Setup Steps

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/Gaganjod/Gagan-chaudhary-Portfolio.git
   cd Gagan-chaudhary-Portfolio
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Run the Development Server:**
   ```bash
   npm run dev
   ```
   *The application will start running locally, typically at `http://localhost:5173`.*

4. **Build for Production:**
   ```bash
   npm run build
   ```
   *This compiles optimized assets into the `dist/` directory.*

---

## 🐳 Docker Deployment

The project is fully containerized using a multi-stage `Dockerfile` and `docker-compose.yml` for effortless server setup.

### Run with Docker Compose (Recommended)
Launch the containerized application on port `8080`:
```bash
docker-compose up -d --build
```

### Run with Docker CLI
Alternatively, you can build and run using standard Docker commands:
```bash
# Build the production-ready Docker image
docker build -t gagan-portfolio .

# Run the container mapping Nginx port 80 to host port 8080
docker run -d -p 8080:80 --name portfolio-app gagan-portfolio
```
The site will be live at `http://localhost:8080`.

---

## 🤝 Connect With Me

Let's build something amazing together!

- **📧 Email:** [gaganchaudhary.s2005@gmail.com](mailto:gaganchaudhary.s2005@gmail.com)
- **📞 Phone:** +91-8979228704
- **💼 LinkedIn:** [linkedin.com/in/gagan---/](https://www.linkedin.com/in/gagan---/)
- **🐙 GitHub:** [github.com/Gaganjod](https://github.com/Gaganjod)

---
*Created with ❤️ by Gagan Chaudhary*
