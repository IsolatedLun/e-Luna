import React from 'react'
import ItemCard from '../../Modules/Cards/ProductCard';
import { INF_ItemScroller } from './types';

const MediaScroller = (props: INF_ItemScroller) => {
  return (
    <div className='[ media-scroller scroller-snapper-inline ]' data-grid-collapse>
        {
            props.items.map(item => (
                <div className="[ media-element ]">
                    { item }
                </div>
            ))
        }
    </div>
  )
}

export default MediaScroller;