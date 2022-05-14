import "jest";
import { screen, render } from '@testing-library/react'
import { act } from "react-dom/test-utils";
import SellerPreview from './SellerPreview'
import { INF_SellerPreview } from "./types";
import { BrowserRouter } from "react-router-dom";

test('View seller and whether or not if they are verified', () => {
    let seller: INF_SellerPreview = {
        id: 0,
        username: 'joe bidome',
        is_verified: true
    }

    render(
        <BrowserRouter>
            <SellerPreview { ...seller } />
        </BrowserRouter>
    );
    
    const sellerSpan = document.querySelector('span[aria-label="joe bidome is verified"]') as HTMLElement;

    expect(sellerSpan).toBeTruthy();
})