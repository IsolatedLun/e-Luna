import React from 'react'
import { INF_Children } from '../../../types'
import { INF_FilterSet } from './types'

const FilterSet = (props: INF_FilterSet) => {
  return (
    <div className='[ card ] [ flex-col gap-05 ] [ margin-block-05rem text-center ]'>
        <h2 className='[ fw-normal ]'>{ props.title }</h2>
        { props.children }
    </div>
  )
}

export default FilterSet