import { useState } from 'react'
import { Link } from 'react-router-dom'
import { SEARCH_ICON } from '../../../consts'
import Button from '../../Interactibles/Buttons/Button'
import IconButton from '../../Interactibles/Buttons/IconButton'
import LinkButton from '../../Interactibles/Buttons/LinkButton'
import Input from '../../Interactibles/Inputs/Input'
import NavbarCart from './NavbarCart'
import NavbarDropdown from './NavbarDropdown'

const Navbar = () => {
  const [search, setSearch] = useState('');

  return (
    <nav 
      className='[ main-nav ] [ flex-align-center flex-justify-between ] [ gap-05 ]' 
      role='Primary navigation'>
        <h1 className='[ fs-700 ]'><Link to={'/'}>e-Luna</Link></h1>

        <div className='[ flexx gap-05 ]'>
          <Input 
            onInput={(e) => setSearch(e.currentTarget.value)} 
            onClearInput={() => setSearch('')}
            val={search} 
            placeholder='Search...' />

          <LinkButton 
            variant='interactive'
            class='[ icon fw-bold ] [ fs-300 ]'
            ariaLabel='Search product' 
            to={`/search?title=${search}`}>{ SEARCH_ICON }</LinkButton>
        </div>

        <ul className="[ nav-list ] [ flex gap-05 ]">
          <NavbarDropdown />
          <NavbarCart />
        </ul>
    </nav>
  )
}

export default Navbar