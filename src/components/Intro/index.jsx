import './style.css';

function Intro(){
    return(
        <>
        <main>
            <img className='bola' src={require('../../imgs/logo.png')} alt='logo'/>
            <div>
                <text>
                    Abertura de Empresa - Gestão Empresarial 
                </text>
                <div className='meis'>
                <text>Assessoria MEIs </text>
                    <span className='descri_span'>
                        (MEI, você pode fazer tudo sozinho e de forma gratuita no site do governo, mas, se precisar de assessoria, posso te auxiliar.)
                    </span>
                </div>
            </div>
        </main>
        </>
    )
}

export default Intro;