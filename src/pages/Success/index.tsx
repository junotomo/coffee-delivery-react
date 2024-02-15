import { CurrencyDollar, MapPin, Timer } from "phosphor-react"
import { DeliveryContainer, DeliveryInfo, InfoBorder, InfoContent, SuccessContainer } from "./style"
import { useContext } from "react"
import { DeliveryContext } from "../../Contexts/DeliveryContext"
import { useParams } from "react-router-dom"


export const Success = () => {

    const {orders} = useContext(DeliveryContext)
    const { orderId } = useParams()
    const orderfound  = orders.find((order) => order.id === orderId)
    const deliveryInfo = orderfound?.deliveryData
    const paymentMethod = {
        credit: 'Cartão de crédito',
        debit: 'Cartão de débito',
        cash: 'Dinheiro',
      }
    if (!deliveryInfo) {
        return null
    }

    return (
        <SuccessContainer>
            <h1>Uhu! Pedido confirmado</h1>
            <h2>Agora é só aguardar que logo o café chegara até você </h2>
            <DeliveryContainer>
                <InfoBorder>
                    <DeliveryInfo>
                        <InfoContent>
                            <MapPin size={32} data-color={"purple"}/>
                            <div>
                                <span>Entrega em <strong>{deliveryInfo.street},{deliveryInfo.number}</strong> </span>
                                
                                <span>{deliveryInfo.neighborhood} - {deliveryInfo.city}, {deliveryInfo.state}</span>
                            </div>  
                        </InfoContent>

                        <InfoContent>
                            <Timer size={32} data-color={"yellow"}/>
                            <div>
                                <span>Previsão de entrega </span>
                                <span><strong> 20 ~ 30 min</strong></span>
                            </div>  
                        </InfoContent>
                        <InfoContent>
                            <CurrencyDollar size={32} data-color={"yellow"}/>
                            <div>
                                <span>Pagamento na entrega</span>
                                <span><strong>{paymentMethod[deliveryInfo.paymentMethod]}</strong></span>
                            </div>  
                        </InfoContent>

                    </DeliveryInfo>
                </InfoBorder>
                <img src="../../src/assets/delivery.svg" alt="" />
            </DeliveryContainer>
            
        </SuccessContainer>
    )
}