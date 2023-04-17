import { HeaderContainer } from "./HeaderStyles";
import LogoCaffee from '../images/Coffee_Delivery_Logo.svg'
import { MapPin, ShoppingCart} from 'phosphor-react'
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CoffeeContext } from "../contexts/CoffeeContext";

export function Header () {
    const {cart} = useContext(CoffeeContext)

    return(
        <HeaderContainer>
            <NavLink to='/'>
                <img src={LogoCaffee} alt="" />
            </NavLink>
            <div className="locale_and_cart">
                <div className="locale">
                    <MapPin size={20} weight="fill"/>
                    <span>Porto Alegre, RS</span>
                </div>

                <NavLink to="/checkout" className='cart'>
                    <ShoppingCart size={20} weight="fill"/>
                    {cart.length != 0 ? <span>{cart.length}</span> : '' }
                    
                </NavLink>
            </div>
        </HeaderContainer>
    )
}