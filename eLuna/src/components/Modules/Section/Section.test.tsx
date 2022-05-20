import { render, screen } from '@testing-library/react'
import 'jest'
import Section from './Section';

test('Display a section with a "product details" role', () => {
    // An apple product, most probably a monitor charger...
    render(
        <Section name='product' title='More' role='product details'>
            
        </Section>
    )

    const section = document.querySelector('[role="product details"]') as HTMLElement;
    
    expect(section.getAttribute('role')).toBe('product details');
})