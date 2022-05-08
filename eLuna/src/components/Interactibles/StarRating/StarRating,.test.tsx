import { render } from "@testing-library/react";
import "jest";
import StarRating from "./StarRating";

test('Rate an object', () => {
    render(<StarRating />);

    const star = document.getElementById('star-0');

    expect(star?.getAttribute('data-variant')).toBe('none')

    star?.click();

    expect(star?.getAttribute('data-variant')).toBe('selected')
})