import React from 'react'
import FilterTags from '../../../Compounds/Tags/FilterTags'
import Button from '../../../Interactibles/Buttons/Button'
import FilterSet from '../../../Modules/FilterTypes/FilterSet'
import MinMaxFilter from '../../../Modules/FilterTypes/MinMaxFilter'
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
    
    function addFilter(toAdd: INF_FilterTag, replace?: boolean) {
        props.setFilters(state => {
            if(!state.some(item => item.filter === toAdd.filter))
                return [...state, toAdd];
                
            else if(replace) {
                const idx = state.findIndex(x => x.filter === toAdd.filter);
                state[idx] = toAdd;

                return [...state];
            }

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

        <FilterSet title='Prices'>
            <TextFilter name='0$ - 25$' filter='__gte=25' setter={addFilter} value='' />
            <TextFilter name='25$ - 50$' filter='__gte=50' setter={addFilter} value='' />
            <TextFilter name='50$ - 100$' filter='__gte=100' setter={addFilter} value='' />

            <MinMaxFilter setter={addFilter} />
        </FilterSet>

        <Button variant='interactive'>Search</Button>
    </div>
  )
}

export default SearchControls