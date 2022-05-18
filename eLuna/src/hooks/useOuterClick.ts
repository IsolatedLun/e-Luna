import React, { useEffect, useState } from "react";

export function useOuterClick<T>(el: HTMLElement | any, handler: () => void): HTMLElement {
    useEffect(() => {
        let _handler = (e: Event) => {
            if(el && !el.contains(e.target))
                handler();
        }

        document.addEventListener('click', _handler)

        return () => {
            document.removeEventListener('click', _handler);
        }

    }, [])

    return el;
}