import React, { CSSProperties } from 'react'
import { INF_RatingBar } from './types'

const RatingBar = (props: INF_RatingBar) => {
    const style = {'--_scale-pct': calculateRatersPct()} as CSSProperties;

    console.log(props)

    function calculateRatersPct() {
        if(props.raterAmt === 0 || props.AllRatersAmt === 0)
            return 0;

        return props.raterAmt / props.AllRatersAmt;
    }

    return (
        <div className="[ flex-col ] [ gap-025 ]">
            <p className="[ fs-100 white-space-nowrap ]">
                { Math.ceil(calculateRatersPct() * 100) }% of people rated this { props.idx } stars.
            </p>
            <div className="[ rating__bar ] [ pos-relative overflow-hidden ]" style={style}>

            </div>
        </div>
    )
}

export default RatingBar