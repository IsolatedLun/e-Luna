import React, { useEffect } from 'react'
import Tooltip from '../../Modules/Tooltips/Tooltip';
import TooltipContainer from '../../Modules/Tooltips/TooltipContainer';
import { highlightStar, resetStars, sumRaters } from './funcs';
import RatingBar from './RatingBar';
import Star from './Star';
import { INF_StarRating } from './types';

const StarRating = (props: INF_StarRating) => {
  const rating = React.createRef<HTMLDivElement>();
  const allRatersAmt = sumRaters(props);
    

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
      data-view-only={props.isViewOnly}
      className="[ star-rating ] [ flex flex-row-reverse flex-center ] 
        [ fs-300 gap-025 pos-relative ]">

        

        5 <span className="text-muted">{
          !props.isReview && `.${ (5 - props.rating).toPrecision(1) }`
        } /</span>

        {
          [1, 2, 3, 4, 5].map((_, idx) => <Star key={idx} idx={idx} />)
        }

        {
          props.showControl &&
          (
            <TooltipContainer class='[ ]'>
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
          )
        }
        
    </div>
  )
}

export default StarRating