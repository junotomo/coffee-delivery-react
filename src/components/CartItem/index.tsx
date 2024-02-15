import { Trash } from "phosphor-react"
import { ItemCounter } from "../ItemCounter"
import { ItemContainer, ItemControl, ProductTotalPrice, RemoveBtton } from "./style"
import { useContext } from "react"
import { Coffee } from "../Card"
import { DeliveryContext } from "../../Contexts/DeliveryContext"
interface cartCoffee extends Coffee {
    quantity: number
}

export const CartItem = (cartCoffee : cartCoffee) => {
    const {addItemToCart, removeItemFromCart, decrementItemFromCart} = useContext(DeliveryContext)
    console.log(cartCoffee)
    
    const product = {
        id: cartCoffee.id,
        quantity: cartCoffee.quantity
    }

    const incrementProductQuantity = () => addItemToCart(product)
    const decrementProductQuantity = () => decrementItemFromCart(product)
    const handleRemoveItem = () => removeItemFromCart(product)

    return(
        <ItemContainer>
                  <img src={cartCoffee.image} alt="" />
                <ItemControl>
                    <p>{cartCoffee.title}</p>
                    <div>
                        <ItemCounter 
                            quantity={cartCoffee.quantity}
                            incrementQuantity={incrementProductQuantity}
                            decrementQuantity={decrementProductQuantity}
                        />
                        <RemoveBtton onClick={handleRemoveItem}>
                            <Trash size={16}/>
                            REMOVER
                        </RemoveBtton>
                    </div> 
                </ItemControl>
                <ProductTotalPrice>
                    <span>R$</span>
                    <span>{cartCoffee.price}</span>
                </ProductTotalPrice>               
        </ItemContainer>
    )
}

