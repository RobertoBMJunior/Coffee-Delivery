import { SuccessContainer } from "./styles";
import Entregador from '../../images/Entregador.svg'
import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { useContext } from "react";
import { CoffeeContext } from "../../contexts/CoffeeContext";

export function Success () {
    const {addressData} = useContext(CoffeeContext)

    return(
        <SuccessContainer>
            <h1>Uhu! Pedido confirmado</h1>
            <h2>Agora é só aguardar que logo o café chegará até você</h2>
            <section>
                <div className="orderInformation">
                    <article>
                        <div className="map">
                            <MapPin size={16} weight="fill"/>
                        </div>
                        <div>
                            <span>Entrega em 
                                {addressData.road}, 
                                {addressData.number} 
                                {addressData.complement ? `- ${addressData.complement}` : null}</span>

                            <span>{addressData.neighborhood} - {addressData.city}, {addressData.uf}</span>
                        </div>
                    </article>

                    <article>
                        <div className="timer">
                            <Timer size={16} weight="fill"/>
                        </div>
                        <div>
                            <span>Previsão de entrega</span>
                            <span>20 min - 30 min </span>
                        </div>
                    </article>

                    <article>
                        <div className="dolar">
                            <CurrencyDollar size={16} weight="fill"/>
                        </div>
                        <div>
                            <span>Pagamento na entrega</span>
                            <span>{addressData.typePayment}</span>
                        </div>
                    </article>

                </div>
                <img src={Entregador} alt="" />
            </section>
        </SuccessContainer>
    )
}