import { Route, Routes } from 'react-router-dom'
import { 
    FloatNavbar, 
    FloatNavbarItem, 
    FloatNavbarList } from '../../Interactibles/FloatingNavbar/FloatNavbar'

import SellerHomeView from './Sections/SellerHomeView'
import SellerTransactionView from './Sections/SellerTransactionView'
import SellerViewHeader from './SellerViewHeader'

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
                        <FloatNavbarItem to='transactions'>
                            Transactions
                        </FloatNavbarItem>
                    </FloatNavbarList>
                </FloatNavbar>

                <div className='[ floating-navbar-margin ] [ width-100pct ]'>
                    <Routes>
                        <Route path='' element={<SellerHomeView />} />
                        <Route path='transactions' element={<SellerTransactionView />} />
                    </Routes>
                </div>
            </div>
        </section>
    </div>
  )
}

export default SellerView