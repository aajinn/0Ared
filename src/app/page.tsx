export default function Home() {
  return (
    <div>
      {/* HEADER */}
      <div className="text-center">
        <img src="https://capsule-render.vercel.app/api?type=waving&color=0f172a&height=280&section=header&text=Ajin%20Varghese%20Chandy&fontSize=70&fontColor=ffffff&fontFace=Montserrat&animation=fadeIn&fontAlignY=35&desc=Fullstack%20Engineer&descAlignY=60&descAlign=50" className="w-full" alt="Header" />
      </div>
      <br />

      {/* ABOUT */}
      <div className="flex flex-col items-center">
        <h3 className="text-center">⚔️ About Me</h3>
        <div className="text-left max-w-2xl">
          <p>
            Full Stack developer building <b>production-grade web apps</b> with clean architecture and zero fluff.
          </p>
          <p>
            🔥 Frontend without performance debt, backend without spaghetti<br />
            🧠 Strong grasp of data flow, auth, caching, and API design<br />
            🧱 Opinionated about simplicity, ruthless about bad abstractions<br />
            🚫 If it doesn't scale or ship, it's trash
          </p>
        </div>
        <div className="mt-4">
          <a href="https://github.com/aajinn" target="_blank" rel="noopener noreferrer">
            <img src="https://img.shields.io/badge/GitHub-0F172A?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
          </a>
        </div>
      </div>

      <br />

      {/* TECH STACK */}
      <h3 className="text-center">🛠 Tech Stack</h3>

      {/* FRONTEND */}
      <div className="text-center space-y-2">
        <h4>🌐 Frontend</h4>
        <div className="flex flex-wrap justify-center gap-2">
          <img src="https://img.shields.io/badge/Next.js_15-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js" />
          <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
          <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
          <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
          <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
          <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
        </div>
      </div>

      <br />

      {/* BACKEND */}
      <div className="text-center space-y-2">
        <h4>⚙️ Backend</h4>
        <div className="flex flex-wrap justify-center gap-2">
          <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" />
          <img src="https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white" alt="FastAPI" />
          <img src="https://img.shields.io/badge/Next.js_API_Routes-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js API Routes" />
          <img src="https://img.shields.io/badge/Server_Actions-0F172A?style=for-the-badge" alt="Server Actions" />
          <img src="https://img.shields.io/badge/REST_APIs-005571?style=for-the-badge" alt="REST APIs" />
        </div>
      </div>

      <br />

      {/* DATABASE & AUTH */}
      <div className="text-center space-y-2">
        <h4>💾 Database & Auth</h4>
        <div className="flex flex-wrap justify-center gap-2">
          <img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL" />
          <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
          <img src="https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white" alt="Supabase" />
          <img src="https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white" alt="Prisma" />
          <img src="https://img.shields.io/badge/Auth-JWT%20%7C%20Cookies-0F172A?style=for-the-badge" alt="Auth" />
        </div>
      </div>

      <br />

      {/* TOOLING */}
      <div className="text-center space-y-2">
        <h4>🧰 Tooling & Workflow</h4>
        <div className="flex flex-wrap justify-center gap-2">
          <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" alt="Git" />
          <img src="https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white" alt="ESLint" />
          <img src="https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=black" alt="Prettier" />
        </div>
      </div>

      <br />

      {/* DEPLOYMENT */}
      <div className="text-center space-y-2">
        <h4>🚀 Deployment</h4>
        <div className="flex flex-wrap justify-center gap-2">
          <img src="https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white" alt="AWS" />
          <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" />
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

