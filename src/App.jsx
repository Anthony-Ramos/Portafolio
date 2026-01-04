import { FaGithub, FaLinkedin, FaYCombinator, FaYoutube } from 'react-icons/fa'
import { SiTiktok } from 'react-icons/si'
import { useEffect, useRef, useState } from "react";
import './App.css'

function AnimatedSection({ children, id }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={ref}
      className={`section ${visible ? "visible" : ""}`}
    >
      {children}
    </section>
  );
}

function App() {
  const menuLinks = [
    { name: "Inicio", href: "#inicio" },
    { name: "Portafolio", href: "#portafolio" },
    { name: "Acerca de", href: "#acerca" },
    { name: "Contáctame", href: "#contacto" },
  ];

  const redesIconos = [
    { Icon: <FaLinkedin />, url: "https://linkedin.com/in/pablo-anthony-ramos-zepeda-043138312", color: '#0d569b' },
    { Icon: <SiTiktok />, url: "https://tiktok.com/@anthony_.ramos?is_from_webapp=1&sender_device=pc", color: '#0084ff' },
    { Icon: <FaGithub />, url: "https://github.com/Anthony-Ramos", color: '#0698ff' },
    { Icon: <FaYoutube />, url: "https://www.youtube.com/@PabloAnthonyRamosZepeda", color: '#ff0000' },
  ];

  const imagenes = [
    { id: 1, src: '', color: '#f87171' },
    { id: 2, src: '', color: '#34d399' },
    { id: 3, src: '', color: '#60a5fa' },
  ];
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % imagenes.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + imagenes.length) % imagenes.length);
  };

  return (
    <>
      <header>
        <div className='menu'>
          {menuLinks.map((link) => (
            <a key={link.name} href={link.href}>{link.name}</a>
          ))}
        </div>
      </header>
      {/*Seciion de home o inicio */}
      <AnimatedSection id='inicio' className='inicio'>
        <div className="encabezado">
          <div className="primero">
            <h1 className="nombre">Pablo Anthony Ramos Zepeda</h1>
            <h2 className="perfil">Full-Stack junior con enfoque en Backend</h2>
            <button className='botonp'>Descargar CV</button>
            <button className='botonp'>Solicitar Servicio</button>

            <div className='redes'>
              {redesIconos.map((social, index) => (
                <a key={index}
                  href={social.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='icono'
                  style={{ '--hover-color': social.color }}>
                  {social.Icon}
                </a>
              ))}
            </div>
          </div>

          {/*Div que contiene las imagenes con los botones para anterior imagen y siguiente imagen */}
          <div className="segundo">
            <div className='carrusel'>
              {imagenes.map((img, index) => (
                <div
                  key={img.id}
                  id={`img-${img.id}`}
                  className="slide"
                  style={{
                    opacity: index === current ? 1 : 0,
                    backgroundColor: img.color,
                  }}>
                  <img src={img.src} alt={`Imagen ${img.id}`} />
                </div>
              ))}
            </div>

            <div className='botones'>
              <button onClick={prevSlide} className="botonp">Anterior</button>
              <button onClick={nextSlide} className="botonp">Siguiente</button>
            </div>
          </div>

        </div>
      </AnimatedSection>
      <AnimatedSection id="portafolio">
        <div className="contenido">Portafolio</div>
      </AnimatedSection>

      <AnimatedSection id="acerca">
        <div className="contenido">Acerca de</div>
      </AnimatedSection>

      <AnimatedSection id="contacto">
        <div className="contenido">Contacto</div>
      </AnimatedSection>
    </>
  )
}

export default App
