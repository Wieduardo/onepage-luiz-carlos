import styled from "styled-components";

export const NavBar = styled.nav`
    height: 80px;
    min-width: 100%;
    max-width: 100%;
    background-color: var(--color-primary);
    align-content: space-between;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    display: flex;
    padding-left:30px;
    color: var(--color-text2);
    position: fixed;
    top:0;
    left:0;
    font-family: Inter, sans-serif;

    &>a{
        background-color: #25D366;
        border-color: #25D366;
        color: var(--color-text2);
        border-radius: 5px;
        padding: 10px;
        margin-right: 50px;
        text-decoration: none;
    }
    &> a:hover{
        cursor: pointer;
        background-color: #075E54;
        border-color: #075E54;
    }
`

export const Logo = styled.div`
    display:flex:
    flex-direction:column;
    font-size: 2rem;
    font-weight: bold;
    justify-content: center;
    text-align:center;
    color: var(--color-secondary);

    &>h1 {
        margin: 0;

    }
`