import { INF_Rating, INF_StarRating } from "./types";

export function resetStars(el: HTMLElement) {
    for(let i = 0; i < el.children.length; i++) {
      el.children[i].setAttribute('data-variant', 'none');
    }
  }

export function highlightStar(el: HTMLElement, rating: number) {
    // Math.ceil being used so - 1
    // The row of the stars are reversed so -5
    const idx = Math.abs(Math.ceil(rating) - 6);
    const star = el.children[idx];

    star?.setAttribute('data-variant', 'selected')
}

export function sumRaters(data: INF_StarRating): number {
  if(data.isReview || !data._1_stars)
    return 0

  else
    return data._1_stars! + 
      data._2_stars! + 
      data._3_stars! + 
      data._4_stars! + 
      data._5_stars!;
}