import AnimatedSection from "../components/AnimatedSection";
import SocialLinks from "../components/SocialLinks";
import Technologies from "../components/Technologies";

import { FaCss3, FaGithub, FaHtml5, FaJava, FaLinkedin, FaPhp, FaPython, FaVuejs, FaYoutube } from "react-icons/fa";
import { SiApache, SiCplusplus, SiDocker, SiDotnet, SiMysql, SiPostgresql, SiTiktok } from "react-icons/si";
import { useState } from "react";
import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiJavascript, SiMongodb } from "react-icons/si";

const tecnologias = [
  { name: "TypeScript", icon: <SiJavascript /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "SQL", icon: <SiMysql /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "Docker", icon: <SiDocker /> },
  { name: "Python", icon: <FaPython /> },
];

function Inicio() {
  const redesIconos = [
    { Icon: <FaLinkedin />, url: "https://linkedin.com/in/pablo-anthony-ramos-zepeda-043138312", color: "#0d569b" },
    { Icon: <SiTiktok />, url: "https://tiktok.com/@anthony_.ramos", color: "#0084ff" },
    { Icon: <FaGithub />, url: "https://github.com/Anthony-Ramos", color: "#0698ff" },
    { Icon: <FaYoutube />, url: "https://www.youtube.com/@PabloAnthonyRamosZepeda", color: "#ff0000" },
  ];

  const imagenes = [
    { id: 1, src: "", color: "#f87171" },
    { id: 2, src: "", color: "#34d399" },
    { id: 3, src: "", color: "#60a5fa" },
  ];

  const [current, setCurrent] = useState(0);

  return (
    <AnimatedSection id="inicio" className="inicio">
      <div className="encabezado">
        <div className="primero">
          <h1 className="nombre">Pablo Anthony Ramos Zepeda</h1>
          <h2 className="perfil">Backend Developer Jr | APIs REST · SQL · Docker
          </h2>
          <p className="descripcion">
            Backend Developer Jr enfocado en el desarrollo de APIs REST,
            modelado de bases de datos SQL y contenedores Docker.
            Experiencia integrando backend con frontend y servicios externos.

          </p>



          <button className="botonp">Descargar CV</button>
          <button className="botonp">Solicitar Servicio</button>

          <SocialLinks links={redesIconos} />
        </div>
        <div className="tecnologias">
          <Technologies techs={tecnologias} />
          <p>React · Java · Python · Php· MongoDB</p>
        </div>
      </div>
    </AnimatedSection>
  );
}

export default Inicio;
