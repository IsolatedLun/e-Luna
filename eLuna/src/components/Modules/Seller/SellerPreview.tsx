import React from 'react'
import { Link } from 'react-router-dom'
import { VERIFIED_ICON } from '../../../consts'
import Icon from '../Icon/Icon'
import { INF_SellerUserPreview } from './types'

const Seller = (props: INF_SellerUserPreview) => {
  return (
    <Link 
      className='[ seller-preview ] [ tag ] [ hoverable ]' 
      data-variant='link'
      to={`/seller/${props.id}/${props.username}`}
    >
        <span className='[ fw-normal margin-inline-025rem ]'>{ props.username }</span>
        
        { props.is_verified && 
          <Icon ariaLabel={`${props.username} is verified`} class='[ margin-inline-025rem ]'>
            { VERIFIED_ICON }
          </Icon>
        }
      </Link>
  )
}

export default Seller