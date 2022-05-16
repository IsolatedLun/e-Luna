import { render, screen } from "@testing-library/react";
import "jest";
import RatingBar from "./RatingBar";
import StarRating from "./StarRating";

test('Rate an object', () => {
    render(
        <StarRating 
            rating={0} 
            _5_stars={0} 
            _4_stars={0} 
            _3_stars={0}
            _2_stars={0}
            _1_stars={0}
            isViewOnly={false}
            showControl={true}
            isReview={false}
        />
    );

    const star = document.getElementById('star-0');

    expect(star?.getAttribute('data-variant')).toBe('none');

    star?.click();

    expect(star?.getAttribute('data-variant')).toBe('selected');
})

test('Display a rating bar where 100% of people rated 5 stars', () => {
    render(
        <RatingBar raterAmt={50} AllRatersAmt={50} idx={5} />
    );

    const text = screen.getByText('100% of people rated this 5 stars.');
    expect(text).not.toBe(undefined);
})