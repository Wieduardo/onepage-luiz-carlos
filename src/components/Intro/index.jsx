import { Bola, ContainerMain, ContainerMeis, ContentMain } from './style';

function Intro(){
    return(
        <>
        <ContainerMain>
            <Bola src={require('../../imgs/imagem1.jpeg')} alt='logo'/>
            <ContentMain>
                <text>
                    Abertura de Empresa - Gestão Empresarial 
                </text>
                <ContainerMeis>
                <text>Assessoria MEIs </text>
                    <span>
                        (MEI, você pode fazer tudo sozinho e de forma gratuita no site do governo, mas, se precisar de assessoria, posso te auxiliar.)
                    </span>
                </ContainerMeis>
            </ContentMain>
        </ContainerMain>
        </>
    )
}

export default Intro;