import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.pagewrapper}>
      <section className={styles.authpages_section}>
        <span className={styles.authpages_heroimg}>
          <Image
            src="https://i.postimg.cc/tggyFBWh/login-img.png"
            alt="an hero img"
            layout="fill"
          />
        </span>
      </section>

      <section className={styles.authpages_section}>
        <h1 className={styles.title}>Welcome to Next.js!</h1>
      </section>
    </div>
  );
}
