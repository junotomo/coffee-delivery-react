import styled from "styled-components";
import { mixins } from "../../styles/mixin";

export const SuccessContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap:0.25rem;
    margin-top: 5rem;
    h1 {
        ${mixins.fonts.titleL};
        color: ${props => props.theme["yellow-dark"]};
    }

    h2 {
        ${mixins.fonts.textL};
        color: ${props => props.theme["base-subtitle"]};
    }
`
export const DeliveryContainer = styled.div`
    display: flex;
    margin-top: 2.25rem;
    flex-direction: row;
    gap: 5.875rem;
    justify-content: space-between;
`
export const InfoBorder = styled.div`
    display: flex;
    border: 1px solid transparent;
    border-radius: 6px 36px;
    background-image: linear-gradient(45deg, ${props => props.theme["yellow"]}, ${props => props.theme["purple"]});
`
export const DeliveryInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2.5rem;
    border-radius: 6px 36px;
    background-origin: border-box;
    background: ${props => props.theme["base-card"]};
`

export const InfoContent = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.75rem;

    svg {
        border-radius: 99px;
        padding: 0.5rem;
        color: ${props => props.theme["weiss"]};
    }

    svg[data-color=purple]{
        background: ${props => props.theme["purple"]};
    }

    svg[data-color=yellow]{
        background: ${props => props.theme["yellow"]};
    }

    svg[data-color=yellow]{
        background: ${props => props.theme["yellow-dark"]};
    }


    div {
        display: flex;
        flex-direction: column;
        span {
            ${mixins.fonts.textM};
            ${props => props.theme["base-text"]};
        }
    }
`