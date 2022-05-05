import React from "react";
import { INF_CV } from "../../../types";

export interface INF_Button<T> extends INF_CV {
    onClick?: (e: React.MouseEvent<T>) => any;
    onBlur?: (e: React.FocusEvent<HTMLButtonElement, any>) => any;
}

export interface INF_IconButton<T> extends INF_Button<T> {
    ariaLabel: string;
}