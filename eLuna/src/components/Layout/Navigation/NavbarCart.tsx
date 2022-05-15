import { useEffect } from 'react'
import { CART_ICON } from '../../../consts'
import { useCart } from '../../../hooks/useCard'
import Dropdown from '../../Interactibles/Dropdown/Dropdown'
import NavItem from './NavItem'

const NavbarCart = () => {

  return (
    <NavItem icon={ CART_ICON } ariaLabel='Shopping cart'>
        <Dropdown variant='vertical' id='navbar-cart-dropdown'>
            
        </Dropdown>
    </NavItem>
  )
}

export default NavbarCart