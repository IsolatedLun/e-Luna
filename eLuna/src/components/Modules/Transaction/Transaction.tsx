import React from 'react'
import { Link } from 'react-router-dom'
import { INF_Transaction } from './types'

const Transaction = (props: INF_Transaction) => {

    return (
        <div className="[ transaction ] [ card ] [ flex-justify-between ]" data-variant='dark'>
            <Link to={`/product/${props.id}/${props.name}`}>{ props.name }</Link>
            <p 
                className="[ tag ] [ text-upper ]" 
                data-variant={props.type === 'sold' ? 'danger' : 'safe'}
                >
                    { props.type }
            </p>
        </div>
    )
}

export default Transaction