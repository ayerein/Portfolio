
export const ProyectoIndividual = ({ cerrar, proyectoElegido }) => {
    
    return (
        <div className="contenedor-card-individual">
            <div className="contenedor-titulo-card-individual">
                <p className="proyecto-elegido-titulo">{proyectoElegido.nombre}</p>
                <button className="contenedor-boton-volver" onClick={cerrar} aria-label="Cerrar">
                    <span className="proyecto-elegido-boton-volver">x</span>
                </button>
            </div>
            <div className="contenido-card-img">
                <div className="contenedor-img-individual">
                    <img src={proyectoElegido.img} alt={proyectoElegido.nombre} className="proyecto-elegido-img"/>
                </div>
                <div className="contenedor-descripcion-elegido">
                    <p className="proyecto-elegido-descripcion">{proyectoElegido.descripcion}</p>
                </div>
            </div>
            <div className="contenedor-botones">
                <a href={proyectoElegido.url} target="_blank" rel="noreferrer" className="proyecto-elegido-boton-repo boton-i">Ver Repositorio</a>
                <a href={proyectoElegido.demo} target="_blank" rel="noreferrer" className="proyecto-elegido-boton-repo boton-d">Ver Web</a>
            </div>
        </div>
    )
}