import { useState } from "react"
import { Redes } from "./Redes"

export const NavBar = () => {
    const [ nav, setNav ] = useState(window.matchMedia("(max-width: 768px)").matches)
    
    function manejoNav() {
        window.matchMedia("(max-width: 768px)").matches && setNav(!nav)
    }

    return(
        <>
                <nav className={nav ? "contenedor-nav" : "contenedor-nav nav-background"} id="contenedor-nav">
                    <div className="logo-nav" id="logo-nav">
                        <a href="#" className="logo">AR</a>
                        {
                            nav ?
                            <img src="icons/menu.svg"  onClick={()=> setNav(!nav)} className="abrir-nav" alt="Abrir Menu" id="abrir-menu" />
                            :
                            <p className="cerrar-nav" onClick={()=> setNav(!nav)}>x</p>
                        }
                    </div> 
                    {
                        !nav &&
                        <ul className="contenedor-links" id="contenedor-links">
                            <li><a href="#sobreMi"onClick={manejoNav}>Sobre mí</a></li>
                            <li><a href="#proyectos" onClick={manejoNav}>Proyectos</a></li>
                            <li><a href="#contacto" onClick={manejoNav}>Contacto</a></li>
                            <Redes clase="redes-nav"/>
                        </ul>
                    }
                </nav>
        </>
    )
}