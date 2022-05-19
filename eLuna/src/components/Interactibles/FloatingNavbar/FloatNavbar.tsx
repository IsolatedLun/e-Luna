import { Link } from 'react-router-dom'
import { INF_FloatingNavbar, INF_FloatingNavbarList, INF_FloatNavbarListItem } from './types'

const FloatNavbarItem = (props: INF_FloatNavbarListItem) => {
    return (
        <li className='[ navbar__list-item ]'>
            <Link to={props.to} data-variant='default'>{ props.children }</Link>
        </li>
    )
}

const FloatNavbarList = (props: INF_FloatingNavbarList) => {
    return (
        <section>
            <h2 className='[ text-muted fs-300 margin-block-025rem ]'>{ props.title }</h2>
            <ul className='[ navbar__list ] [ flex-col ]'>
                { props.children }
            </ul>
        </section>
    )
}

const FloatNavbar = (props: INF_FloatingNavbar) => {
    return (
        <nav 
            className='[ card ] [ floating-navbar ] [ pos-sticky margin-block-05rem ]' 
            data-variant='dark' 
            role={props.role} 
            data-spacing='spacious'
            >
            { props.children }
        </nav>
    )
}

export { FloatNavbar, FloatNavbarList, FloatNavbarItem };