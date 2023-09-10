
export const ProyectoIndividual = ({ id, setId, DataProyectos }) => {
    let proyectoElegido = DataProyectos.find((proyecto) => proyecto.id === id)
    let screen = window.matchMedia("(min-width: 768px)").matches
    
    return (
        <div className="contenedor-card-individual">
            <p className="proyecto-elegido-titulo-mobile">{proyectoElegido.nombre}</p>
            <img src={proyectoElegido.img} alt={proyectoElegido.nombre} className="proyecto-elegido-img"/>
            <div className="contenedor-descripcion-elegido">
                <p className="proyecto-elegido-titulo">{proyectoElegido.nombre}</p>
                <p className="proyecto-elegido-descripcion">{proyectoElegido.descripcion}</p>
                <a href={proyectoElegido.url} target="_blank" className="proyecto-elegido-boton-repo">Ver Repositorio</a>
            </div>
            <div className="contenedor-boton-volver" onClick={()=>setId(null)}>
                <p className="proyecto-elegido-boton-volver">
                    {
                        screen ? "x" : "Volver"
                    }
                </p>
            </div>
        </div>
    )
}