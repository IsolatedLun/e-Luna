import { INF_FilterTag } from "../../../Modules/Tags/types";

export interface INF_SearchControls extends INF_SetFilters {
    filters: INF_FilterTag[];
};

export interface INF_SetFilters {
    setFilters: React.Dispatch<React.SetStateAction<INF_FilterTag[]>>;
}