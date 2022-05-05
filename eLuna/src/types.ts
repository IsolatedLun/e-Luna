export interface INF_Children {
    children: any;
}

export interface INF_Variant {
    variant?: string;
}

export interface INF_CV extends INF_Children, INF_Variant {}