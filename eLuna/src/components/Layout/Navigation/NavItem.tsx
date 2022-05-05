import React, { useState } from 'react'
import IconButton from '../../Interactibles/Buttons/IconButton';
import { INF_NavItem } from './types';

const NavItem = (props: INF_NavItem) => {
    const [isOpen, setOpen] = useState(false);

  return (
    <li className='[ nav-item ]'>
        <IconButton ariaLabel={props.ariaLabel} onClick={() => setOpen(!isOpen)}>
            { props.icon }
        </IconButton>

        { isOpen && props.children }
    </li>
  )
}

export default NavItem;