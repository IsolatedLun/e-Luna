import React from 'react'
import { Link } from 'react-router-dom'
import Section from '../../../Modules/Section/Section'

const SellerTransactionView = () => {
  return (
    <Section name='seller' role='Seller transactions section' title='Transactions'>
        <div className="[ transaction ] [ card ] [ flex-justify-between ]" data-variant='dark'>
            <Link to=''>lol</Link>
            <p className="[ tag ] [ text-upper ]" data-variant='danger'>Sold</p>
        </div>
        <div className="[ transaction ] [ card ] [ flex-justify-between ]" data-variant='dark'>
            <Link to=''>loler</Link>
            <p className="[ tag ] [ text-upper ]" data-variant='safe'>Bought</p>
        </div>
    </Section>
  )
}

export default SellerTransactionView