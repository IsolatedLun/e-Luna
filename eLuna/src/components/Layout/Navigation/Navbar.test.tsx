import "jest";
import { screen, render } from '@testing-library/react'
import Navbar from "./Navbar";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";

test('Open different menus of dropdowns', () => {
    render(
        <BrowserRouter>
            <Navbar />
        </BrowserRouter>
    );
    
    const btn = document.querySelector('button[aria-label="Navigation dropdown"]') as HTMLButtonElement;

    let dropdownExists = document.getElementsByClassName('dropdown').length > 1;

    expect(dropdownExists).toBe(false);

    // Opening dropdown
    act(() => {
        btn.click();
    })

    const dropdown = document.getElementsByClassName('dropdown')[0];
    expect(dropdown).not.toBe(undefined);

    // Clicking settings button to open secondary menu
    const settingsDropdownButton = screen.getByText('Settings') as HTMLButtonElement;
    act(() => {
        settingsDropdownButton.click();
    })

    expect(screen.getByText('Back')).not.toBe(undefined);
})