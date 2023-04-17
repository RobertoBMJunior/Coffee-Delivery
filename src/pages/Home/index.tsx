import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import LogoCaffeeHome from '../../images/Coffe_Home.svg'
import { CoffeeChoose, CoffeeIntroduction, HomeContainer } from './styles'
import { CoffeeCard } from '../../components/CoffeeCard'
import { useContext } from 'react'
import { CoffeeContext } from '../../contexts/CoffeeContext'


export function Home () {
    const {coffees} = useContext(CoffeeContext)

    return (
        <HomeContainer>
            <CoffeeIntroduction>
                <h1 className='first'>Encontre o café perfeito para qualquer hora do dia</h1>
                <img src={LogoCaffeeHome} alt="" className='second'/>
                <h2 className='third'>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</h2>
                <div className='fourth'>
                    <div className='items'>
                        <ShoppingCart size={18} weight='fill'/>
                        <span>Compra simples e segura</span>
                    </div>
                    <div className='items'>
                        <Package size={18} weight='fill'/>
                        <span>Embalagem mantém o café intacto</span>
                    </div>
                    <div className='items'>
                        <Timer size={18} weight='fill'/>
                        <span>Entrega rápida e rastreada</span>
                    </div>
                    <div className='items'>
                        <Coffee size={18} weight='fill'/>
                        <span>O café chega fresquinho até você</span>
                    </div>
                </div>

            </CoffeeIntroduction>

            <CoffeeChoose>
                <h1>Nossos cafes</h1>
                
                <div className='coffeeOptions'>
                    {
                        coffees.map((coffee)=>{
                            return (
                                <CoffeeCard 
                                    key={coffee.coffeeName}
                                    image={coffee.image}
                                    information={coffee.information}
                                    information2={coffee.information2}
                                    information3={coffee.information3}
                                    coffeeName={coffee.coffeeName}
                                    description={coffee.description}
                                    price={coffee.price}
                                />
                            )
                        })
                    }
                </div>
            </CoffeeChoose>
        </HomeContainer>
    )
}