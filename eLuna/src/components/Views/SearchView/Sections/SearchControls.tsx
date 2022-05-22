import React from 'react'
import FilterTags from '../../../Compounds/Tags/FilterTags'
import TextFilter from '../../../Modules/FilterTypes/TextFilter'
import FilterTag from '../../../Modules/Tags/FilterTag'
import { INF_FilterTag } from '../../../Modules/Tags/types'
import { INF_SearchControls } from './types'

const SearchControls = (props: INF_SearchControls) => {

    function removeFilter(toRemove: INF_FilterTag) {
        props.setFilters(state => {
            const temp = [...state]
            return temp.filter(x => x.filter !== toRemove.filter)
        })
    }
    
    function addFilter(toAdd: INF_FilterTag) {
        props.setFilters(state => {
            if(!state.some(item => item.filter === toAdd.filter))
                return [...state, toAdd];
            return state;
        })
    }

  return (
    <div className='[ search__controls ] [ overflow-y-auto margin-block-1rem overflow-x-hidden ]'>
        <div className="[ card ]" data-variant='dark'>
            <p className='[ text-center ]'>
                <span className="text-muted">{ props.filters.length }</span>&nbsp;
                Active tags
            </p>

            <FilterTags filters={props.filters} setter={removeFilter} />
        </div>

        <TextFilter name='0$ - 25$' filter='__gte=25' setter={addFilter} />
    </div>
  )
}

export default SearchControls