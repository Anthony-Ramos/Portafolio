import Header from "./components/Header";
import Inicio from "./sections/Inicio";
import Portafolio from "./sections/Portafolio";
import Acerca from "./sections/Acerca";
import Contacto from "./sections/Contacto";

import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Inicio />
      <Portafolio />
      <Acerca />
      <Contacto />
    </>
  );
}

export default App;
