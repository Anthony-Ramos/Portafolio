import { useState } from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook, FaYoutube } from 'react-icons/fa'
import { SiTiktok } from 'react-icons/si'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <div className='menu'>
        <a href="">Inicio</a>
        <a href="">Acerca de</a>
        <a href="">Contactame</a>
      </div>
      <div className="encabezado">
        <div className="primero">
          <h1 className="nombre">Pablo Anthony Ramos Zepeda</h1>
          <h2 className="perfil">Full-Stack junior con enfoque en Backend</h2>
          <button className='portafolio'>Portafolio</button>

          <div className='redes'>
            <a href="https://linkedin.com/in/pablo-anthony-ramos-zepeda-043138312" target='_blank' rel='noopener noreferrer' className='icono'>
              <FaLinkedin />
            </a>
            <a href="https://tiktok.com/@anthony_.ramos?is_from_webapp=1&sender_device=pc" target='_blank' rel='noopener noreferrer' className='icono'>
              <SiTiktok />
            </a>
          </div>
        </div>
        <div className="segundo">
          <div className="img" id='1'></div>
          <div className="img" id='2'></div>
          <div className="img" id='3'></div>
        </div>
      </div>

    </>
  )
}

export default App
