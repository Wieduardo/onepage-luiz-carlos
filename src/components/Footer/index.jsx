import { useContext } from 'react';
import { ContatoCard, ContatoContainer, FooterContainer } from './style';
import {FaEnvelopeOpenText, FaWhatsapp} from 'react-icons/fa'
import { GlobalContext } from '../../providers/global';
import Marca from '../Marca';

function Footer(){

    const { userData, cellText } = useContext(GlobalContext);

    return(
        <>
        <FooterContainer>
            <h2>Horário de Atendimento</h2>
            <span>Seg á Sexta: 8:00 às 22:00</span>
            <span>Sábado: 9:30 às 17:00</span>
            <ContatoContainer>
                <ContatoCard>
                    <span><FaEnvelopeOpenText/> {userData.email}</span>
                </ContatoCard>
                <ContatoCard>
                    <span><FaWhatsapp/> {cellText}</span>
                </ContatoCard>
            </ContatoContainer>
        </FooterContainer>
        <Marca/>
        </>
    )
}

export default Footer;