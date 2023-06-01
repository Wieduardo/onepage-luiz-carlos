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
                </ContainerMeis>
            </ContentMain>
        </ContainerMain>
        </>
    )
}

export default Intro;