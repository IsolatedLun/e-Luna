import React from "react";
import { INF_Children } from "../../../types";

export interface INF_DropdownItem extends INF_Children {
    leftIcon?: string;
    rightIcon?: string;
    
    to?: string;
    toMenu?: string;
    setActive?: React.Dispatch<string>;
}