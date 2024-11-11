import Link from 'next/link';
import "./globals.css";
import Image from 'next/image'

  export default function RootLayout({ children }) {
    return (
      <html lang="es">
        <head>
          <meta charSet="UTF-8"/>
          <title>Galery</title>
          <link rel="icon" href="/favicon.ico" />
        </head>
        <body>
          <header>
            <nav>
              <ul>
                <li><Link href="/">Inicio</Link></li>
                <li><Link href="/about_me">Acerca de mi</Link></li>
                <li><button onClick="openForm">Contactame</button></li> {/* Agregar formulario de contacto */}
              </ul>
            </nav>
          </header>
        
          <main>{children}
            <Image
            className="image_1"
            src="/image_1.jpg"
            alt="breve descripción de la imagen_1"
            width={300}
            height={300}
            />
            <Image 
            src="/image_2.jpg"
            alt="breve descripcion de la imagen_2"
            width={300}
            height={300}
            />
          </main>
  
          <footer>
            <p>© PINTURAS 2024</p>
          </footer>
        </body>
      </html>
    )
  }