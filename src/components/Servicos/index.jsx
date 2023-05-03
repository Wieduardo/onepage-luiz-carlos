import { useContext } from 'react';
import { GlobalContext } from '../../providers/global';
import { BolaServico, ServicoCard, ServicoCardContent, ServicosContainer, ServicosUl } from './style';

function Servicos(){

    const { servicos } = useContext(GlobalContext);

    return(
        <>
        <ServicosContainer>
            <h2>Serviços</h2>
            <ServicosUl>
            {servicos.map((servico, index) => (
                <ServicoCard key={index}>
                    <BolaServico src={servico.img} alt="alterna"/>
                    <ServicoCardContent>
                        <h3>{servico.name}</h3>
                        <text>{servico.descri}</text>
                        <span>{servico.negri}</span>
                    </ServicoCardContent>
                </ServicoCard>))
            }
            </ServicosUl>
        </ServicosContainer>
        </>
    )
}

export default Servicos;