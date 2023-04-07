import './style.css';
import {FaEnvelopeOpenText, FaPhone, FaHouseUser, FaFacebook} from 'react-icons/fa'

function Footer(){

    return(
        <>
        <div className='footer'>
            <h2>Contato</h2>
            <ul className='contatos_container'>
                <li className='contato_card'>
                    <span><FaEnvelopeOpenText/>  Email@outlook.com.br</span>
                </li>
                <li className='contato_card'>
                    <span><FaFacebook/>  Nome Facebook</span>
                </li>
                <li className='contato_card'>
                    <span><FaPhone/>  +55 41 3333-3333</span>
                </li>
                <li className='contato_card'>
                    <span><FaHouseUser/>  Rua das ruas, Nº XXXX - Bairro dos Bairros - Cidade, Estado - Brasil</span>
                </li>
            </ul>
        </div>
        </>
    )
}

export default Footer;