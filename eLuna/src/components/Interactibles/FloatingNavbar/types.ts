import { INF_Children } from "../../../types";

export interface INF_FloatingNavbar extends INF_Children {
    role: string;
}

export interface INF_FloatingNavbarList extends INF_Children {
    title: string;
}

export interface INF_FloatNavbarListItem extends INF_Children {
    to: string;
}