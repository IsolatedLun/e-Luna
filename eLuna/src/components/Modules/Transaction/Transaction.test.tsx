import "jest";
import { screen, render } from '@testing-library/react'
import Transaction from "./Transaction";
import { BrowserRouter } from "react-router-dom";


test('Display a transaction', () => {
    render(
        <BrowserRouter>
            <Transaction name="lol" id={0} type={'sold'} />
        </BrowserRouter>
    );
    
    const transaction = screen.getByText('sold');

    expect(transaction.getAttribute('data-variant')).toBe('danger');
})