import React from "react";

export interface INF_Input {
    val: string;
    setter: React.Dispatch<React.SetStateAction<string>>;
}