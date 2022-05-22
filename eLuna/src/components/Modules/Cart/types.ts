import { INF_Product } from "../../Views/ProductView/types";

export interface INF_CartViewItem {
    item: INF_Product;
    removeItem: (item: INF_Product) => void;
}