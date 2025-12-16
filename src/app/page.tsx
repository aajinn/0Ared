'use client';

import { useState } from 'react';

export default function Home() {
  const [mouseX, setMouseX] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - 60;
    setMouseX(x);
  };
  


  return (
    <div>
      {/* HEADER */}
      <style>{`
        .header-container {
          position: relative;
          display: inline-block;
          width: 100%;
        }
        .gif-overlay {
          display: none;
          position: absolute;
          top: 10%;
          width: 120px;
          height: 120px;
          margin-top: 10px;
          animation: slideIn 0.3s ease-out;
          transition: left 0.1s ease-out;
        }
        .header-container:hover .gif-overlay {
          display: block;
        }
        @keyframes slideIn {
          from {
            opacity: 0;
            top: 60%;
          }
          to {
            opacity: 1;
            top: 0%;
          }
        }
      `}</style>
      <div className="text-center">
        <div 
          className="header-container"
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <img src="https://capsule-render.vercel.app/api?type=waving&color=0f172a&height=280&section=header&text=Ajin%20Varghese%20Chandy&fontSize=70&fontColor=ffffff&fontFace=Montserrat&animation=fadeIn&fontAlignY=35&desc=Fullstack%20Engineer&descAlignY=60&descAlign=50" className="w-full" alt="Header" />
          <img 
            src="/speed.gif" 
            alt="Speed Animation" 
            className="gif-overlay" 
            style={{ left: `${mouseX}px` }}
          />
        </div>
      </div>
      <br />

      {/* ABOUT */}
      <div className="flex flex-col items-center">
        <h3 className="text-center">⚔️ About Me</h3>
        <div className="text-left max-w-2xl mx-4 sm:mx-0">
          <p>
            Full Stack developer building <b>production-grade web apps</b> with clean architecture and zero fluff.
          </p>
          <p>
            🔥 Frontend without performance debt, backend without spaghetti<br />
            🧠 Strong grasp of data flow, auth, caching, and API design<br />
            🧱 Opinionated about simplicity, ruthless about bad abstractions<br />
            🚫 If it doesn&apos;t scale or ship, it&apos;s trash
          </p>
        </div>
        <div className="mt-4">
          <a href="https://github.com/aajinn" target="_blank" rel="noopener noreferrer">
            <img src="https://img.shields.io/badge/GitHub-0F172A?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
          </a>
        </div>
      </div>

      <br />

      {/* MERN STACK */}
      <div className="text-center space-y-2">
        <h4>📦 MERN Stack</h4>
        <div className="max-w-3xl mx-4 sm:mx-auto text-left text-sm space-y-3">

            <div>
              <p className="font-semibold text-base">Frontend</p>
              <div className="flex flex-wrap gap-2 mt-2">
                <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js" />
                <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
                <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
                <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
                <img src="https://img.shields.io/badge/ShadCN_UI-000000?style=for-the-badge&logo=shadcnui" alt="ShadCN UI" />
              </div>
            </div>

            <div>
              <p className="font-semibold text-base">Backend</p>
              <div className="flex flex-wrap gap-2 mt-2">
                <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" />
                <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js" />
                <img src="https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white" alt="NestJS" />
              </div>
            </div>

            <div>
              <p className="font-semibold text-base">Database</p>
              <div className="flex flex-wrap gap-2 mt-2">
                <img src="https://img.shields.io/badge/MongoDB_Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB Atlas" />
                <img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL" />
                <img src="https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white" alt="Supabase" />
              </div>
            </div>

            <div>
              <p className="font-semibold text-base">Authentication</p>
              <div className="flex flex-wrap gap-2 mt-2">
                <img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white" alt="JWT" />
                <img src="https://img.shields.io/badge/OAuth-4285F4?style=for-the-badge&logo=oauth&logoColor=white" alt="OAuth" />
                <img src="https://img.shields.io/badge/Google_Auth-4285F4?style=for-the-badge&logo=google&logoColor=white" alt="Google Auth" />
                <img src="https://img.shields.io/badge/GitHub_Auth-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Auth" />
              </div>
            </div>

            <div>
              <p className="font-semibold text-base">Testing</p>
              <div className="flex flex-wrap gap-2 mt-2">
                <img src="https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white" alt="Jest" />
                <img src="https://img.shields.io/badge/React_Testing_Library-E8165D?style=for-the-badge&logo=testing-library&logoColor=white" alt="React Testing Library" />
                <img src="https://img.shields.io/badge/Vitest-6E9F18?style=for-the-badge&logo=vitest&logoColor=white" alt="Vitest" />
                <img src="https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white" alt="Cypress" />
                <img src="https://img.shields.io/badge/Supertest-000000?style=for-the-badge&logo=jest&logoColor=white" alt="Supertest" />
              </div>
            </div>

            <div>
              <p className="font-semibold text-base">DevOps & Deployment</p>
              <div className="flex flex-wrap gap-2 mt-2">
                <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker" />
                <img src="https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white" alt="AWS" />
                <img src="https://img.shields.io/badge/GCP-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white" alt="GCP" />
                <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" />
                <img src="https://img.shields.io/badge/GitHub_Actions-2088F0?style=for-the-badge&logo=github-actions&logoColor=white" alt="GitHub Actions" />
                <img src="https://img.shields.io/badge/CI%2FCD-005571?style=for-the-badge" alt="CI/CD" />
              </div>
            </div>
        </div>
      </div>

      <br />

      {/* CONTRIBUTIONS */}
      <div className="flex flex-col items-center">
        <h3 className="text-center">🐍 Contribution Activity</h3>
        <div>
          <img src="https://raw.githubusercontent.com/Platane/snk/output/github-contribution-grid-snake.svg" alt="Contribution Snake" />
        </div>
      </div>

      <br />

      {/* FOOTER */}
      <div className="text-center">
        <img src="https://capsule-render.vercel.app/api?type=waving&color=0f172a&height=100&section=footer" className="w-full" alt="Footer" />
      </div>
    </div>
  );
}