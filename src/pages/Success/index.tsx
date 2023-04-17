import { SuccessContainer } from "./styles";
import Entregador from '../../images/Entregador.svg'
import { CurrencyDollar, MapPin, Timer } from "phosphor-react";

export function Success () {
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
                            <span>Entrega em Rua João Daniel Martinelli, 102</span>
                            <span>Farrapos - Porto Alegre, RS</span>
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
                            <span>Cartão de Crédito</span>
                        </div>
                    </article>

                </div>
                <img src={Entregador} alt="" />
            </section>
        </SuccessContainer>
    )
}