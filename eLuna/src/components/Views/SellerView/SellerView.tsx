import React from 'react'
import { FloatNavbar, FloatNavbarItem, FloatNavbarList } from '../../Interactibles/FloatingNavbar/FloatNavbar'
import Image from '../../Modules/Image/Image'
import Section from '../../Modules/Section/Section'
import SellerViewHeader from './SellerViewHeader'
import StatCard from './_More/StatCard'

const SellerView = () => {
  return (
    <div className="[ seller-container ] [ margin-block-1rem ]">
        <section className="[ seller ]">
            <SellerViewHeader />

            <div className='[ flex ]' data-flex-collapse>
                <FloatNavbar role='Seller side navigation'>
                    <FloatNavbarList title='Public'>
                        <FloatNavbarItem to=''>
                            Home
                        </FloatNavbarItem>
                        <FloatNavbarItem to=''>
                            Transactions
                        </FloatNavbarItem>
                    </FloatNavbarList>
                </FloatNavbar>

                <div className='[ floating-navbar-margin ] [ width-100pct ]'>
                    <Section title='About' name='seller' role='Seller about section'>

                    </Section>
                </div>
            </div>
        </section>
    </div>
  )
}

export default SellerView