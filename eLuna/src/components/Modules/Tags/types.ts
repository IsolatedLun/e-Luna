import { INF_ClassName, INF_CVC } from "../../../types";

export interface INF_Tags extends INF_ClassName {
    tags: INF_Tag[];
}

export interface INF_Tag extends INF_CVC {}