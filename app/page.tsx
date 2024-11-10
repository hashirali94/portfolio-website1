import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.home}>
      <h1 className={styles.title}>Welcome to My Portfolio</h1>
      <p className={styles.subtitle}>Hi, I'm Syed Hashir Ali, a Full Stack Developer</p>
      <div className={styles.cta}>
        <Link href="/about" className={`${styles.ctaButton} ${styles.ctaButtonLeft}`}>Learn More About Me</Link>
        <Link href="/projects" className={`${styles.ctaButton} ${styles.ctaButtonRight}`}>View My Projects</Link>
      </div>
    </div>
  )
}
