import './style.css';
import { useEffect, useState } from 'react';

function Navbar(){

const [isDesktop, setDesktop] = useState(window.innerWidth > 800);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 800);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

    const userData={
        whatsappNumber:"+5541996992722"
    }

    return(
        <>
        <nav>
            <h1>LCS Contabilidade</h1>
            { isDesktop ? (
            <a target="_blank" rel='noreferrer' href={`https://web.whatsapp.com/send?phone=+55${userData.whatsappNumber}&text=Ol%C3%A1%2C%20venho%20por%20meio%20do%20seu%20portf%C3%B3lio%20na%20internet%2C%20gostaria%20de%20conhecer%20melhor%20seus%20servi%C3%A7os`}>Whatsapp</a>) :

            (<a target="_blank" rel='noreferrer' href={`https://api.whatsapp.com/send?phone=+55${userData.whatsappNumber}&text=Ol%C3%A1%2C%20venho%20por%20meio%20do%20seu%20portf%C3%B3lio%20na%20internet%2C%20gostaria%20de%20conhecer%20melhor%20seus%20servi%C3%A7os`}>Whatsapp</a>)
            }
        </nav>
        </>
    )
}

export default Navbar;