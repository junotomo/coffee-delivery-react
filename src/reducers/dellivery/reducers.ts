import { produce } from "immer";
import { newDeliveryData } from "../../pages/Checkout";
import { ActionTypes } from "./action";


export interface CartProduct {
    id: string;
    quantity: number;
}
export interface Order {
    id: string
    deliveryData: newDeliveryData;
}

interface OrderState {
    cart: CartProduct[]
    orders: Order[]
  }

export const deliveryReducer = (state: OrderState, action: any) => {
    switch (action.type) {
        case ActionTypes.ADD_TO_CART:
            return produce(state, (draft) => {
                const ItemExist = draft.cart.find( item => item.id === action.payload.cartProduct.id)
               if (ItemExist) {
                ItemExist.quantity += action.payload.cartProduct.quantity
               } else{
                draft.cart.push(action.payload.cartProduct)
               }
            })
            
        case ActionTypes.REMOVE_FROM_CART:
            return produce(state, (draft) => {
                draft.cart = draft.cart.filter( item => item.id !== action.payload.cartProduct.id)
            })

        case ActionTypes.DECREMENT_ITEM:
            return produce(state, (draft) => {
                const ItemExist = draft.cart.find( item => item.id === action.payload.cartProduct.id)
                if (ItemExist && ItemExist.quantity >0) ItemExist.quantity -= 1 
            })

        case ActionTypes.CHECKOUT:
                return produce(state, (draft) => {
                    draft.orders.push(action.payload.orders)
                    draft.cart = []
                    console.log(action.payload)
                    action.payload.callback(`/success/${action.payload.orders.id}`)
        })

    default:
        return state
    }
}