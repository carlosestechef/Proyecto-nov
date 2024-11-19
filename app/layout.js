'use client'; // Indica que el componenete es del lado del cliente

import React, { useState } from 'react';
import Link from 'next/link'; /* importa los link de navegación */
import Image from 'next/image'; /* importación para las imagenes */
import ContactFormModal from './contact-form/page';
import AboutMeModal from './about-me/page';
import "./globals.css";

  export default function RootLayout({ children }) {
    const [isAboutMeModalOpen, setIsAboutMeModalOpen] = useState(false);
    const [isContactFormModalOpen, setIsContactFormModalOpen] = useState(false);
    
    const openAboutMeModal = () => setIsAboutMeModalOpen(true);
    const closeAboutMeModal = () => setIsAboutMeModalOpen(false);
    const openContactFormModal = () => setIsContactFormModalOpen(true);
    const closeContactFormModal = () => setIsContactFormModalOpen(false);

    return (
      <html lang="es">
        <head>
          <meta charSet="UTF-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <title>iMA SUMAC pintores del mercosur</title>
          <link rel="icon" href="/favicon.ico" />
        </head>
        <body>
          <header>
            <nav>
              <ul>
                <li className='logo'><Link href="/"><img src='/del_favcicon.jpg' alt='iM' width={40} height={30}/></Link></li>
                <li><button className='contact' onClick={openContactFormModal}>CONTACTAME</button></li>
                <li><button className='btn_about-me' onClick={openAboutMeModal}>HISTORIA</button></li>
                <li><button>MAS</button></li>
              </ul>
            </nav>
          </header>

          {/*Aquí renderizamos el contenido del Modal si está abierto  */}
          <ContactFormModal isOpen={isContactFormModalOpen} onClose={closeContactFormModal}></ContactFormModal>
          <AboutMeModal isOpen={isAboutMeModalOpen} onClose={closeAboutMeModal}></AboutMeModal>

        {/* CONTENIDO PRINCIPAL */}
          <main>{children}
            <div className="image-row">
              <div className="image-container">
                <Image
                  className="image_1"
                  src="/image_1.jpg"
                  alt="breve descripción de la imagen_1"
                  width={300}
                  height={300}
                  sizes="(max-width: 768px) 40vw, (max-width: 1024px) 30vw, 300px"
                />
              </div>
              <div className="image-container">
                <Image
                  className="image_2"
                  src="/image_2.jpg"
                  alt="breve descripcion de la imagen_2"
                  width={300}
                  height={300}
                  sizes="(max-width: 768px) 60vw, (max-width: 1024px) 30vw, 300px"
                />
              </div>
              <p className="description">
              Lorem ipsum dolor sit amet consectetur adipiscing elit sodales, est conubia himenaeos magnis parturient aliquam semper habitant, congue pellentesque natoque vestibulum ornare velit litora. Vehicula molestie massa ultrices id pharetra in aliquam, nulla dui tristique consequat ante tellus, hac purus suspendisse diam taciti erat. 
              </p>
            </div>
            
            <div className="image-row">              
              <div className="image-container">
                <Image
                  className="image_3"
                  src="/image_3.jpg"
                  alt="breve descripcion de la imagen_3"
                  width={1200}
                  height={800}
                  sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw" // Adapta la imagen según el ancho de la pantalla
                />
              </div>
              <div className="image-container">
                <Image
                  className="image_4"
                  src="/image_4.jpg"
                  alt="breve descripcion de la imagen_4"
                  width={1200}
                  height={800}
                  sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw" // Adapta la imagen según el ancho de la pantalla
                />
              </div>
              <p className="description">
              Lorem ipsum dolor sit amet consectetur adipiscing elit sodales, est conubia himenaeos magnis parturient aliquam semper habitant, congue pellentesque natoque vestibulum ornare velit litora. Vehicula molestie massa ultrices id pharetra in aliquam, nulla dui tristique consequat ante tellus, hac purus suspendisse diam taciti erat. 
              </p>
              </div>

              <div className="image-row">
              <div className="image-container">
                <Image
                  className="image_5"
                  src="/image_5.jpg"
                  alt="breve descripción de la imagen_5"
                  width={300}
                  height={300}
                  sizes="(max-width: 768px) 40vw, (max-width: 1024px) 30vw, 300px"
                />
              </div>
              <div className="image-container">
                <Image
                  className="image_6"
                  src="/image_6.jpg"
                  alt="breve descripcion de la imagen_6"
                  width={300}
                  height={300}
                  sizes="(max-width: 768px) 60vw, (max-width: 1024px) 30vw, 300px"
                />
              </div>
              <p className="description">
              Lorem ipsum dolor sit amet consectetur adipiscing elit sodales, est conubia himenaeos magnis parturient aliquam semper habitant,  
              </p>
            </div>
            <div className="image-row">
              <div className="image-container">
                <Image
                  className="image_7"
                  src="/image_7.jpg"
                  alt="breve descripción de la imagen_7"
                  width={300}
                  height={300}
                  sizes="(max-width: 768px) 40vw, (max-width: 1024px) 30vw, 300px"
                />
              </div>
              <div className="image-container">
                <Image
                  className="image_8"
                  src="/image_8.jpg"
                  alt="breve descripcion de la imagen_8"
                  width={300}
                  height={300}
                  sizes="(max-width: 768px) 60vw, (max-width: 1024px) 30vw, 300px"
                />
              </div>
              <p className="description">
              Lorem ipsum dolor sit amet consectetur adipiscing elit sodales, est conubia himenaeos magnis parturient aliquam semper habitant,  
              </p>
            </div>
            <div className="image-row">
              <div className="image-container">
                <Image
                  className="image_9"
                  src="/image_9.jpg"
                  alt="breve descripción de la imagen_9"
                  width={300}
                  height={300}
                  sizes="(max-width: 768px) 40vw, (max-width: 1024px) 30vw, 300px"
                />
              </div>
              <div className="image-container">
                <Image
                  className="image_10"
                  src="/image_10.jpg"
                  alt="breve descripcion de la imagen_10"
                  width={300}
                  height={300}
                  sizes="(max-width: 768px) 60vw, (max-width: 1024px) 30vw, 300px"
                />
              </div>
             <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit sodales, est conubia himenaeos magnis parturient aliquam semper habitant,
              Lorem ipsum dolor sit amet consectetur adipiscing elit sodales, est conubia himenaeos magnis parturient aliquam semper habitant, congue pellentesque natoque vestibulum ornare velit litora. Vehicula molestie massa ultrices id pharetra in aliquam, nulla dui tristique consequat ante tellus, hac purus suspendisse diam taciti erat. 
             </p>
            </div>
          </main>

          <footer>
            <div className='footer_all'>
              <p>Derechos reservados &copy;</p>
                <div className="social-links">
                  <a href="https://www.instagram.com/pintordecoraciones?igsh=MTRsejczdTNnb2FiOA==" target="_blank" rel="noopener noreferrer">
                    <img src="/insta.png" alt="Instagram" width={30} height={30} />
                  </a>
                  <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                    <img src="/wpp.png" alt="WhatsApp" width={30} height={30} />
                  </a>
                  <a href="mailto:tu-email@gmail.com" target="_blank" rel="noopener noreferrer">
                    <img src="/gm.png" alt="Gmail" width={30} height={30} />
                  </a>
                </div>
            </div>
          </footer>
        </body>
      </html>
    )
  }