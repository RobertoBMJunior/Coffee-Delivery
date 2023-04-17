import { ReactNode, createContext, useState } from "react";

import ExpressoTradicional from '../images/ExpressoTradicional.svg'
import ExpressoAmericano from '../images/ExpressoAmericano.svg'
import ExpressoCremoso from '../images/ExpressoCremoso.svg'
import ExpressoGelado from '../images/ExpressoGelado.svg'
import CafeComLeite from '../images/CafeComLeite.svg'
import Latte from '../images/Latte.svg'
import Capuccino from '../images/Capuccino.svg'
import Macchiato from '../images/Macchiato.svg'
import Mocaccino from '../images/Mocaccino.svg'
import ChocolateQuente from '../images/ChocolateQuente.svg'
import Cubano from '../images/Cubano.svg'
import Havaiano from '../images/Havaiano.svg'
import Arabe from '../images/Arabe.svg'
import Irlandes from '../images/Irlandes.svg'



interface Coffee {
    coffeeName: string,
    image: string,
    price: number,
    qtd: number,
}

interface CoffeeCardProps{
    image: string,
    information: string,
    information2?:string,
    information3?:string,
    coffeeName: string,
    description: string,
    price: number
}

interface CoffeeContextType{
    cart: Coffee[]
    coffees: CoffeeCardProps[]
    setCart: (Coffee: Coffee[]) => void
}

interface CoffeeProviderProps{
    children: ReactNode
}

export const CoffeeContext = createContext({} as CoffeeContextType) 

export function CoffeeProvider({children}:CoffeeProviderProps) {
    const [cart, setCart] = useState<Coffee[]>([])

    const coffees = [
        {
            image: ExpressoTradicional,
            information: 'TRADICIONAL',
            coffeeName: 'Expresso Tradicional',
            description: 'O tradicional café feito com água quente e grãos moídos',
            price: 9.90
        },
        {
            image: ExpressoAmericano,
            information: 'TRADICIONAL',
            coffeeName: 'Expresso Americano',
            description: 'Expresso diluído, menos intenso que o tradicional',
            price: 9.90
        },
        {
            image: ExpressoCremoso,
            information: 'TRADICIONAL',
            coffeeName: 'Expresso Cremoso',
            description: 'Café expresso tradicional com espuma cremosa',
            price: 9.90
        },
        {
            image: ExpressoGelado,
            information: 'TRADICIONAL',
            information2: 'GELADO',
            coffeeName: 'Expresso Gelado',
            description: 'Bebida preparada com café expresso e cubos de gelo',
            price: 9.90
        },
        {
            image: CafeComLeite,
            information: 'TRADICIONAL',
            information2: 'COM LEITE',
            coffeeName: 'Café com Leite',
            description: 'Meio a meio de expresso tradicional com leite vaporizado',
            price: 9.90
        },
        {
            image: Latte,
            information: 'TRADICIONAL',
            information2: 'COM LEITE',
            coffeeName: 'Latte',
            description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
            price: 9.90
        },
        {
            image: Capuccino,
            information: 'TRADICIONAL',
            information2: 'COM LEITE',
            coffeeName: 'Capuccino',
            description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
            price: 9.90
        },
        {
            image: Macchiato,
            information: 'TRADICIONAL',
            information2: 'COM LEITE',
            coffeeName: 'Macchiato',
            description: 'Café expresso misturado com um pouco de leite quente e espuma',
            price: 9.90
        },
        {
            image: Mocaccino,
            information: 'TRADICIONAL',
            information2: 'COM LEITE',
            coffeeName: 'Mocaccino',
            description: 'Café expresso com calda de chocolate, pouco leite e espuma',
            price: 9.90
        },
        {
            image: ChocolateQuente,
            information: 'ESPECIAL',
            information2: 'COM LEITE',
            coffeeName: 'Chocolate Quente',
            description: 'Bebida feita com chocolate dissolvido no leite quente e café',
            price: 9.90
        },
        {
            image: Cubano,
            information: 'ESPECIAL',
            information2: 'ALCOÓLICO',
            information3: 'GELADO',
            coffeeName: 'Cubano',
            description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
            price: 9.90
        },
        {
            image: Havaiano,
            information: 'ESPECIAL',
            coffeeName: 'Havaiano',
            description: 'Bebida adocicada preparada com café e leite de coco',
            price: 9.90
        },
        {
            image: Arabe,
            information: 'ESPECIAL',
            coffeeName: 'Árabe',
            description: 'Bebida preparada com grãos de café árabe e especiarias',
            price: 9.90
        },
        {
            image: Irlandes,
            information: 'ESPECIAL',
            information2: 'ALCOÓLICO',
            coffeeName: 'Irlandês',
            description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
            price: 9.90
        },
    ]

    return(
        <CoffeeContext.Provider value={{
            cart,
            coffees,
            setCart,
        }}>
            {children}
        </CoffeeContext.Provider>
    )
}