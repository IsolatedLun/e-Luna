import React from 'react'
import { Link } from 'react-router-dom'
import { VERIFIED_ICON } from '../../../consts'
import Icon from '../Icon/Icon'
import { INF_SellerPreview } from './types'

const Seller = (props: INF_SellerPreview) => {
  return (
    <Link 
      className='[ tag ] [ ]' 
      data-variant='link'
      to={`/seller/${props.id}/${props.username}`}
    >
        { props.username }
        
        { props.is_verified && 
          <Icon ariaLabel={`${props.username} is verified`} class='[ margin-inline-025rem ]'>
            { VERIFIED_ICON }
          </Icon>
        }
      </Link>
  )
}

export default Seller