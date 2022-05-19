import React from 'react'
import { FloatNavbar, FloatNavbarItem, FloatNavbarList } from '../../Interactibles/FloatingNavbar/FloatNavbar'
import Image from '../../Modules/Image/Image'

const SellerView = () => {
  return (
    <div className="[ seller-container ] [ margin-block-1rem ]">
        <section className="[ seller ]">
            <header className='[ seller__header ] [ flex-align-center gap-05 ]'>
                <Image src='' alt='' isInteractible={false} idx={0} />
                <h2>Joe bideen</h2>
            </header>

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

                <div className='[ floating-navbar-margin ]'>
                    <p>lol</p>
                </div>
            </div>
        </section>
    </div>
  )
}

export default SellerView