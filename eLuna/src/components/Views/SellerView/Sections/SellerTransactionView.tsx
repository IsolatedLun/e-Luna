import React from 'react'
import { Link } from 'react-router-dom'
import FlexItems from '../../../Modules/Flex/FlexItems'
import Section from '../../../Modules/Section/Section'
import Transaction from '../../../Modules/Transaction/Transaction'
import { INF_Transaction } from '../../../Modules/Transaction/types'

const SellerTransactionView = ({ transactions } : { transactions: INF_Transaction[] }) => {
  return (
    <Section name='seller' role='Seller transactions section' title='Transactions'>
        <FlexItems direction='y' blockCls='transactions'>
          {
            transactions.map(transaction => <Transaction { ...transaction } />)
          }
        </FlexItems>
    </Section>
  )
}

export default SellerTransactionView