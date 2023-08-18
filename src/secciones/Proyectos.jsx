import { useState } from "react"
import { ProyectosCards } from "../componentes/ProyectosCards"
import { DataProyectos } from "../data/DataProyectos"
import { ProyectoIndividual } from "../componentes/ProyectoIndividual"

export const Proyectos = () => {
    const [ id, setId ] = useState()

    return(
        <section className="contenedor-proyectos" id="proyectos">
            {
                id ?
                    <ProyectoIndividual id={id} setId={setId} DataProyectos={DataProyectos}/>
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