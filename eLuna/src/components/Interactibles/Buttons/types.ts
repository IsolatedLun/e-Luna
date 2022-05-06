import React from "react";
import { INF_CVC } from "../../../types";

export interface INF_Button extends INF_CVC {
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => any;
    onBlur?: (e: React.FocusEvent<HTMLButtonElement, any>) => any;
}

export interface INF_IconButton extends INF_Button {
    ariaLabel: string;
}