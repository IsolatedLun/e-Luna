import { INF_FilterType } from "../../../Modules/FilterTypes/types";
import { Obj_INF_ObjectifiedFilter } from "./types";

export function objectifyFilters(filters: INF_FilterType[]) {
    const temp: any = {};

    filters.forEach(filter => {
        temp[filter.filter] = filter.value;
    })

    return temp;
}