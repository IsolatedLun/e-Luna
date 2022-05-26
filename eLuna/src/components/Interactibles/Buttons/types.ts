import React from "react";
import { INF_CVC, INF_Scheme } from "../../../types";

export interface INF_Button extends INF_CVC, INF_Scheme {
    onClick?: (e: React.MouseEvent<any>) => any;
    onBlur?: (e: React.FocusEvent<any, any>) => any;
}

export interface INF_IconButton extends INF_Button {
    ariaLabel: string;
}

export interface INF_LinkButton extends INF_IconButton {
    to: string;
} 