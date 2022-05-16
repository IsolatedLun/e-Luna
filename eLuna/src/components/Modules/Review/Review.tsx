import React from 'react'
import StarRating from '../../Interactibles/StarRating/StarRating'
import Card from '../Cards/Card'
import Image from '../Image/Image'
import Seller from '../Seller/SellerPreview'
import { INF_Review } from './types'

const Review = (props: INF_Review) => {
  return (
    <Card class="[ review ] [ flex-align-start gap-05 ] [ fs-300 ]" spacing='spacious' variant='dark'>
        <Image 
            isInteractible={false}
            src={props.user.profile} 
            alt={`${props.user.username}'s profile`} 
            idx={props.user.id}
            />

        <div className='[ flex-col gap-05 flex-align-start ] [ width-100pct ]'>
            <div className='[ flex-justify-between ] [ width-100pct ]'>
                <StarRating 
                    rating={props.rating}
                    isViewOnly={true}
                    showControl={false} 
                    isReview={true} />
                
                <span className='[ text-muted ]'>by: <Seller { ...props.user } /></span>
            </div>

            <p>{ props.description }</p>
        </div>
    </Card>
  )
}

export default Review