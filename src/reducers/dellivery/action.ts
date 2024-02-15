import { NavigateFunction } from "react-router-dom"
import { CartProduct, Order } from "./reducers"

export enum ActionTypes {
    ADD_TO_CART = 'ADD_TO_CART',
    REMOVE_FROM_CART = 'REMOVE_FROM_CART',
    DECREMENT_ITEM = 'DECREMENT_ITEM',
    CHECKOUT = 'CHECKOUT',
}


export const addItemToCartAction = (cartProduct: CartProduct) => {
    return {
        type: ActionTypes.ADD_TO_CART,
        payload: {
            cartProduct,
        }
    }
}

export const removeItemFromCartAction = (cartProduct: CartProduct) => {
    return {
        type: ActionTypes.REMOVE_FROM_CART,
        payload: {
            cartProduct,
        }
    }
}

export const decrementItemFromCartAction = (cartProduct: CartProduct) => {
    return {
        type: ActionTypes.DECREMENT_ITEM,
        payload: {
            cartProduct,
        }
    }
}

export const checkOutAction = (orders: Order, callback: NavigateFunction) => {
    return {
        type: ActionTypes.CHECKOUT,
        payload: {
            orders,
            callback
        }
    }
}