import { Link } from 'react-router-dom'
import { CART_ICON } from '../../../consts'
import { useAppSelector } from '../../../rootHooks'
import Dropdown from '../../Interactibles/Dropdown/Dropdown'
import DropdownItem from '../../Interactibles/Dropdown/DropdownItem'
import CartItem from '../../Modules/Cart/CartItem'
import NavItem from './NavItem'

const NavbarCart = () => {
  const { items } = useAppSelector(state => state.product.cart);

  return (
    <NavItem icon={ CART_ICON } ariaLabel='Shopping cart'>
        <Dropdown variant='vertical' id='navbar-cart-dropdown'>
          {
            Object.values(items).map(item => (
              <DropdownItem>
                <CartItem { ...item } />
              </DropdownItem>
            ))
          }

          <Link 
            to='/cart' 
            className='[ navbar__cart-button ] [ button ] [ pos-absolute ]' 
            data-variant='interactive'>View cart</Link>
        </Dropdown>
    </NavItem>
  )
}

export default NavbarCart