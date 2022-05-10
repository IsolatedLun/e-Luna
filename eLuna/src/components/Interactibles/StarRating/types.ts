export interface INF_Rating {
    rating: number;

    _5_stars: number;
    _4_stars: number;
    _3_stars: number;
    _2_stars: number;
    _1_stars: number;
}


export interface INF_StarRating extends INF_Rating {
    isViewOnly: boolean;
}

export interface INF_Star {
    idx: number;
}

export interface INF_RatingBar {
    idx: number;
    raterAmt: number;
    AllRatersAmt: number;
}