import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CART_ICON } from '../../../consts'
import IconButton from '../../Interactibles/Buttons/IconButton'
import Input from '../../Interactibles/Inputs/Input'
import NavbarCart from './NavbarCart'
import NavbarDropdown from './NavbarDropdown'

const Navbar = () => {
  const [search, setSearch] = useState('');

  return (
    <nav className='[ main-nav ] [ flex-align-center flex-justify-between ] [ gap-05 ]' role='Primary navigation'>
        <h1 className='[ fs-700 ]'><Link to={'/'}>e-Luna</Link></h1>

        <Input setter={setSearch} val={search} />

        <ul className="[ nav-list ] [ flex gap-05 ]">
          <NavbarDropdown />
          <NavbarCart />
        </ul>
    </nav>
  )
}

export default Navbar