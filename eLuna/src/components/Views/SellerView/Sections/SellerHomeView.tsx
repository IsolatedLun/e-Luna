import React from 'react'
import Section from '../../../Modules/Section/Section'
import AboutText from '../_More/AboutText'

const SellerHomeView = () => {
  return (
    <>
        <Section title='About' name='seller' role='Seller about section'>
            <AboutText name='Joined at' value='Today' />
            <AboutText name='Telephone' value='+961 0000000' />      
            <AboutText name='Email' value='lol@gmail.com' />
            <AboutText name='Location' value='Here' />                  
        </Section>

        <Section title='Statistics' name='seller' role='Seller statistics section'>
             
        </Section>
    </>
  )
}

export default SellerHomeView