import { ChosenCoffeeContainer } from "./ChosenCoffeeCard.Styles";
import ExpressoTradicional from '../images/ExpressoTradicional.svg'
import { Minus, Plus, Trash } from "phosphor-react";
import { priceFormatter } from "../utils/priceFormatter";

interface Coffee {
    coffeeName: string,
    image: string,
    price: number,
    qtd: number,
}
export function ChosenCoffeeCard ({coffeeName,image,price,qtd}:Coffee) {
    return (
        <ChosenCoffeeContainer>
            <div className="container">
                <img src={image} alt="" />
                <div className="name_and_qtd">
                    <h2>{coffeeName}</h2>
                    <div className="qtd">
                        <div className="quantity">
                            <Minus/>
                            <span>{qtd}</span>
                            <Plus/>
                        </div>
                        <button>
                            <Trash size={16}/>
                            <span>REMOVER</span>
                        </button>
                    </div>
                </div>
            </div>
            <div>{priceFormatter.format(price)}</div>
        </ChosenCoffeeContainer>
    )
}