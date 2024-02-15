import styled from "styled-components";
import { mixins } from "../../styles/mixin";

export const CheckoutContainer = styled.div`
    display: flex;
    gap: 2rem;
    flex-direction: row;
    border: none;
    justify-content: space-between;
    margin-top: 2.5rem;
    text-align: left;
    h1 {
        ${mixins.fonts.titleXS}
        color: ${(props) => props.theme["base-subtitle"]};
    }
`

export const OrderFormContainer = styled.div`
    display: flex;
    gap: 2rem;
    flex-direction: column;
    gap: 0.75rem;

`
export const FormHeader = styled.div`
    display: flex;
    flex-direction: row;
    gap:0.5rem;

    svg {
        color: ${(props) => props.theme["yellow-dark"]};
        border-bottom: 1px solid ${(props) => props.theme["yellow-dark"]};
    }

    div {
        display: flex;
        flex-direction: column;

        p:nth-child(1){
            ${mixins.fonts.textM};
            color: ${(props) => props.theme["base-subtitle"]};
        }

        p:nth-child(2){
            ${mixins.fonts.textS};
            color: ${(props) => props.theme["base-text"]};
        }
    }

    &[data-color=true] {
        svg {
            color: ${(props) => props.theme["purple"]};
            border: 1px solid transparent;
        }
       
    }
`
export const FormInput = styled.div`
    background: ${(props) => props.theme["base-card"]};
    padding: 2.5rem;
`

export const AddressInput = styled.div`
    display: grid;
    grid-template-areas: 
    'cep . .'
    'street street street'
    'number addressDetail addressDetail'
    'neighborhood city state';
    
    grid-template-columns: 200px 1fr 60px;
    grid-gap: 16px 12px;
    margin-top: 2rem;
`

export const FormRadio = styled.div`
    background: ${(props) => props.theme["base-card"]};
    padding: 2.5rem;
`
export const PaymentContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 0.75rem;
    margin-top: 2rem;
`

export const CartContainer = styled.div`
    display: flex;
    gap: 1rem;
    flex-direction: column;
`
export const CartList = styled.div`
    display: flex;
    gap: 2rem;
    flex-direction: column;
    background: ${(props) => props.theme["base-card"]};
    padding: 2.5rem;
    border-radius: 44px 6px;
`
export const DeiveryValues = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    
    div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        ${mixins.fonts.textM};
        color: ${(props) => props.theme["base-text"]};
    }

    div:nth-of-type(3) {
        ${mixins.fonts.titleXS};
        color: ${(props) => props.theme["base-subtitle"]};
    }

    button {
        ${mixins.fonts.buttonG};
        border: 1px solid transparent;
        border-radius: 6px;
        background: ${(props) => props.theme["yellow"]};
        padding: 0.75rem 0.5rem ;
        color: ${(props) => props.theme["weiss"]};
        transition: 0.2s;
        cursor: pointer;
        &:hover {
            background: ${(props) => props.theme["yellow-dark"]};
        }
    }
`