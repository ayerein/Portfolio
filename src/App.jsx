
import './scss/App.css'
import { Contacto } from './secciones/Contacto'
import { Home } from './secciones/Home'
import { NavBar } from './componentes/NavBar'
import { Proyectos } from './secciones/Proyectos'
import { Redes } from './componentes/Redes'
import { SobreMi } from './secciones/SobreMi'

function App() {
  return (
    <>
      <NavBar />
      <Redes />
      <Home />
      <SobreMi />
      <Proyectos />
      <Contacto />
    </>
  )
}

export default App
