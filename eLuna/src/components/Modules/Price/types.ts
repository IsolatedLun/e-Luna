import { INF_ClassName } from "../../../types";

export interface INF_Price extends INF_ClassName {
    actual_price: number;
    discount_pct: number;
    original_price: number;

    alignment?: string;
}