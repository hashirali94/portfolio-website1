import { title } from 'process'
import styles from './projects.module.css'

export default function Projects() {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution built with Next.js, featuring user authentication, product management, and secure payment integration.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "CSS"]
    },
    {
      title: "Task Management App",
      description: "A responsive task management application with real-time updates, built using React and Firebase.",
      technologies: ["React", "CSS", "CSS Modules"]
    },
    {
      title: "Data Visualization Dashboard",
      description: "An interactive dashboard for visualizing complex datasets, built with D3.js and React.",
      technologies: ["React","Html", "CSS", "Node.js"]
    },
    {
        title: "spotify clone",
        description:"we will be building a Spotify Clone using ReactJS and get all the required data from the official Spotify.",
        technologies: ["React","Html", "CSS", "Node.js"]

    }
  ]

  return (
    <div className="container">
      <h1 className="section-title">My Projects</h1>
      <div className={styles.projectGrid}>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectCard} style={{animationDelay: `${index * 0.1}s`}} >
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div className={styles.technologies}>
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex} className={styles.tech}>{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

