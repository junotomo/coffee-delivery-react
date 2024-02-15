import styled from "styled-components";
import { mixins } from "../../styles/mixin";

export const CounterContainer = styled.div`
    display: flex;
    background: ${(props) => props.theme["base-button"]};
    align-items: center;
    border-radius: 8px;
    
    button {
        border: none;
        background: transparent;
        padding: 0.75rem;
        color: ${(props) => props.theme["purple"]};
        border-radius: 8px;
        transition: 0.2s;
    }

    button:hover {
        color: ${(props) => props.theme["purple-dark"]};
    }

    span {
        ${mixins.fonts.textM};
        color: ${(props) => props.theme["base-title"]};
    }

`