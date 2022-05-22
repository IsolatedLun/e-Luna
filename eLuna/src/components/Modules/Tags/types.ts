import { INF_Children, INF_ClassName, INF_CVC } from "../../../types";
import { INF_FilterType } from "../FilterTypes/types";

export interface INF_Tags extends INF_ClassName {
    tags: INF_Tag[];
}

export interface INF_FilterTag extends INF_FilterType, INF_Children {};

export interface INF_Tag extends INF_CVC {};