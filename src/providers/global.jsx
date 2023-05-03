import { createContext } from "react";
import Images from "../imgs";

export const GlobalContext = createContext([]);

export const GlobalProvider = ({children}) =>{

    //Informação do Usuário
    const userData = {
      telefone:"41 3333-3333",
      celular:"+5541996992722",
      email:"lcs@lcscontador.com.br",
      twitter:"http://twitter.com.br",
      facebook:"http://facebook.com.br",
      insta:"http://instagram.com.br",
      cidade:"Cidade",
      bairro:"Bairro",
      rua:"Rua - nº xxxx",
      credito: "+5541987206060"
    }

    //Informação dos Serviços prestados
    const servicos=[
      {
          name:"Assessoria MEIs" ,
          descri:"Criação da conta Gov até o acesso ao aplicativo gov.br; Alteração  e/ou Baixa de CNPJ MEI; cancele seu CNPJ MEI para evitar cobranças desnecessárias ainda que tenha dívidas.",
          negri: "Seu CNPJ MEI em 24h.",
          img:"https://hscontabil.com.br/wp-content/uploads/2019/11/contador.jpg"
      },
      {
          name:"Abertura de Empresa" ,
          descri:"Contabilidade Fiscal, Registro de Funcionários; Folha de Pagamento e Encerramento de Empresa.",
          img:Images.imagem2
      },
      {
          name:"Gestão Administrativa" ,
          descri:"Terceirização de área administrativa; Planejamento estratégico, montagem e acompanhamento mensal.",
          img:Images.imagem3
      }
  ]

    //Transforma o número de ceular em legível
    const cellText= userData.celular.slice(0,3)+" "+userData.celular.slice(3,5)+" "+userData.celular.slice(5,10)+"-"+userData.celular.slice(10,14);

    return (
        <GlobalContext.Provider
         value={{ userData, cellText, servicos }}>
          {children}
        </GlobalContext.Provider>
       )

}