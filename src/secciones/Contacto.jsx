import { useState } from 'react';
import { EnviarMensaje } from '../componentes/Contacto/EnviarMensaje';
import { MensajeEnviado } from '../componentes/Contacto/MensajeEnviado';

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