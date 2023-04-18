import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";
import { CartContainer, CheckoutContainer, DeliveryAddressContainer, PaymentContainer, PaymentOptions, PaymentType } from "./styles";
import { ChosenCoffeeCard } from "../../components/ChosenCoffeeCard";
import { useContext, useEffect } from "react";
import { CoffeeContext } from "../../contexts/CoffeeContext";
import { priceFormatter } from "../../utils/priceFormatter";

export function Checkout () {
    const {cart} = useContext(CoffeeContext)


    const totalCoffee = cart.reduce((acumulador,cartItem)=> {
        return acumulador + cartItem.price*cartItem.qtd
    },0)

    const entrega = 5.50;
    const total = totalCoffee + entrega;

    return(
        <CheckoutContainer>
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
                    <input className="inputtype1" type="text" placeholder="CEP" />
                    <input type="text" placeholder="Rua" />
                    <div className="boxInputs">
                        <input className="inputtype1" type="text" placeholder="Número" />
                        <input type="text" placeholder="Complemento (Opcional)" />
                    </div>
                    <div className="boxInputs2">
                        <input className="inputtype1" type="text" placeholder="Bairro" />
                        <input type="text" placeholder="Cidade" />
                        <input type="text" placeholder="UF" />
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

                    <PaymentType>
                        <PaymentOptions value="credito">
                            <CreditCard size={16}/>
                            <span>CARTÃO DE CRÉDITO</span>
                        </PaymentOptions>

                        <PaymentOptions value="debito">
                            <Bank size={16}/>
                            <span>CARTÃO DE DÉBITO</span>
                        </PaymentOptions>

                        <PaymentOptions value="dinheiro">
                            <Money size={16}/>
                            <span>DINHEIRO</span>
                        </PaymentOptions>

                    </PaymentType>
                </PaymentContainer>
            </section>

            <section>
                <h2>Cafés selecionados</h2>
                <CartContainer>
                    {cart.map(item => {
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
                    <button>
                        Confirmar Pedido
                    </button>
                </CartContainer>
            </section>
        </CheckoutContainer>
    )
}