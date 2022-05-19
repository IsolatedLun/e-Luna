import { INF_Product } from "../../components/Views/ProductView/types"

export interface INF_ProductState {
    cart: {
        items: I_INF_Product;
        total: number;
    }
}

export interface INF_AddToCartPayload {
    payload: {
        product: INF_Product;
    }
}

export interface INF_RemoveFromCartPayload {
    payload: {
        id: number;
        price: number;
    }
}

interface I_INF_Product {
    [key: string]: INF_Product;
}