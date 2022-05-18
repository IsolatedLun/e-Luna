import { INF_Product } from "../../components/Views/ProductView/types"

export interface INF_ProductState {
    cart: {
        items: any;
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