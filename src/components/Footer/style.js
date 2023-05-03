import styled from "styled-components";

export const FooterContainer= styled.footer`
    min-height: 75vh;
    max-width: 100vw;
    background-color: black;
    color: var(--color-text2);
    position: relative;
    display: flex;
    flex-direction: column;
    align-content: space-between;
    
    &::before{
        content: '';
        background-image: url(https://wallpapercave.com/wp/Te4aJte.jpg);
        background-attachment: fixed;
        background-size: cover;
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        opacity: 0.2;
    }
    &>h2 {
        margin-left: 20px;
        padding-top: 20px;
    }
    &>span {
        margin: 10px 20px;
    }
`

export const ContatoContainer = styled.ul`
    min-height: 25vh;
    max-width: 100vw;
    background-color: rgb(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    gap: 10px;
    list-style-type: none;
    padding-left: 0px;  
`

export const ContatoCard = styled.li`
    min-height: 5vh;
    display: flex;
    align-items: center;
    font-family: sans-serif;
    font-weight: 100;
    font-size: 18px;
    color: var(--color-text2);
    margin: 0px 20px;
`