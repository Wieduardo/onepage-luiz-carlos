import './style.css';

function Servicos(){

    const servicos=[
        {   name:"Assessoria MEIs" ,
            name2:"Alteração de CNPJ MEI",
            name3:"Baixa do CNPJ MEI",
            descri: "Desde a criação da conta Gov até o acesso ao aplicativo Gov.br.",
            descri2:"Contabilidade, Fiscal, Registro de Funcionários, Folha de Pagamento e Encerramento de Empresa.",
            descri3: "Terceirização da área administrativa - Planejamento Estratégico, montagem e acompanhamento mensal.",
            img:"https://hscontabil.com.br/wp-content/uploads/2019/11/contador.jpg"
        }]

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
                        <h4>{servico.name2}</h4>
                        <span>{servico.descri2}</span>
                        <h4>{servico.name3}</h4>
                        <span>{servico.descri3}</span>
                    </div>
                </div>))
            }
            </div>
        </div>
        </>
    )
}

export default Servicos;