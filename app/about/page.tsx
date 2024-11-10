"use client"
import Link from 'next/link'
import styles from './about.module.css'

export default function About() {
  return (
    <div className="container">
      <h1 className="section-title">About Me</h1>
      <div className={styles.content}>
        <p>
          Hello! I'm Syed Hashir Ali, a passionate Full Stack Developer with expertise in JavaScript, TypeScript, Next.js, Python, and CSS. I love creating efficient, scalable, and user-friendly web applications that solve real-world problems.
        </p>
        <p>
          With a strong foundation in both front-end and back-end technologies, I enjoy working on all aspects of web development. My experience with Next.js allows me to build performant and SEO-friendly React applications, while my skills in Python enable me to develop robust server-side solutions.
        </p>
        <p>
          I'm always eager to learn new technologies and stay up-to-date with the latest trends in web development. When I'm not coding, you can find me contributing to open-source projects, writing technical blog posts, or mentoring aspiring developers.
        </p>
        <div className={styles.links}>
          <p>Check out my work:</p>
          <Link href="https://github.com/panaverse/learn-nextjs" target="_blank" rel="noopener noreferrer" className={styles.link}>
            GitHub Repository
          </Link>
          <Link href="https://vercel.com/hashir-alis-projects-7df8d8df" target="_blank" rel="noopener noreferrer" className={styles.link}>
            Vercel Projects
          </Link>
        </div>
      </div>
    </div>
  )
}