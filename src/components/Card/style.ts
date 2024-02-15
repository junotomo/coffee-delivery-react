import styled from "styled-components";
import { mixins } from "../../styles/mixin";

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 16rem;
    border: 1px solid transparent;
    border-radius: 6px 36px ;
    background: ${(props) => props.theme["base-card"]};

    img {
        max-width: 7.5rem;
        max-height: 7.5rem;
        margin: 0 auto;
        transform: translateY(-20px);
    }
`

export const Tags = styled.div`
    ${mixins.fonts.tag};
    display: flex;
    justify-content: center;
    gap: 0.5rem;

    span {
        border-radius: 8px;
        border: none;
        background: ${(props) => props.theme["yellow-light"]};
        color: ${(props) => props.theme["yellow-dark"]};
        padding: 0.25rem 0.5rem;
    }

`

export const CoffeInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
    margin-top: 1rem;
    margin-bottom: 2rem;
    width: 100%;

    h2 {
        ${mixins.fonts.titleS};
        color: ${(props) => props.theme["base-subtitle"]};
    }

    p {
        ${mixins.fonts.textS};
        color: ${(props) => props.theme["base-label"]};
    }
`

export const CardControl = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 1.25rem 1.5rem;

    div.cardCounter{
        display: flex;
        gap: 0.5rem;
        justify-content: center;
    }
`

export const Price = styled.div `
    display: flex;
    gap: 2px;
    align-items: baseline;
    color: ${(props) => props.theme["base-text"]};
    margin: auto 0;
    span:first-child {
        ${mixins.fonts.textS};
    }
    span:last-child {
        ${mixins.fonts.titleM};
    }
`
export const ShopButton = styled.button `   
    padding: 0.5rem;
    border: none;
    border-radius: 8px;
    background: ${(props) => props.theme["purple-dark"]};
    transition: 0.2s;

    cursor: pointer;
    &:hover {
        background: ${(props) => props.theme["purple"]};
    }
    svg {
        color: ${(props) => props.theme["base-card"]};
    }

`