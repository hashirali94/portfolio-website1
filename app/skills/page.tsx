'use client'

import { useEffect, useState } from 'react'
import styles from './skills.module.css'

export default function Skills() {
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    setAnimate(true)
  }, [])

  const skills = [
    { name: "JavaScript", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "Next.js", level: 80 },
    { name: "React", level: 85 },
    { name: "Python", level: 75 },
    { name: "CSS", level: 80 },
    { name: "HTML", level: 90 },
    { name: "Node.js", level: 70 },
    
  ]

  return (
    <div className="container">
      <h1 className="section-title">My Skills</h1>
      <div className={styles.skillsGrid}>
        {skills.map((skill, index) => (
          <div key={index} className={styles.skillItem}>
            <div className={styles.skillInfo}>
              <span className={styles.skillName}>{skill.name}</span>
              <span className={styles.skillLevel}>{skill.level}%</span>
            </div>
            <div className={styles.skillBar}>
              <div 
                className={`${styles.skillProgress} ${animate ? styles.animate : ''}`} 
                style={{ width: `${skill.level}%`, transitionDelay: `${index * 0.1}s` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}