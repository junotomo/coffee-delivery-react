import styled from "styled-components";
import { mixins } from "../../../styles/mixin";

export const RadioContainer = styled.label`
    ${mixins.fonts.buttonM}

    display: flex;
    gap: 0.75rem;

    padding: 1rem;
    background: ${(props) => props.theme["base-button"]};
    border: 1px solid transparent;
    border-radius: 6px;
    color: ${(props) => props.theme["base-text"]};
    transition: 0.2s;

    &:hover {
        background: ${(props) => props.theme["base-hover"]};
        color: ${(props) => props.theme["base-subtitle"]};
    }

    &[data-select=true] {
        border: 1px solid ${(props) => props.theme["purple"]};
        background: ${(props) => props.theme["purple-light"]};
    }

    svg {
        color: ${(props) => props.theme["purple"]};
    }

    input {
        -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    }
`