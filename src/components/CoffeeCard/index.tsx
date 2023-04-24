import { CoffeeContainer } from "./styles";
import { ShoppingCart } from "phosphor-react";
import { useForm } from "react-hook-form";
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext, useEffect, useState } from "react";
import { CoffeeContext } from "../../contexts/CoffeeContext";
import { priceFormatter } from "../../utils/priceFormatter";

const CoffeeQuantityFormSchema = z.object({
    qtd: z.number(),
})

type CoffeeQuantityFormInputs = z.infer<typeof CoffeeQuantityFormSchema>

interface CoffeeCardProps{
    image: string,
    information: string,
    information2?:string,
    information3?:string,
    coffeeName: string,
    description: string,
    price: number
}

interface Coffee {
    coffeeName: string,
    image: string,
    price: number,
    qtd: number,
}

export function CoffeeCard ({image,information,information2,information3, coffeeName,description,price}: CoffeeCardProps) {
    const {cart,setCart} = useContext(CoffeeContext)

    const {register,handleSubmit,reset} = useForm<CoffeeQuantityFormInputs>({
        resolver: zodResolver(CoffeeQuantityFormSchema),
    })

    const [isAdded, setIsAdded] = useState(false)

    function handleAddCart(data: CoffeeQuantityFormInputs) {
        const cartCopia = cart;
        var cartchanged = -1;
        
        cartCopia.forEach(item => {
            if(item.coffeeName === coffeeName) {
                item.qtd = data.qtd
                cartchanged = 1
            }
        })

        if(cartchanged === 1 ) {
            setCart(cartCopia)
        }
        else {
            const newCoffee:Coffee = {
                coffeeName: coffeeName,
                image: image,
                price: price,
                qtd: data.qtd,
            }
    
            setCart([...cart,newCoffee])
        }

        reset()
    }

    useEffect(()=>{
        const cartCopia = [...cart];
        var adicionado= -1;
        
        cartCopia.forEach(item => {
            if(item.coffeeName === coffeeName) {
                adicionado = 1
            }
        })

        if(adicionado===1){
            setIsAdded(true)
        }
        else{
            setIsAdded(false)
        }
    },[cart])

    return(
        <CoffeeContainer>
            <img src={image} alt={coffeeName}  className="imgCoffee"/>
            <div className="informations">
                <span className="information">{information}</span>
                {information2 ? <span className="information">{information2}</span> : null}
                {information3 ? <span className="information">{information3}</span> : null}
            </div>
            <h2 className="coffeeName">{coffeeName}</h2>
            <span className="description">
                {description}
            </span>

            <div className="price">
                <span>{priceFormatter.format(price)}</span>
                <form action="" onSubmit={handleSubmit(handleAddCart)}>
                    <input 
                        type="number" 
                        placeholder="0" 
                        min={1}
                        title="Insira a quantidade" 
                        {...register('qtd', {valueAsNumber: true})}
                    />
                    <button className="cart" title="Adicionar ao carrinho">
                        <ShoppingCart size={20} weight="fill"/>
                    </button>
                </form>
            </div>
            {isAdded ? <span className="addedToCart">Adicionado ao Carrinho</span> : null}
        </CoffeeContainer>
    )
}