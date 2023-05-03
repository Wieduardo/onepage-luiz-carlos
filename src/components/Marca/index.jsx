import { GlobalContext } from "../../providers/global";
import { MarcaContainer } from "./style";
import { useContext, useEffect,useState } from "react";

const Marca = () => {

    const { userData } = useContext(GlobalContext);

    const [isDesktop, setDesktop] = useState(window.innerWidth > 800);

    const updateMedia = () => {
        setDesktop(window.innerWidth > 800);
    };

    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    });

    return(
        <>
        <MarcaContainer>
            <span>Feito por { isDesktop ? (
          <a target="_blank" rel='noreferrer' href={`https://web.whatsapp.com/send?phone=+55${userData.credito}&text=Ol%C3%A1%2C%20venho%20por%20meio%20do%20seu%20portf%C3%B3lio%20na%20internet%2C%20gostaria%20de%20conhecer%20melhor%20seus%20servi%C3%A7os`}>®We Web</a>) :

          (<a target="_blank" rel='noreferrer' href={`https://api.whatsapp.com/send?phone=+55${userData.credito}&text=Ol%C3%A1%2C%20venho%20por%20meio%20do%20seu%20portf%C3%B3lio%20na%20internet%2C%20gostaria%20de%20conhecer%20melhor%20seus%20servi%C3%A7os`}>®We Web </a>)
          }. Todos os direitos reservados.</span>
        </MarcaContainer>
        </>
    )
}

export default Marca;