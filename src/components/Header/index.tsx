import { HeaderContainer } from "./styles"
import logo from '../../assets/logo.svg'
import { MapPin, ShoppingCart } from "phosphor-react"
import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { DeliveryContext } from "../../Contexts/DeliveryContext"

export const Header = () => {
    const {cart} = useContext(DeliveryContext)
    
    const NumberOfProductsInCart = cart.map(item => item.quantity)
        .reduce((accumulator ,current) =>  accumulator + current,0)

    return (
        <HeaderContainer>
            <NavLink to="/">
                <img src={logo} alt="" />
            </NavLink>
            <nav>
                <NavLink to="/" title="Timer">
                    <MapPin  size={22} weight="fill" /> 
                    <span>Cidade</span>
                </NavLink> 
                
                <NavLink to="/checkout" title="history">     
                    <div>{NumberOfProductsInCart}</div>      
                        <ShoppingCart  size={22} weight="fill"/> 
                </NavLink>
               
            </nav>
        </HeaderContainer>
    )
}