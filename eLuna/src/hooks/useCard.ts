import { useState } from "react";
import { INF_Product } from "../components/Views/ProductView/types";

/**
 * @summary This hook allows you to add/remove items from the user's cart.
 * @returns [items, add(), remove()]
*/

interface INF_I_Product {
    [key: string]: INF_Product
}

export function useCart() {
    const [items, setItems] = useState<INF_I_Product>({});

    function add(item: INF_Product) {
        setItems(state => {
            const data = state;

            data[item.id] = item;

            return data;
        });
    }

    function remove(id: string) {
        setItems(state => {
            let data = state;

            delete data[id];

            return data;
        })
    }

    return [items, add, remove];
}