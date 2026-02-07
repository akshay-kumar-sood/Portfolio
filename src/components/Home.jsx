import { Github, Linkedin,Instagram, Mail} from "lucide-react"
export default function Home() {
  return (
    <section id="home" className="home">
      <div className="home-photo">
        <img src="/photo.jpg" alt="Akshay Kumar Sood" onError={(e) => e.target.style.display = 'none'} />
      </div>
      <div className="home-about">
        <h1 className="home-name">AKSHAY KUMAR SOOD</h1>
        <ul className="home-list">
          <li>
            <LocationIcon />
            <span>Chandigarh, INDIA</span>
          </li>
          <li>
            <span>Chitkara University · CSE undergrad 3rd year</span>
          </li>
          <li id="tags">
            Full Stack Developer  |  Problem Solver  |  Curious  |  Learner  |  Athlete
          </li>
        </ul>
        <a href="/resume.pdf" download>
         <button id="resume">Download Resume</button>
        </a>
<div className="social-section">
  <div className="social-icons">
    <a href="https://github.com/akshay-kumar-sood" target="_blank" rel="noopener noreferrer">
      <Github size={24} />
    </a>

    <a href="https://www.linkedin.com/in/akshay-sood-3692b5297/" target="_blank" rel="noopener noreferrer">
      <Linkedin size={24} />
    </a>

    <a href="https://www.instagram.com/i_akshay_23/" target="_blank" rel="noopener noreferrer">
      <Instagram size={24} />
    </a>

    <a href="mailto:akshaysood@example.com">
      <Mail size={24} />
    </a>
  </div>

  {/* Tech Stack box – icons move horizontally */}
  <div className="tech-stack-box">
    <h3 className="tech-title">Tech Stack</h3>
    <div className="tech-stack-wrapper">
      <div className="tech-stack-track">
        <img src="/tech/html.svg" alt="HTML" />
        <img src="/tech/css.svg" alt="CSS" />
        <img src="/tech/js.svg" alt="JS" />
        <img src="/tech/vscode.png" alt="VS Code" />
        <img src="/tech/java.svg" alt="Java" />
        <img src="/tech/python.svg" alt="Python" />
        <img src="/tech/cpp.svg" alt="C++" />
        <img src="/tech/c.png" alt="C" />
        <img src="/tech/window.svg" alt="Windows" />
        <img src="/tech/linux.svg" alt="Linux" />
        <img src="/tech/sql.svg" alt="SQL" />
        <img src="/tech/git.svg" alt="Git" />
        <img src="/tech/github.svg" alt="GitHub" />
        <img src="/tech/gemini.png" alt="Gemini" />
        <img src="/tech/gpt.png" alt="GPT" />
        <img src="/tech/word.svg" alt="Word" />
        <img src="/tech/powepoint.svg" alt="PowerPoint" />
        <img src="/tech/canva.svg" alt="Canva" />
        <img src="/tech/excel.svg" alt="Excel" />
          <img src="/tech/linkdin.svg" alt="LinkedIn" />
          <img src="/tech/express.svg" alt="express" />
          <img src="/tech/node.png" alt="express" />
        <img src="/tech/html.svg" alt="HTML" />
        <img src="/tech/css.svg" alt="CSS" />
        <img src="/tech/js.svg" alt="JS" />
        <img src="/tech/vscode.png" alt="VS Code" />
        <img src="/tech/java.svg" alt="Java" />
        <img src="/tech/python.svg" alt="Python" />
        <img src="/tech/cpp.svg" alt="C++" />
        <img src="/tech/c.png" alt="C" />
        <img src="/tech/window.svg" alt="Windows" />
        <img src="/tech/linux.svg" alt="Linux" />
        <img src="/tech/sql.svg" alt="SQL" />
        <img src="/tech/git.svg" alt="Git" />
        <img src="/tech/github.svg" alt="GitHub" />
        <img src="/tech/gemini.png" alt="Gemini" />
        <img src="/tech/gpt.png" alt="GPT" />
        <img src="/tech/word.svg" alt="Word" />
        <img src="/tech/powepoint.svg" alt="PowerPoint" />
        <img src="/tech/canva.svg" alt="Canva" />
        <img src="/tech/excel.svg" alt="Excel" />
        <img src="/tech/linkdin.svg" alt="LinkedIn" />
      </div>
    </div>
  </div>
</div>


      </div>
    </section>
  )
}

function LocationIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

