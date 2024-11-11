//import Image from "next/image";
import styles from "./page.module.css";
import AboutMe from './about_me';

const Page = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Bienvenido</h1>
      <h2>Sumérgete en cada pieza y observa cómo el arte evoluciona ante tus ojos. Cada fragmento tiene una historia por contar</h2>
    </section>
   )
  }
  
 export default Page;