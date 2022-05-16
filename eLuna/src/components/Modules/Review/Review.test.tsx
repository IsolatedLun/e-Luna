import { render, screen } from '@testing-library/react'
import 'jest'
import Review from './Review';

test('Display a review with a rating of 1 star', () => {
    render(
        <Review 
            rating={1}
            description={'What the fuck was this game all about... 0/10'}
            user={{ id: 0, is_verified: false, profile: '', username: 'noob' }} />
    )

    const user = screen.getByText('noob');
    const reviewDesc = screen.getByText('What the fuck was this game all about... 0/10');
    const rating = document.getElementById('star-4')
    
    expect(user.getAttribute('aria-label')).toBeNull();
    expect(reviewDesc).toBeTruthy();
    expect(rating?.getAttribute('data-variant')).toBe('selected');
})