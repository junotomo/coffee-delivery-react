import { ReactNode, createContext, useReducer } from "react"
import { Order, CartProduct, deliveryReducer } from "../reducers/dellivery/reducers";
import { addItemToCartAction, removeItemFromCartAction, decrementItemFromCartAction, checkOutAction } from "../reducers/dellivery/action";
import { newDeliveryData } from "../pages/Checkout";
import { useNavigate } from "react-router-dom";


interface DeliveryContextType {
    cart: CartProduct[],
    orders: Order[],
    proceedToCheckout: (data: newDeliveryData)=> void,
    removeItemFromCart: (data: CartProduct) => void,
    addItemToCart: (data: CartProduct) => void,
    decrementItemFromCart: (data: CartProduct) => void
}

export const DeliveryContext = createContext({} as DeliveryContextType)

interface DeliveryContextProviderProps {
    children: ReactNode;
}

export const DeliveryContextProvider = ({children}: DeliveryContextProviderProps) => {
    const [orderState, dispatch] = useReducer(deliveryReducer, {
        cart: [],
        orders: []
    })

    const { orders, cart} = orderState
    const navigate = useNavigate()
    const addItemToCart = (cartProduct: CartProduct) => dispatch(addItemToCartAction(cartProduct))
    const removeItemFromCart = (cartProduct: CartProduct) =>  dispatch(removeItemFromCartAction(cartProduct))
    const decrementItemFromCart = (cartProduct: CartProduct) =>  dispatch(decrementItemFromCartAction(cartProduct))

    const proceedToCheckout = (order: newDeliveryData)=> {
        const newOrder = {
            id:  String(new Date().getTime()),
            deliveryData: order
        }
        dispatch(checkOutAction(newOrder,navigate))
    }
    
    return (
        <DeliveryContext.Provider
            value={{
                cart,
                orders,
                proceedToCheckout,
                addItemToCart,
                decrementItemFromCart,
                removeItemFromCart
            }}
        >
            {children}
        </DeliveryContext.Provider>
    )
}
