import { INF_FilterTag } from '../../Modules/Tags/types'

export interface INF_FilterTags {
    filters: INF_FilterTag[];
    setter: (x: INF_FilterTag) => void;
}