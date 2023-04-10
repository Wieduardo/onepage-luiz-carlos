import './style.css';

function Servicos(){

    const servicos=[
        {name:"Assessoria" , descri: "Desde a criação da conta Gov até o acesso ao aplicativo Gov.br.", img:"https://hscontabil.com.br/wp-content/uploads/2019/11/contador.jpg"},
        {name:"Alteração de CNPJ MEI" , descri: "Para atualização ou acréscimo de atividades.", img:"https://hscontabil.com.br/wp-content/uploads/2019/11/contador.jpg"},
        {name:"Baixa do CNPJ MEI" , descri: "Não receba cobranças desnecessárias, cancele o CNPJ MEI, ainda que tenha débitos.", img:"https://hscontabil.com.br/wp-content/uploads/2019/11/contador.jpg"},
        ]

    return(
        <>
        <div className='container'>
            <h2>Serviços</h2>
            <div className='servicos_container'>
            {servicos.map((servico, index) => (
                <div key={index} className="servico_card">
                    <img src={servico.img} alt="alterna" className='bola_servico'></img>
                    <div className="servico_content">
                        <h3>{servico.name}</h3>
                        <span>{servico.descri}</span>
                    </div>
                </div>))
            }
            </div>
        </div>
        </>
    )
}

export default Servicos;