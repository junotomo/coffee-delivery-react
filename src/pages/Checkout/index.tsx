//import { MapPin, Package, ShoppingCart, Timer } from "phosphor-react"
import { Bank, CreditCard, CurrencyDollar, MapPin, Money } from "phosphor-react"
import { CustomInput } from "../../components/Form/CustomInput"
import { FormProvider, useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from "zod"
import {
    CartContainer,
    CartList,
    CheckoutContainer,
    FormHeader,
    AddressInput,
    FormInput,
    FormRadio,
    OrderFormContainer,
    PaymentContainer,
    DeiveryValues
 } from "./style"
import { CustomRadio } from "../../components/Form/CustomRadio"
import { CartItem } from "../../components/CartItem"
import { useContext } from "react"
import { DeliveryContext } from "../../Contexts/DeliveryContext"
import { coffees } from '../../../products.json'

 const FormAddressValidationSchema = zod.object({
    cep: zod.number().min(8, 'CEP invalido'),
    street: zod.string(),
    number: zod.number(),
    addressDetail: zod.string(),
    neighborhood: zod.string(),
    city: zod.string(),
    state: zod.string(),
    paymentMethod: zod.enum(['credit', 'debit', 'cash'], {
        invalid_type_error: 'Informe um método de pagamento',
      }),
  })


export type newDeliveryData = zod.infer<typeof FormAddressValidationSchema>

export const Checkout = () => {
    const newAddressForm = useForm<newDeliveryData>({
        resolver: zodResolver(FormAddressValidationSchema),
        defaultValues: {
            cep: 0,
            street: '',
            number: 0,
            addressDetail:'',
            neighborhood: '',
            city: '',
            state: '',
        }
    })

    const {cart,proceedToCheckout} = useContext(DeliveryContext)

    const productsList = cart.map( item => {
        const productData = coffees.find((coffee) => coffee.id === item.id)
        if (!productData) {
            throw new Error('Invalid coffee.')
          }
            return {...productData, quantity: item.quantity  }
        })


    const {register,watch, handleSubmit} = newAddressForm
    const selectedPaymentMethod = watch('paymentMethod')
    const deliveryPrice = 5
    const totalprice =  productsList.reduce((previous, current) =>{
       return (previous += current.price* current.quantity)
    },0) 

    const handleCheckOut = (data: newDeliveryData) => {
        proceedToCheckout(data)
    }

    return(
        <CheckoutContainer>
            <OrderFormContainer>
                <h1>Complete eu pediodo</h1>
            <form id="order" onSubmit={handleSubmit(handleCheckOut)}>
                <FormInput>
                    <FormHeader>
                        <MapPin size={22}  />
                        <div>
                            <p>Endereço de entrega</p>
                            <p>Inform o endereço onde deseja receber seu pedido</p>
                        </div>
                    </FormHeader>
                    <AddressInput>
                        <FormProvider {...newAddressForm} > 
                            <CustomInput
                                type="number"
                                placeholder="CEP"
                                propsStyle={{gridArea: 'cep'}}
                                {...register('cep', { valueAsNumber: true })}
                             />
                            <CustomInput
                                type="text"
                                placeholder="Rua"
                                propsStyle={{gridArea: 'street'}}
                                {...register('street')}    
                            />
                            <CustomInput
                                type="number"
                                placeholder="Número"
                                propsStyle={{gridArea: 'number'}}
                                {...register('number', { valueAsNumber: true })}
                             />
                            <CustomInput
                                type="text"
                                placeholder="Complemento"
                                propsStyle={{gridArea: 'addressDetail'}}
                                optional={true}
                                {...register('addressDetail')}    
                            />
                            <CustomInput
                                type="text"
                                placeholder="Bairro"
                                propsStyle={{gridArea: 'neighborhood'}}
                                {...register('neighborhood')}    
                            />
                            <CustomInput
                                type="text"
                                placeholder="Cidade"
                                propsStyle={{gridArea: 'city'}}
                                {...register('city')}    
                            />
                            <CustomInput
                                type="text"
                                placeholder="UF"
                                propsStyle={{gridArea: 'state'}}
                                {...register('state')}    
                            />
                        </FormProvider>    
                    </AddressInput>

                </FormInput>
                <FormRadio>
                    <FormHeader data-color={true}>
                        <CurrencyDollar  size={22} />
                        <div>
                            <p>Pagamento</p>
                            <p>O pagamento é feito na emtrega. Escolha a forma  que deseja pagar</p>
                        </div>
                    </FormHeader>
                    <PaymentContainer>
                        <CustomRadio                    
                            choosedPayment={selectedPaymentMethod === 'credit'}
                            value='credit'
                            {...register('paymentMethod')}
                        >
                            <CreditCard size={16} />
                        <span>Cartão de crédito</span>
                      </CustomRadio>

                      <CustomRadio
                            choosedPayment={selectedPaymentMethod === 'debit'}
                            value='debit'
                            {...register('paymentMethod')}
                      >
                        <Bank  size={16} />
                        <span>Cartão de débito</span>
                      </CustomRadio>

                      <CustomRadio

                            choosedPayment={selectedPaymentMethod === 'cash'}
                            value='cash'
                            {...register('paymentMethod')}
                      >
                        <Money size={16} />
                        <span>Dinheiro</span>
                      </CustomRadio>
                    </PaymentContainer>
                </FormRadio>

            </form>
            </OrderFormContainer>
            <CartContainer>
                <h1>Cafés selecionados</h1>
                <CartList>
                    {productsList.map( product => {
                        return(
                             <CartItem
                                key={product.id}
                               {...product}
                            />
                        )
                    })}

                    <DeiveryValues>
                        <div>
                            <span>Total de itens</span>
                            <span>
                                {new Intl.NumberFormat('pt-br', {
                                currency: 'BRL',
                                style: 'currency',
                                }).format(totalprice)}
                            </span>
                        </div>
                        <div>
                            <span>Entrega</span>
                            <span> 
                                {new Intl.NumberFormat('pt-br', {
                                currency: 'BRL',
                                style: 'currency',
                                }).format(deliveryPrice)}
                            </span>
                        </div>
                        <div>
                            <span>Total</span>
                            <span>
                                {new Intl.NumberFormat('pt-br', {
                                currency: 'BRL',
                                style: 'currency',
                                }).format(deliveryPrice + totalprice)}
                            </span>
                        </div>
                        <button type="submit" form="order" >CONFIRMA PEDIDO</button>
                    </DeiveryValues>
                </CartList>

            </CartContainer>
        </CheckoutContainer>
    )
}