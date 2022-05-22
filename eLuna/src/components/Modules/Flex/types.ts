import { INF_Children } from "../../../types";

export interface INF_FlexItems extends INF_Children {
    blockCls: string;
    direction: 'x' | 'y';
}