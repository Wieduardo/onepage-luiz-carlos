import './style.css';

function Servicos(){

    const servicos=[
        {name:"Contabilidade" , descri: "Calculo e gerenciamento de despesas.", img:"https://hscontabil.com.br/wp-content/uploads/2019/11/contador.jpg"},
        {name:"Planejamento Estratégico" , descri: "Planejamento de plano de negócios e determinação de metas.", img:"https://hscontabil.com.br/wp-content/uploads/2019/11/contador.jpg"},
        {name:"Folha de Pagamento" , descri: "Calculo e organização de folha de pagamento de funcionários.", img:"https://hscontabil.com.br/wp-content/uploads/2019/11/contador.jpg"},
        {name:"Imposto de renda" , descri: "Cálculo de imposto de renda de acordo com o perfil econômico.", img:"https://hscontabil.com.br/wp-content/uploads/2019/11/contador.jpg"}
    ]

    return(
        <>
        <div className='container'>
            <h2>Meus Serviços</h2>
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