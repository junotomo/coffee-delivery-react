import styled from "styled-components";
import { mixins } from "../../styles/mixin";

export const HeaderContainer = styled.header`
    ${mixins.fonts.textS};

    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
        display:flex;
        gap: 0.75rem;      
        position: relative;

        a {
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 6px;
            border: 1px solid transparent;
            padding: 0.5rem 0.5rem;
            text-decoration: none;
            gap: 0.75rem;

            &:first-child {
                background: ${(props => props.theme["purple-light"])};
                color: ${(props => props.theme["purple-dark"])};
            }

            &:hover {
                opacity: 0.7;
            }
        }
        a:nth-child(2) {
            background: ${(props => props.theme["yellow-light"])};
            color: ${(props => props.theme["yellow-dark"])};
            position: relative;

            div {
                ${mixins.fonts.textXS};
                padding: 0.14rem 0.4rem;
                background: ${(props => props.theme["yellow-dark"])};
                border-radius: 99px;
                color: ${(props => props.theme["weiss"])};
                position: absolute;
                transform: translate(90%,-90%);

            }
        }

    }
`