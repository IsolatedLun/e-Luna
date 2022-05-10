import { render, screen } from '@testing-library/react'
import 'jest'
import Price from './Price'

test('Display a product\'s price with a 0.5% discount', () => {
    // An apple product, most probably a monitor charger...
    render(
        <Price actual_price={9000} discount_pct={0.5} />
    )

    const discountedPrice = document.querySelector('p[data-price="8955.00"]');
    
    expect(discountedPrice).toBeTruthy();
})