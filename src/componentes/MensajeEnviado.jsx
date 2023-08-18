
export const MensajeEnviado = ({ setContactForm}) => {
    return(
        <div className="mensaje-enviado">
            <p className="text-mensaje-enviado">Gracias por tu mensaje, estamos en contacto!</p>
            <p className="boton-mensaje-enviado" onClick={()=>setContactForm(true)}>Volver</p>
        </div>
    )
}