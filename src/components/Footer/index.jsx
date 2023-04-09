import './style.css';
import {FaEnvelopeOpenText, FaWhatsapp} from 'react-icons/fa'

function Footer(){

    return(
        <>
        <div className='footer'>
            <h2>Contato</h2>
            <span>Venha bater um papo. Estou sempre a disposição.</span>
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