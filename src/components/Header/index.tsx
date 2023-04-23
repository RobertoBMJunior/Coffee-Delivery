import { HeaderContainer } from "./styles";
import LogoCaffee from '../../images/Coffee_Delivery_Logo.svg'
import { MapPin, ShoppingCart} from 'phosphor-react'
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CoffeeContext } from "../../contexts/CoffeeContext";

export function Header () {
    const {cart, addressData} = useContext(CoffeeContext)

    return(
        <HeaderContainer>
            <NavLink to='/Coffee-Delivery/'>
                <img src={LogoCaffee} alt="" />
            </NavLink>
            <div className="locale_and_cart">
                <NavLink to='/Coffee-Delivery/checkout' className="locale">
                    <MapPin size={20} weight="fill"/>
                    <span>{addressData.city ? `${addressData.city}, ${addressData.uf}` : 'SEU ENDEREÇO'}</span>
                </NavLink>

                <NavLink to="/Coffee-Delivery/checkout" className='cart'>
                    <ShoppingCart size={20} weight="fill"/>
                    {cart.length != 0 ? <span>{cart.length}</span> : '' }
                </NavLink>
            </div>
        </HeaderContainer>
    )
}