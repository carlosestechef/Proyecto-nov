/* ABOUT-ME */
'use client'

import React, { useState } from 'react';

const AboutMeModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null; // Si el modal no está abierto, no se muestra nada

  const [activeTab, setActiveTab] = React.useState(0); // Estado para controlar la pestaña activa

  // Función para cambiar de pestaña
  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div style={overlayStyle} onClick={onClose}>
      <div style={modalStyle} onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} style={closeButtonStyle}>
          <span style={{ fontSize: '18px', fontWeight: 'bold' }}>&times;</span>
        </button>
        {children}
        
        {/* Pestañas para navegación interna */}
        <div style={tabsContainerStyle}>
          <button
            style={activeTab === 0 ? activeTabStyle : tabButtonStyle}
            onClick={() => handleTabClick(0)}
          >
            Mi historia
          </button>
          <button
            style={activeTab === 1 ? activeTabStyle : tabButtonStyle}
            onClick={() => handleTabClick(1)}
          >
            La empresa
          </button>
        </div>

        {/* Contenido del Modal basado en la pestaña activa */}
        <div style={contentStyle}>
          {activeTab === 0 && (
            <div>
              <h2></h2>
              <p>**La historia de Cristian y la fundación de iM** Cristian siempre había sentido una conexión profunda con los colores, las formas y las texturas. Desde niño, la pintura fue su refugio, su lenguaje y su pasión. Creció en un barrio humilde de Buenos Aires, donde el arte parecía un lujo lejano para muchos. Pero para él, el lienzo era el único espacio donde las cosas tenían sentido, y con el tiempo, su talento creció, al igual que su habilidad para transformar los espacios y las superficies en obras de arte.A los 53 años, Cristian era un pintor que había recorrido un largo camino. Su vida no había sido fácil. A pesar de los escasos recursos, siempre había trabajado incansablemente en su oficio. Su jornada comenzaba temprano, en el taller improvisado que tenía en su casa, donde combinaba la pintura decorativa con el arte mural y la restauración de viviendas. Era un hombre que había aprendido a hacer de la escasez una virtud, buscando soluciones creativas para cada desafío.En 2023, tras haber tenido trabajos esporádicos y un sinfín de experiencias en la pintura de interiores, Cristian decidió dar un paso más grande: fundar su propia empresa. Tenía una visión clara: crear una empresa que no solo fuera una referencia en pintura, sino que abarcara también la renovación de espacios, uniendo la pintura con la arquitectura y el diseño de interiores. Nació así **iM**, un nombre simple, pero lleno de significado. "iM" representaba la fusión de dos conceptos fundamentales: *Inmuebles* y *Muralismo*.
              **Un legado de colores y espacios**Para Cristian, iM no solo era una empresa, sino una forma de dejar su huella en el mundo. A medida que pasaban los años, y el trabajo de iM se expandía por toda la ciudad, él continuaba dedicándose a cada obra como si fuera la primera. La pintura no solo era su profesión, era su forma de vida.A sus 53 años, Cristian miraba atrás y se sentía orgulloso de lo que había logrado. Había pasado de ser un pintor solitario a liderar una empresa que transformaba espacios con su arte. Había creado algo mucho más grande que un negocio: había creado un legado, un lugar donde la creatividad y la pasión se unían con la estructura y la función de los inmuebles. Cristian, con pocos recursos pero con una visión clara, había logrado que **iM** fuera una referencia en el mundo de la pintura y la renovación de espacios en Buenos Aires. Y aunque la competencia seguía siendo dura, él sabía que lo más importante era lo que había logrado con esfuerzo, paciencia y mucho amor por lo que hacía: transformar las paredes, pero también transformar la vida de quienes vivían y trabajaban en esos espacios.En el 2023, Cristian no solo había fundado una empresa; había creado un puente entre la pintura, la restauración y el alma de cada lugar que tocaba, dejando en cada pared un pedazo de sí mismo.
              </p>
            </div>
          )}

          {activeTab === 1 && (
            <div>
              <h2>iM </h2>
              <p>**El comienzo**Los primeros días de iM fueron complicados. Cristian no contaba con un gran capital ni con equipos de trabajo. Su único recurso eran sus manos, su destreza y su experiencia. A pesar de no tener una oficina o grandes instalaciones, con mucho esfuerzo logró conseguir un pequeño espacio donde almacenaba sus herramientas y materiales. Su primer desafío fue la búsqueda de clientes. Vivir en Buenos Aires, con su vibrante pero saturado mercado, hacía que la competencia fuera feroz, y muchos de los clientes potenciales desconfiaban de una nueva empresa sin un historial de trabajo.Pero Cristian sabía que, como pintor, su valor estaba en la calidad de lo que podía ofrecer. Decidió empezar por trabajos pequeños en su barrio, renovando casas de amigos y conocidos, y realizando murales en espacios públicos o privados. Al principio, trabajaba solo, de sol a sol. Era un hombre que pintaba las paredes con precisión, pero también llenaba esos espacios con su alma.Uno de sus primeros encargos fue en una pequeña tienda de barrio, donde debía restaurar las paredes de un local que estaba en muy mal estado. El dueño, un comerciante local, le pidió que "pintara algo bonito". Cristian decidió no solo pintar las paredes, sino crear un mural que representara la esencia del lugar: una mezcla de color y textura que capturaba la vida vibrante de Buenos Aires. El mural fue un éxito rotundo. En poco tiempo, el comercio empezó a recibir más clientes, y muchos de ellos se acercaron a Cristian preguntando por su trabajo.**Creciendo a base de esfuerzo y confianza**La voz se fue corriendo, y la demanda de los servicios de iM empezó a crecer. Cristian no solo pintaba casas y locales comerciales, sino que se metió de lleno en el negocio de la restauración de inmuebles, donde la combinación de su habilidad artística y el conocimiento de la construcción le permitió ofrecer una propuesta única. Transformaba viejos edificios en espacios modernos sin perder la esencia original. De esta manera, iM se fue posicionando como una empresa que entendía el valor de conservar lo clásico mientras se renovaba lo viejo.A medida que el negocio fue prosperando, Cristian fue incorporando poco a poco a su equipo a otros pintores y artesanos. Su empresa fue creciendo a una velocidad inesperada, pero siempre mantuvo el enfoque en la calidad del trabajo, en el respeto por el detalle y en la creación de ambientes que hablasen por sí mismos. Cristian sabía que la confianza de sus clientes era la clave de su éxito, y esa confianza la ganaba trabajando con dedicación y pasión en cada obra..</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Estilos para el overlay (fondo)
const overlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.9)', // Fondo oscuro
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000,
  opacity: 1,
  animation: 'fadeIn 0.3s forwards', // Animación de entrada
};

