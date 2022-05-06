import React, { useState } from 'react'
import Dropdown from '../../Interactibles/Dropdown/Dropdown'
import DropdownItem from '../../Interactibles/Dropdown/DropdownItem'
import NavItem from './NavItem'
import { CSSTransition } from 'react-transition-group'
import { ARROW_LEFT, ARROW_RIGHT, GEAR_ICON, PLUS_ICON } from '../../../consts'

const NavbarDropdown = () => {
    const [active, setActive] = useState('main');

    return (
        <NavItem icon={`\uf0d7`} ariaLabel="Navigation dropdown">
            <Dropdown>
                <CSSTransition
                    in={active === 'main'}
                    unmountOnExit
                    timeout={500}
                    classNames='menu-primary'
                >
                    <div className="[ menu ] [ border-radius-inherit ]">
                        <DropdownItem leftIcon={PLUS_ICON}>
                            <p className="[ dropdown__text]">My Dashboard</p>
                            <p className="[ dropdown__small-text ] [ text-muted fs-200 ]">Open your dashboard.</p>
                        </DropdownItem>
                        <DropdownItem 
                            toMenu='secondary'
                            setActive={setActive}
                            leftIcon={GEAR_ICON}
                            rightIcon={ARROW_RIGHT}>
                            <p className="[ dropdown__text ]">Settings</p>
                        </DropdownItem>
                    </div>
                </CSSTransition>

                <CSSTransition
                    in={active === 'secondary'}
                    unmountOnExit
                    timeout={500}
                    classNames='menu-secondary'
                >   
                    <div className="[ menu ] [ border-radius-inherit ]">
                        <DropdownItem 
                            toMenu='main'
                            setActive={setActive}
                            leftIcon={ARROW_LEFT}>
                            <p className="[ dropdown__text]">Back</p>
                        </DropdownItem>
                    </div>

                </CSSTransition>
            </Dropdown>
        </NavItem>
    )
}

export default NavbarDropdown