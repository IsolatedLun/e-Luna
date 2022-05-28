import React from 'react'
import Section from '../../../Modules/Section/Section'
import { INF_Seller } from '../types'
import AboutText from '../_More/AboutText'

const SellerHomeView = (props: INF_Seller) => {
  return (
    <>
        <Section title='About' name='seller' role='Seller about section'>
            <AboutText name='Joined at' value={props.joined_at} />
            <AboutText name='Telephone' value={props.telephone} />      
            <AboutText name='Email' value={props.business_email_address} />
            <AboutText name='Location' value={props.location} />                  
        </Section>

        <Section title='Statistics' name='seller' role='Seller statistics section'>
             
        </Section>
    </>
  )
}

export default SellerHomeView