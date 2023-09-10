import { MisCursos } from "../../data/DataCursos"

export const VerCursos = () => {
    return(
        <div className="contenedor-descripcion-cursos">
            {
                MisCursos.map(curso => (
                    <div key={curso.nombre} className="curso-individual"> 
                        <p className="titulo-curso">{curso.nombre}</p>
                        <p className="descripçion-curso">{curso.descripcion}</p>
                    </div>
                ))
            }
        </div>
    )
}