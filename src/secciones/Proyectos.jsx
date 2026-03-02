import { useState } from "react"
import { ProyectosCards } from "../componentes/Proyectos/ProyectosCards"
import { DataProyectos } from "../data/DataProyectos"
import { ProyectoIndividual } from "../componentes/Proyectos/ProyectoIndividual"

export const Proyectos = () => {
    const [ id, setId ] = useState()
    let proyectoElegido = DataProyectos.find((proyecto) => proyecto.id === id)

    return(
        <section className="contenedor-proyectos" id="proyectos">
            {
                id ?
                    <ProyectoIndividual id={id} cerrar={()=>setId(null)} proyectoElegido={proyectoElegido}/>
                :
                <div className="contenedor-cards">
                {
                    DataProyectos.map((proyecto) => (
                        <div key={proyecto.id} className="contenedor-proyecto-individual" onClick={()=> setId(proyecto.id)}>
                            <ProyectosCards proyecto={proyecto}/>
                        </div>
                    ))
                }
                </div>
            }
            
        </section>
    )
}