// Estilos para el modal (contenido)
const modalStyle = {
  background: '#fff',
  width: '100%',
  height: '100%',
  maxWidth: '1000px', // Tamaño máximo para que no se expanda demasiado
  maxHeight: '90vh', // Limita la altura del modal al 90% de la pantalla
  padding: '30px',
  borderRadius: '12px',
  boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
  position: 'relative',
  animation: 'slideUp 0.3s ease-out', // Animación de entrada
  overflowY: 'auto', // Añadir desplazamiento vertical si el contenido es largo
  overflowX: 'hidden', // Evitar desplazamiento horizontal
};

// Estilos para el botón de cierre
const closeButtonStyle = {
  position: 'absolute',
  top: '15px',
  right: '15px',
  background: 'none',
  border: 'none',
  fontSize: '24px',
  cursor: 'pointer',
  color: '#333',
  padding: '5px 10px',
  borderRadius: '50%',
  transition: 'background-color 0.2s ease',
  zIndex: 1001, // Asegura que el botón esté sobre el modal
};

// Estilos para el contenido dentro del modal
const contentStyle = {
  marginTop: '20px',
  display: 'flex',
  flexDirection: 'column',
  overflowY: 'auto', // Añadir desplazamiento si el contenido es largo
  maxHeight: '80vh', // Evitar que el contenido se salga de la pantalla
  paddingBottom: '20px', // Espacio para el scroll
};

// Estilos para las pestañas
const tabsContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '20px',
};

const tabButtonStyle = {
  padding: '10px 20px',
  margin: '0 10px',
  fontSize: '16px',
  backgroundColor: '#f1f1f1',
  border: '1px solid #ddd',
  borderRadius: '5px',
  cursor: 'pointer',
  transition: 'background-color 0.3s',
};

const activeTabStyle = {
  padding: '10px 20px',
  margin: '0 10px',
  fontSize: '16px',
  backgroundColor: '#6DBF60',
  color: '#000',
  border: '1px solid #ddd',
  borderRadius: '5px',
  cursor: 'pointer',
  transition: 'background-color 0.3s',
};

export default AboutMeModal;