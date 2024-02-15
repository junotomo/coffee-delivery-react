import styled from "styled-components";
import { mixins } from "../../styles/mixin";

export const ItemContainer = styled.div`
    padding: 1.5rem 0.5rem;
    border: 1px solid transparent;
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    border-bottom: 1px solid ${(props) => props.theme["base-button"]};
    img {
        margin: auto 0px;
        max-width: 4rem;
        max-height: 4rem;
    }
`

export const ItemControl = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    p {
        color: ${(props) => props.theme["base-subtitle"]};
        ${mixins.fonts.textM};
    }

    div { 
        display: flex;
        gap: 0.25rem;
    }
`
export const RemoveBtton = styled.button`
    border: 1px solid transparent;
    border-radius: 6px;
    display: flex;
    padding: 0.5rem;
    margin: auto;
    gap: 0.25rem;

    ${mixins.fonts.buttonM};
    color: ${(props) => props.theme["base-text"]};
    transition: 0.2s;

    svg {
        color: ${(props) => props.theme["purple"]};
    }

    &:hover {
        background: ${(props) => props.theme["base-hover"]};
        color: ${(props) => props.theme["base-subtitle"]};
        svg {
            color: ${(props) => props.theme["purple-dark"]};
        }
    }

`
 export const ProductTotalPrice = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.25rem;
    span {
        color: ${(props) => props.theme["base-text"]};
        ${mixins.fonts.titleS};
    }
 
 `
 
 