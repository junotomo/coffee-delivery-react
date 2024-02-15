import { Minus, Plus } from "phosphor-react"
import { CounterContainer } from "./style"

interface QuantityCounter {
    quantity: number
    incrementQuantity: () => void
    decrementQuantity: () => void
  }

export const ItemCounter = ({decrementQuantity, incrementQuantity, quantity}: QuantityCounter) => {

    return(
        <CounterContainer>
            <button onClick={decrementQuantity}>
            <Minus size={14} />
            </button>
                <span>{quantity}</span>
            <button onClick={incrementQuantity}>
                <Plus size={14} />
            </button>
        </CounterContainer>
    )
}