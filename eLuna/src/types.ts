export interface INF_Children {
    children: any;
}

export interface INF_Scheme {
    scheme?: string;
}

export interface INF_Variant {
    variant?: string;
}

export interface INF_ClassName {
    class?: string;
}

export interface INF_AriaLabel {
    ariaLabel?: string;
}

export interface INF_ID {
    id?: string;
}

export interface INF_CV extends INF_Children, INF_Variant {};
export interface INF_CVC extends INF_CV, INF_ClassName {};
export interface INF_CC extends INF_Children, INF_ClassName {};
export interface INF_ClassVrt extends INF_ClassName, INF_Variant {};
export interface INF_CVCA extends INF_CVC, INF_AriaLabel {};

export interface INF_CVCD extends INF_CVC, INF_ID {};