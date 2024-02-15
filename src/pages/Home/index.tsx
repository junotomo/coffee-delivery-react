import { CardsContainer, CardsList, HomeContainer, IntroContainer, IntroContentList, IntroInfo, IntroTitle } from "./styles"
import backImg from "../../assets/backImg.svg"
import main from "../../assets/main.svg"
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react"
import { Card } from "../../components/Card"
import { coffees } from '../../../products.json'

export const Home = () => {
    
    return(
        <HomeContainer>
            <IntroContainer>
                <IntroInfo>

                    <IntroTitle>
                        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                        <p className="introSubtitle">
                            Com o Coffee Delivery você recebe seu café onde estiver, a
                            qualquer hora
                        </p>
                    </IntroTitle>

                    <IntroContentList>
                        <div>
                            <ShoppingCart className="cart" size={16} weight="fill" />
                            <p>Compra simples e segura</p>
                        </div>
                        <div>
                            <Package className="package"size={16} weight="fill" />
                            <p>Compra simples e segura</p>
                        </div>
                        <div>
                            <Timer className="timer" size={16} weight="fill" />
                            <p>Compra simples e segura</p>
                        </div>
                        <div>
                            <Coffee className="coffee" size={16} weight="fill"/>
                            <p>Compra simples e segura</p>
                        </div>
                    </IntroContentList>

                </IntroInfo>
                <img src={main}  className="mainImg" alt="" />
            </IntroContainer>
            
           < CardsContainer>
                <h1>Nossos cafés</h1>
                <CardsList>
                    {coffees.map((coffee) => (
                        <Card  key={coffee.id} coffee={coffee}/>
                    ))}
                </CardsList>
            </CardsContainer>

            <img src={backImg}  className="backgroundImg" alt="" />
        </HomeContainer>
    )

}