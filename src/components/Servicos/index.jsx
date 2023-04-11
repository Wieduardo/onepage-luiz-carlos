import './style.css';

function Servicos(){

    const servicos=[
        {
            name:"Assessoria MEIs" ,
            descri:"Criação da conta Gov até o acesso ao aplicativo gov.br; Alteração  e/ou Baixa de CNPJ MEI, cancele seu CNPJ MEI para evitar cobranças desnecessárias ainda que tenha dívidas.",
            img:"https://hscontabil.com.br/wp-content/uploads/2019/11/contador.jpg"
        },
        {
            name:"Abertura de Empresa" ,
            descri:"Contabilidade Fiscal, Registro de Funcionários; Folha de Pagamento e Encerramento de Empresa.",
            img:"https://hscontabil.com.br/wp-content/uploads/2019/11/contador.jpg"
        },
        {
            name:"Gestão Administrativa" ,
            descri:"Terceirização dea área administrativa; Planejamento estratégico, montagem e acompanhamento mensal.",
            img:"https://hscontabil.com.br/wp-content/uploads/2019/11/contador.jpg"
        }
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