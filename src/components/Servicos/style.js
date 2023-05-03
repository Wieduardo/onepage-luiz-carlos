import styled from "styled-components";

export const ServicosContainer = styled.div`
    min-height: 40vh;
    max-width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    background-color: var(--color-text2);
    
    &>h2{
        margin-left: 20px;
    }

    @media(min-width: 800px){
        min-height: 70vh;
        align-items: center;
    }
`

export const ServicosUl = styled.ul`
    width: 85vw;
    display: flex;
    flex-direction: row;
    padding:0 19px;
    gap: 25px;
    height: 70vh;
    min-height: 10vh;
    overflow-y: auto;
    list-decoration: none;

    @media(min-width: 800px){
        min-height: 60vh;
        flex-direction: row;
        justify-content: center;
    }
`

export const ServicoCard = styled.li`
    background-color: var(--color-background);
    border-radius: 10%;
    margin-top: 10px;
    height: 60vh;
    min-width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 5px 10px 10px gray;

    @media(min-width: 800px){
        min-height: 50vh;
        border-radius: 5%;
        max-width: 30vw;
    }
`

export const ServicoCardContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;
    text-align: justify;
    
    &>text{
        padding: 0 20px;
    }
    &>span{
        font-weight: bold;
    }
    &>h3{
    margin: 10px 0;
    }
`

export const BolaServico = styled.img`
    min-height: 90px;
    height: 90px;
    width: 90px;
    border-radius: 50%;
    margin-top: 20px;
`