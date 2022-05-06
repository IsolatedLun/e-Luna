export interface INF_Children {
    children: any;
}

export interface INF_Variant {
    variant?: string;
}

export interface INF_ClassName {
    class?: string;
}

export interface INF_CV extends INF_Children, INF_Variant {}
export interface INF_CVC extends INF_Children, INF_Variant, INF_ClassName {}