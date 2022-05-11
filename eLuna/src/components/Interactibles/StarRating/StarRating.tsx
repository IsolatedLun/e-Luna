import React, { useEffect } from 'react'
import Tooltip from '../../Modules/Tooltips/Tooltip';
import TooltipContainer from '../../Modules/Tooltips/TooltipContainer';
import { highlightStar, resetStars } from './funcs';
import RatingBar from './RatingBar';
import Star from './Star';
import { INF_StarRating } from './types';

const StarRating = (props: INF_StarRating) => {
  const rating = React.createRef<HTMLDivElement>();
  const allRatersAmt = 
    props._1_stars + 
    props._2_stars + 
    props._3_stars + 
    props._4_stars + 
    props._5_stars;

  function handleClick(e: React.MouseEvent<any>) {
    if(props.isViewOnly)
      return;

    const target = e.target as HTMLElement;
    const attr = target.getAttribute('data-variant');

    // Select parent element of the star to loop through all the children
    if(target.parentElement && target.parentElement?.classList.contains('star-rating'))
      resetStars(target.parentElement!);

    if(attr === 'none')
      target.setAttribute('data-variant', 'selected');
  }

  useEffect(() => {
    if(rating.current)
      highlightStar(rating.current, props.rating);
  }, [])

  return (
    <div 
      ref={rating}
      onClick={handleClick}
      className="[ star-rating ] [ flex flex-row-reverse flex-center ] 
        [ fs-300 gap-025 pos-relative ]">

        

        5 <span className="text-muted">.{ String(props.rating % 1)[2] } /</span>

        {
          [1, 2, 3, 4, 5].map((_, idx) => <Star key={idx} idx={idx} />)
        }

        <TooltipContainer class='[ margin-inline-05 ]'>
          <Tooltip>
            <div className='[ flex-col ] [ gap-1 flex-column-reverse ]'>
              
              { 
                [1, 2, 3, 4, 5].map((_, idx) => {
                  const rateAmt = Number(eval(`props._${idx + 1}_stars`));

                  return <RatingBar raterAmt={rateAmt} AllRatersAmt={allRatersAmt} idx={idx + 1}  />
                }) 
              }
              
            </div>
          </Tooltip>
        </TooltipContainer> 
        
    </div>
  )
}

export default StarRating