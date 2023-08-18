import { useState } from "react"
import { VerCursos } from "../componentes/VerCursos"
import { VerDescripcion } from "../componentes/VerDescripcion"

export const SobreMi = () => {
    const [ cursos, setCursos ] = useState(false)
    return(
        <section className="contenedor-sobre-mi" id="sobreMi">
            <p className="sobre-mi-titulo">{cursos ? 'Mis cursos' : 'Sobre mí'}</p>
            {
                cursos ?
                <VerCursos />
                :
                <VerDescripcion />
            }
            <div className="contenedor-boton-sobre-mi">
                <p onClick={()=> setCursos(!cursos)} className="sobre-mi-boton">{cursos ? 'Volver' : 'Ver mis cursos'}</p>
            </div>
        </section>
    )
}