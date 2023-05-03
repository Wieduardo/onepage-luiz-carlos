import styled from "styled-components";

export const ContainerMain = styled.main`
    min-height: 10vh;
    background-color: var(--color-primary-light) ;
    max-width: 100vw;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 20px;
    margin-top: 80px;
    font-family: Inter, sans-serif;
    justify-content: center;

    &>h1 {
        font-size: 1.75rem;
    }

    @media(min-width: 800px){
        min-height: 80vh;
        flex-direction:row-reverse;
        flex-wrap: nowrap;
        align-items:center;
        justify-content:space-around ;
        
        &> text{
            font-size: 2rem;
            max-width: 35vw;
            font-weight: 900;
        }
    }
`

export const ContentMain = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    font-family: Inter, sans-serif;

    &>text{
        font-size: 1rem;
        max-width: 90vw;
        text-align: center;
        font-weight: 900;
        color: var(--color-text);
    }

    @media(min-width: 800px){
        &> text{
            font-size: 2rem;
            max-width: 35vw;
            font-weight: 900;
        }
    }
`

export const ContainerMeis = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    align-items: center;
    font-family: Inter, sans-serif;
    font-size: 2rem;
    
    &>text{
        font-weight: 900;
    }

    &>span{
        text-align: center;
        font-size: 12px;
    }

    @media(min-width: 800px){
        &>span{
            max-width: 40vw;
        }
    }
`

export const Bola = styled.img`
    height: 130px;
    width: 200px;

    @media(min-width: 800px){
        width: 40vw;
        height: 50vh;
    }
`