import { useState } from 'react';
import { EnviarMensaje } from '../componentes/EnviarMensaje';
import { MensajeEnviado } from '../componentes/MensajeEnviado';

export const Contacto = () => {
    const [ contactForm, setContactForm ] = useState(true)
    
    return(
        <section className="contenedor-contacto" id="contacto">
            {
            contactForm ?
            <EnviarMensaje setContactForm={setContactForm}/>
            :
            <MensajeEnviado setContactForm={setContactForm}/>
            }
        </section>
    )
}