import styled from "styled-components";
import { mixins } from "../../styles/mixin";

export const HomeContainer = styled.main`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 6.65rem;

    img.backgroundImg {
        position: absolute;
        top: 0;
        left: 0;
        max-height: 544px;
        width: 100%;
        object-fit: cover;
        z-index: -1;
    }
`

export const IntroContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 4rem;
    
    h1 {
        ${mixins.fonts.titleXL};
        color: ${( props ) => props.theme['base-title']};
    }

    p.introSubtitle {
        ${mixins.fonts.textL};
    }

`
export const IntroInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4.125rem ;
`
export const IntroTitle = styled.div`
    display: flex;
    gap: 1rem;
    flex-direction: column;
    justify-content: center;
    text-align: left;

    p {
         ${mixins.fonts.textM};
        color: ${( props ) => props.theme['base-subtitle']}
    }
`

export const IntroContentList = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 1.25rem;

    div {
        display: flex;
        flex-direction: row;
        gap: 0.3rem;

        svg {   
            padding: 0.5rem;
            border-radius: 99px;
            color: ${( props ) => props.theme['background']};
        }

        svg.cart {
            background: ${( props ) => props.theme['yellow-dark']};
        }
       
        svg.package {
            background: ${( props ) => props.theme['base-text']};
        }

        svg.timer {
            background: ${( props ) => props.theme['yellow']};
        }

        svg.coffee {
            background: ${( props ) => props.theme['purple-dark']};
        }

        p {
            ${mixins.fonts.textM};
            margin: auto 0;
        }
    }
`

export const CardsContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    gap: 3.375rem;
    width: 100%;
    text-align: left;

    h1 {
        ${mixins.fonts.titleL};
        color: ${( props ) => props.theme['base-subtitle']};
    }
`
export const CardsList= styled.div`    
    display: flex;
    row-gap: 2.5rem;
    column-gap: 3rem;
    flex-wrap: wrap;

`