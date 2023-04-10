import './style.css';
import {FaEnvelopeOpenText, FaWhatsapp} from 'react-icons/fa'

function Footer(){

    return(
        <>
        <div className='footer'>
            <h2>Horário de Atendimento</h2>
            <span>Seg á Sexta: 8:00 às 22:00</span>
            <span>Sábado: 9:30 às 17:00</span>
            <ul className='contatos_container'>
                <li className='contato_card'>
                    <span><FaEnvelopeOpenText/> salebrasil@hotmail.com</span>
                </li>
                <li className='contato_card'>
                    <span><FaWhatsapp/> +55 41 99699-2722</span>
                </li>
            </ul>
        </div>
        </>
    )
}

export default Footer;