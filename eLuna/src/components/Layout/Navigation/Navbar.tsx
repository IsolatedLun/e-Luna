import { Link } from 'react-router-dom'
import { CART_ICON } from '../../../consts'
import IconButton from '../../Interactibles/Buttons/IconButton'
import NavbarDropdown from './NavbarDropdown'

const Navbar = () => {
  return (
    <nav className='[ main-nav ] [ flex-align-center flex-justify-between ]' role='Primary navigation'>
        <h1 className='[ fs-700 ]'><Link to={'/'}>e-Luna</Link></h1>

        <ul className="[ nav-list ] [ flex gap-05 ]">
          <NavbarDropdown />
          <IconButton ariaLabel='Shopping cart icon' class='[ border-radius-50pct ]'>
            { CART_ICON }
          </IconButton>
        </ul>
    </nav>
  )
}

export default Navbar