import styled from "styled-components";
import { mixins } from "../../../styles/mixin";

export const InputContainer = styled.label`
    display: flex;
    justify-content: space-between;

    padding: 0.75rem;
    border: 1px solid ${(props) => props.theme["base-button"]};
    border-radius: 4px;

    background: ${(props) => props.theme["base-input"]};
    transition: all 0.2s;


    &[data-focus=true] {
        border: 1px solid ${(props) => props.theme["yellow-dark"]}
    }

    input {    
        background: transparent!important;;
        border: none;
        width: 100%;
        ${mixins.fonts.textS};
        color: ${(props) => props.theme["base-label"]};

        &::-webkit-calendar-picker-indicator{
            display: none !important;
        }
        &::placeholder {
            color: ${( props) => props.theme['base-label']};
        }

        &:focus {
            color: ${(props) => props.theme["base-text"]};
            background: transparent;
        }
    }

    span {
        ${mixins.fonts.textS};
        color: ${(props) => props.theme["base-label"]};
    }


`   