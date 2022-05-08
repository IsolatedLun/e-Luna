import React from 'react'
import Star from './Star';

const StarRating = () => {

  function handleClick(e: React.MouseEvent<any>) {
    const target = e.target as HTMLElement;
    const attr = target.getAttribute('data-variant');

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

  return (
    <div 
      onClick={handleClick}
      className="[ star-rating ] [ flex flex-row-reverse ] [ fs-300 gap-025 cursor-pointer select-none ]">
        {
          [1, 2, 3, 4, 5].map((_, idx) => <Star key={idx} idx={idx} />)
        }
    </div>
  )
}

export default StarRating