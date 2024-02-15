import { CardContainer, CardControl, CoffeInfo, Price, ShopButton, Tags } from "./style"
import { ShoppingCart } from "phosphor-react"
import { ItemCounter } from "../ItemCounter"
import { useContext, useState } from "react"
import { DeliveryContext } from "../../Contexts/DeliveryContext"

export interface Coffee {
    id: string
    title: string
    description: string
    tags: string[]
    price: number
    image: string
}

interface CardProps {
    coffee: Coffee
  }


export const Card = ({coffee}: CardProps) => {
    const [productQuantity, setProductQuantity] = useState(1)
    const {addItemToCart} = useContext(DeliveryContext)

    const incrementProductQuantity = () => setProductQuantity((state) => state + 1)
    const decrementProductQuantity = () => setProductQuantity((state) => state - 1)

    //const handleIncrementProduct = () = > {}
 
    const handleAddToCart = () => {
        addItemToCart({ id: coffee.id, quantity: productQuantity })
    }

    return (
        <CardContainer>
            <img src={coffee.image} alt="" />

            <Tags>
                {coffee.tags.map((tag) => {
                    return (
                        <span key={tag}>{tag}</span>
                    )
                })}
            </Tags>

            <CoffeInfo>
                <h2>{coffee.title}</h2>
                <p>{coffee.description}</p>
            </CoffeInfo>

            <CardControl>

                <Price>
                    <span>R$</span>
                    <span>{coffee.price}</span>
                </Price>

                <div className="cardCounter">
                    <ItemCounter
                        quantity={productQuantity}
                        incrementQuantity={incrementProductQuantity}
                        decrementQuantity={decrementProductQuantity}
                    />
                    <ShopButton onClick={handleAddToCart}>
                        <ShoppingCart size={22} weight="fill"/>
                    </ShopButton>
                </div>

            </CardControl>
        </CardContainer>
    )
}   

