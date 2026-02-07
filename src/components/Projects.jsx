// import { Github, ExternalLink } from "lucide-react"

// const projects = {
//   basics: [
//     {
//       name: "Todo List App",
//       video: "/projects/demo.mp4",
//       tech: ["/tech/html.svg", "/tech/css.svg", "/tech/javascript.svg"],
//       github: "https://github.com/your-username/todo",
//       live: ""
//     },
//     {
//       name: "Login / Signup Page",
//       video: "/projects/auth.mp4",
//       tech: ["/tech/html.svg", "/tech/css.svg", "/tech/javascript.svg"],
//       github: "https://github.com/your-username/auth",
//       live: ""
//     }
//   ],

//   games: [
//     {
//       name: "Tic Tac Toe",
//       video: "/projects/tictactoe.mp4",
//       tech: ["/tech/javascript.svg"],
//       github: "https://github.com/your-username/tictactoe",
//       live: ""
//     },
//     {
//       name: "Chess Game",
//       video: "/projects/chess.mp4",
//       tech: ["/tech/javascript.svg"],
//       github: "https://github.com/your-username/chess",
//       live: ""
//     }
//   ],

//   advanced: [
//     {
//       name: "Fake News Detection",
//       video: "/projects/fakenews.mp4",
//       tech: ["/tech/react.svg", "/tech/python.svg", "/tech/ml.svg"],
//       github: "https://github.com/your-username/fake-news",
//       live: ""
//     },
//     {
//       name: "CampusConnect",
//       video: "/projects/campusconnect.mp4",
//       tech: ["/tech/react.svg", "/tech/nodejs.svg", "/tech/mongodb.svg"],
//       github: "https://github.com/your-username/campusconnect",
//       live: ""
//     }
//   ]
// }

// function ProjectSection({ title, subtitle, data }) {
//   return (
//     <section className="project-section">
//       <h2>{title}</h2>
//       <p className="section-subtitle">{subtitle}</p>

//       <div className="projects-grid">
//         {data.map((p, i) => (
//           <div className="project-card" key={i}>
//             <video
//               src={p.video}
//               muted
//               loop
//               autoPlay
//               playsInline
//               className="project-video"
//             />

//             <h3>{p.name}</h3>

//             <div className="project-tech">
//               {p.tech.map((t, idx) => (
//                 <img src={t} key={idx} alt="tech" />
//               ))}
//             </div>

//             <div className="project-links">
//               <a href={p.github} target="_blank">
//                 <Github size={20} />
//               </a>

//               {p.live && (
//                 <a href={p.live} target="_blank">
//                   <ExternalLink size={20} />
//                 </a>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   )
// }

// export default function Projects() {
//   return (
//     <section className="projects">
//       <div className="projects-header">
//         <h1>Projects</h1>
//         <p>Built step by step — from basics to real-world systems.</p>
//       </div>

//       <ProjectSection
//         title="Basics"
//         subtitle="Foundation projects that built my core skills."
//         data={projects.basics}
//       />

//       <ProjectSection
//         title="Interactive & Games"
//         subtitle="Logic-heavy projects to strengthen problem solving."
//         data={projects.games}
//       />

//       <ProjectSection
//         title="Placement Ready"
//         subtitle="End-to-end projects solving real-world problems."
//         data={projects.advanced}
//       />
//     </section>
//   )
// }

export default function Projects() {
    return (
      <section className="projects">
        <div className="projects-header">
          <h1>Projects</h1>
          <h1>🔴 Section under development</h1>
        </div>
      </section>
    )
  }
  