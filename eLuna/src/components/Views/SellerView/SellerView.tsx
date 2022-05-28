import { Route, Routes, useParams, useSearchParams } from 'react-router-dom'
import { FloatNavbar, FloatNavbarItem, FloatNavbarList } from '../../Interactibles/FloatingNavbar/FloatNavbar'
import SellerHomeView from './Sections/SellerHomeView'
import SellerTransactionView from './Sections/SellerTransactionView'
import SellerViewHeader from './SellerViewHeader'
import { useGetUserQuery } from '../../../services/userService'
import { useEffect } from 'react'
import ViewLoader from '../../Modules/Loader/ViewLoader'

const SellerView = () => {
    const { id, name } = useParams();
    const { data } = useGetUserQuery({ id, name });

    if(data)
        return (
            <div className="[ seller-container ] [ margin-block-1rem ]">
                <section className="[ seller ]">
                    <SellerViewHeader { ...data } />

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
                                <Route 
                                    path='' 
                                    element={<SellerHomeView { ...data } />} />

                                <Route 
                                    path='transactions' 
                                    element={<SellerTransactionView 
                                        transactions={data.transactions} />} />
                            </Routes>
                        </div>
                    </div>
                </section>
            </div>
        )
    else
        return <ViewLoader headerName='User' text={name!} />
}

export default SellerView