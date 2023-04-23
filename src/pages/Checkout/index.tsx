import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";
import { CartContainer, CheckoutContainer, DeliveryAddressContainer, PaymentContainer, PaymentOptions, PaymentType } from "./styles";
import { ChosenCoffeeCard } from "../../components/ChosenCoffeeCard";
import { useContext, useEffect } from "react";
import { CoffeeContext } from "../../contexts/CoffeeContext";
import { priceFormatter } from "../../utils/priceFormatter";
import * as z from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";

const deliveryAddressFormSchema = z.object({
    cep: z.string(),
    road: z.string(),
    number: z.string(),
    complement: z.string(),
    neighborhood: z.string(),
    city: z.string(),
    uf: z.string(),
    typePayment: z.enum(['Cartão de Crédito', 'Cartão de Débito', 'Dinheiro'])
})

type deliveryAddressFormInputs = z.infer<typeof deliveryAddressFormSchema>


export function Checkout () {
    const {cart,setAddressData} = useContext(CoffeeContext)
    
    const { register, handleSubmit, control } = useForm<deliveryAddressFormInputs>({
        resolver: zodResolver(deliveryAddressFormSchema),
        defaultValues: {
            typePayment: 'Cartão de Crédito'
        }
    })


    const totalCoffee = cart.reduce((acumulador,cartItem)=> {
        return acumulador + cartItem.price*cartItem.qtd
    },0)

    var isDisabled = true

    if(totalCoffee != 0) {
        isDisabled = false
    }

    const entrega = 5.50;
    const total = totalCoffee + entrega;

    function handleConfirmOrder(data: deliveryAddressFormInputs){
        const newAddressData = {
            cep: data.cep,
            road: data.road,
            number: data.number,
            complement: data.complement,
            neighborhood: data.neighborhood,
            city: data.city,
            uf: data.uf,
            typePayment: data.typePayment
        }
        
        setAddressData(newAddressData)
        
        const url = '/Coffee-Delivery/success'
        window.location.assign(url)
    }

    return(
        <CheckoutContainer onSubmit={handleSubmit(handleConfirmOrder)} id="form">
            <section>
                <h2>Complete seu pedido</h2>
                <DeliveryAddressContainer>
                    <div className="address">
                        <MapPinLine size={20}/>
                        <div>
                            <h3>Endereço de Entrega</h3>
                            Informe o endereço onde deseja receber seu pedido
                        </div>
                    </div>
                    <input 
                        className="inputtype1" 
                        type="text" 
                        placeholder="CEP"
                        required
                        {...register('cep')}
                    />
                    <input 
                        type="text" 
                        placeholder="Rua" 
                        required
                        {...register('road')}
                    />
                    <div className="boxInputs">
                        <input 
                            // className="inputtype1" 
                            type="text" 
                            placeholder="Número" 
                            required
                            {...register('number')}
                        />
                        <input 
                            type="text" 
                            placeholder="Complemento (Opcional)" 
                            {...register('complement')}
                        />
                    </div>
                    <div className="boxInputs2">
                        <input 
                            className="inputtype1" 
                            type="text" 
                            placeholder="Bairro"
                            required
                            {...register('neighborhood')} 
                        />
                        <div className="boxInputs3">
                            <input 
                                type="text" 
                                placeholder="Cidade"
                                required
                                {...register('city')} 
                                />
                            <input 
                                type="text" 
                                placeholder="UF" 
                                required
                                {...register('uf')}
                            />
                        </div>
                    </div>
                </DeliveryAddressContainer>

                <PaymentContainer>
                    <div className="payment">
                        <CurrencyDollar size={20}/>
                        <div>
                            <h3>Pagamento</h3>
                            O pagamento é feito na entrega. Escolha a forma que deseja pagar
                        </div>
                    </div>

                    <Controller
                        control={control}
                        name="typePayment"
                        render={({field})=> {
                            return (
                                <PaymentType onValueChange={field.onChange} value={field.value}>
                                    <PaymentOptions value="Cartão de Crédito">
                                        <CreditCard size={16}/>
                                        <span>CARTÃO DE CRÉDITO</span>
                                    </PaymentOptions>

                                    <PaymentOptions value="Cartão de Débito">
                                        <Bank size={16}/>
                                        <span>CARTÃO DE DÉBITO</span>
                                    </PaymentOptions>

                                    <PaymentOptions value="Dinheiro">
                                        <Money size={16}/>
                                        <span>DINHEIRO</span>
                                    </PaymentOptions>
                                </PaymentType>
                            )
                        }}
                    />

                </PaymentContainer>
            </section>

            <section>
                <h2>Cafés selecionados</h2>
                <CartContainer>
                    { cart.length !== 0 ?
                        cart.map(item => {
                            return (
                                <ChosenCoffeeCard
                                    key={item.coffeeName}
                                    coffeeName={item.coffeeName}
                                    image={item.image}
                                    price={item.price}
                                    qtd={item.qtd}
                                />
                            )
                        })
                    : <span className="emptyCart">O carrinho está vazio</span>
                    }
                    
                    <div className="total">
                        <div>
                            <span>Total de itens</span>
                            <span>{priceFormatter.format(totalCoffee)}</span>
                            
                        </div>
                        <div>
                            <span>Entrega</span>
                            <span>{totalCoffee ? priceFormatter.format(entrega) : priceFormatter.format(0.00)}</span>
                        </div>
                        <div>
                            <span>Total</span>
                            <span>{totalCoffee ? priceFormatter.format(total): priceFormatter.format(0)}</span>
                        </div>
                    </div>
                   
                    <button className="confirmOrder" type="submit" form="form" disabled={isDisabled}>
                        Confirmar Pedido
                    </button>
                    
                </CartContainer>
            </section>
        </CheckoutContainer>
    )
}