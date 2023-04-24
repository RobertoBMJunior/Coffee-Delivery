import { ChosenCoffeeContainer } from "./styles";
import { Minus, Plus, Trash } from "phosphor-react";
import { priceFormatter } from "../../utils/priceFormatter";
import { useContext } from "react";
import { CoffeeContext } from "../../contexts/CoffeeContext";

interface Coffee {
    coffeeName: string,
    image: string,
    price: number,
    qtd: number,
}
export function ChosenCoffeeCard ({coffeeName,image,price,qtd}:Coffee) {
    const {cart, setCart} = useContext(CoffeeContext)

    function handleDecreaseQuantity () {
        const cartCopia = [...cart];

        cartCopia.forEach((item)=> {
            if(item.coffeeName === coffeeName){
                if(item.qtd != 1) {
                    item.qtd -= 1;
                    setCart(cartCopia)
                }
            }
        })
    }

    function handleIncreaseQuantity () {
        const cartCopia = [...cart];

        cartCopia.forEach((item)=> {
            if(item.coffeeName === coffeeName){
                item.qtd += 1;
            }
        })
        setCart(cartCopia)
    }

    function handleDeleteCoffee () {
        const updatedCart = cart.filter((item)=>{
            return item.coffeeName !== coffeeName
        })

        setCart(updatedCart)
    }

    return (
        <ChosenCoffeeContainer>
            <div className="container">
                <img src={image} alt="" />
                <div className="name_and_qtd">
                    <h2>{coffeeName}</h2>
                    <div className="qtd">
                        <div className="quantity">
                            <Minus onClick={handleDecreaseQuantity} size={18}/>
                            <span>{qtd}</span>
                            <Plus onClick={handleIncreaseQuantity} size={18}/>
                        </div>
                        <button>
                            <Trash size={16}/>
                            <span onClick={handleDeleteCoffee}>REMOVER</span>
                        </button>
                    </div>
                </div>
            </div>
            <div>{priceFormatter.format(price*qtd)}</div>
        </ChosenCoffeeContainer>
    )
}