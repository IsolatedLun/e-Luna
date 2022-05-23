import React from "react";

export interface INF_Input<T> {
    val: T;
    placeholder: string;
    type?: string;

    onInput: (e: React.FormEvent<HTMLInputElement>) => void;
    onClearInput?: Function;
}