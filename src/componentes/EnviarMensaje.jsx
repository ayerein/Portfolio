import emailjs from '@emailjs/browser';
import { useRef } from 'react';

export const EnviarMensaje = ({ setContactForm }) => {
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_mot6lzm', 'template_me7gpnm', form.current, 'tLQz5Yhxdd7jvJiRS')
            .then((result) => {
                setContactForm(false)
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return(
        <>
        <p className="contacto-titulo">Puedes dejarme tu mensaje</p>
        <form className="contenedor-inputs" ref={form} name="contacto" onSubmit={sendEmail}>
            <input type="text" name="form-nombre" id="nombre" placeholder="Nombre" required autoComplete="none" className="input-contacto input-contacto-nombre"/>
            <input type="email" name="form-email" id="email" placeholder="Email" required autoComplete="none" className="input-contacto input-contacto-email"/>
            <textarea name="form-mensaje" id="Mensaje" cols="30" rows="10" required placeholder="Mensaje" className="input-contacto input-contacto-textarea"/>
            <input type="submit" className="input-contacto-enviar" value="Enviar"/>
        </form>
        </>
    )
}