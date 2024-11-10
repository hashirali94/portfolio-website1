import Link from 'next/link'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <p>&copy; 2023 Syed Hashir Ali. All rights reserved.</p>
        <div className={styles.links}>
          <Link href="https://github.com/panaverse/learn-nextjs" target="_blank" rel="noopener noreferrer" className={styles.link}>
            GitHub
          </Link>
          <Link href="https://vercel.com/hashir-alis-projects-7df8d8df" target="_blank" rel="noopener noreferrer" className={styles.link}>
            Vercel
          </Link>
        </div>
      </div>
    </footer>
  )
}