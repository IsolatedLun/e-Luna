import { INF_Product } from "../../components/Views/ProductView/types";

export function aggregateProductSum(items: INF_Product[]) {
    let sum = 0;

    items.forEach(item => sum += item.price.actual_price);

    return sum;
}