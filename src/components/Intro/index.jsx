import './style.css';

function Intro(){
    return(
        <>
        <main>
            <img className='bola' src={require('../../imgs/logo.png')} alt='logo'/>
            <text>
            Escritório de Contabilidade especialista em MEIs
            </text>
        </main>
        </>
    )
}

export default Intro;