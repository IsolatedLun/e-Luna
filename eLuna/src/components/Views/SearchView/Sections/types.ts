import { INF_FilterTag } from "../../../Modules/Tags/types";
import { INF_Product } from "../../ProductView/types";

export interface INF_SearchControls extends INF_SetFilters {
    filters: INF_FilterTag[];
    
    fetchProducts: (x: Obj_INF_ObjectifiedFilter) => INF_Product[];
};

export interface INF_SetFilters {
    setFilters: React.Dispatch<React.SetStateAction<INF_FilterTag[]>>;
}

interface INF_ObjectifiedFilter {
    filter: string;
    value: number | string;
}

export interface Obj_INF_ObjectifiedFilter {
    [key: string]: INF_ObjectifiedFilter;
}