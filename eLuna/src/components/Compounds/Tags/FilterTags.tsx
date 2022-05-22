import React from 'react'
import FilterTag from '../../Modules/Tags/FilterTag'
import { INF_FilterTags } from './types'

const FilterTags = (props: INF_FilterTags) => {
  return (
    <div className="[ flex-wrap gap-025 ] [ margin-block-025rem ]">
        {
            props.filters.map(tag => (
                <FilterTag name={tag.name} filter={tag.filter}  setter={props.setter}>
                    { tag.name }
                </FilterTag>
            ))
        }
    </div>
  )
}

export default FilterTags