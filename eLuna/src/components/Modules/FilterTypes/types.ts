import { INF_Children } from "../../../types";

export interface INF_FilterType {
    name: string;
    filter: string;
    value: string;

    setter?: any | [(x: INF_FilterType, replace?: boolean) => void];
}

export interface INF_FilterInputType {
    filter: string;
    setter?: any | [(x: INF_FilterType, replace?: boolean) => void];
}

export interface INF_MultiFilterType {
    setter?: [(x: INF_FilterType, replace?: boolean) => void] | any;
}

export interface INF_FilterSet extends INF_Children {
    title: string;
}

export interface INF_TextInputFilter extends INF_FilterInputType {
    keyName: string;
    placeholder: string;
    value?: string | any;
}