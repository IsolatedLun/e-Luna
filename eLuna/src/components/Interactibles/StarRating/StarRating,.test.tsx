import { render } from "@testing-library/react";
import "jest";
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
        />
    );

    const star = document.getElementById('star-0');

    expect(star?.getAttribute('data-variant')).toBe('none');

    star?.click();

    expect(star?.getAttribute('data-variant')).toBe('selected');
})