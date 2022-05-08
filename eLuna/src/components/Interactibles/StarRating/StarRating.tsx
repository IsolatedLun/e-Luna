import React, { useEffect } from 'react'
import Tooltip from '../../Modules/Tooltips/Tooltip';
import TooltipContainer from '../../Modules/Tooltips/TooltipContainer';
import RatingBar from './RatingBar';
import Star from './Star';
import { INF_StarRating } from './types';

const StarRating = (props: INF_StarRating) => {
  const rating = React.createRef<HTMLDivElement>();

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

  function resetStars(el: HTMLElement) {
    for(let i = 0; i < el.children.length; i++) {
      el.children[i].setAttribute('data-variant', 'none');
    }
  }

  function highlightStar() {
    // Math.ceil being used so - 1
    // The row of the stars are reversed so -5
    const idx = Math.abs(Math.ceil(props.rating) - 6);
    const star = rating?.current?.children[idx];

    star?.setAttribute('data-variant', 'selected')
  }

  useEffect(() => {
    if(rating.current)
      highlightStar();
  }, [])

  return (
    <div 
      ref={rating}
      onClick={handleClick}
      className="[ star-rating ] [ flex flex-row-reverse flex-center ] 
        [ fs-300 gap-025 cursor-pointer select-none pos-relative ]">

        

        5 <span className="text-muted">.{ String(props.rating % 1)[2] } /</span>

        {
          [1, 2, 3, 4, 5].map((_, idx) => <Star key={idx} idx={idx} />)
        }

        <TooltipContainer>
          <Tooltip>
            <div className='[ flex-col ] [ gap-1 ]'>
              
              <RatingBar raterAmt={23} AllRatersAmt={50} idx={5} />
              
            </div>
          </Tooltip>
        </TooltipContainer> 
        
    </div>
  )
}

export default StarRating