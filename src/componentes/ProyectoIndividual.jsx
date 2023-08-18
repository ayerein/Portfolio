
export const ProyectoIndividual = ({ id, setId, DataProyectos }) => {
    let proyectoElegido = DataProyectos.find((proyecto) => proyecto.id === id)
    
    return (
        <div className="contenedor-card-individual">
            <img src={proyectoElegido.img} alt={proyectoElegido.nombre} className="proyecto-elegido-img"/>
            <div className="contenedor-descripcion-elegido">
                <p className="proyecto-elegido-titulo">{proyectoElegido.nombre}</p>
                <p className="proyecto-elegido-descripcion">{proyectoElegido.descripcion}</p>
                <a href={proyectoElegido.url} target="_blank" className="proyecto-elegido-boton-repo">Ver Repositorio</a>
            </div>
            <p onClick={()=>setId(null)} className="proyecto-elegido-boton-volver">volver</p>
        </div>
    )
}