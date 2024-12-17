'use client'

import styles from "./page.module.css";

const Page = () => {

  return (
    <section className={styles.container}>
      <video className={styles.video} autoPlay muted loop>
        <source src="/proyecto_gif.mp4" type="video/mp4" />
        Tu navegador no soporta la etiqueta del video.
      </video>
      <h1 className={styles.title}>iMA-SUMAC</h1>
      <h2 className={styles.typingText}>PINTORES DEL MERCOSUR</h2>
    </section>
  );
}

export default Page;