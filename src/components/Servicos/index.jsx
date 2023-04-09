import './style.css';

function Servicos(){

    const servicos=[
        {name:"Abertura e encerramento de empresa" , descri: "Calculo e gerenciamento de despesas.", img:"https://hscontabil.com.br/wp-content/uploads/2019/11/contador.jpg"},
        {name:"Impostos" , descri: "Cálculo de imposto de acordo com o perfil econômico.", img:"https://hscontabil.com.br/wp-content/uploads/2019/11/contador.jpg"},
        {name:"Obrigações fiscais" , descri: "Contabeis e de Recursos Humanos.", img:"https://hscontabil.com.br/wp-content/uploads/2019/11/contador.jpg"},
        {name:"Terceirização" , descri: "De sua area administrativa.", img:"https://hscontabil.com.br/wp-content/uploads/2019/11/contador.jpg"},
        {name:"Planejamento Estrategico" , descri: "Montagem e acompanhamento mensal.", img:"https://hscontabil.com.br/wp-content/uploads/2019/11/contador.jpg"},
        {name:"Planejamento Fiscal" , descri: "Com o melhor enquadramento conforme o porte e  a caracteristica fiscal de cada empresa", img:"https://hscontabil.com.br/wp-content/uploads/2019/11/contador.jpg"},
        {name:"Planejamento Operacional" , descri: "Com projeção e acompanhamento de aplicabilidade.", img:"https://hscontabil.com.br/wp-content/uploads/2019/11/contador.jpg"},
        {name:"Revisão de Situação Fiscal" , descri: "Parcelamentos e contestações.", img:"https://hscontabil.com.br/wp-content/uploads/2019/11/contador.jpg"}
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