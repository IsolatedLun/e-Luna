import FilterTags from '../../../Compounds/Tags/FilterTags'
import Button from '../../../Interactibles/Buttons/Button'
import FilterSet from '../../../Modules/FilterTypes/FilterSet'
import MinMaxFilter from '../../../Modules/FilterTypes/MinMaxFilter'
import TextFilter from '../../../Modules/FilterTypes/TextFilter'
import TextInputFilter from '../../../Modules/FilterTypes/TextInputFilter'
import { INF_FilterTag } from '../../../Modules/Tags/types'
import { objectifyFilters } from './funcs'
import { INF_SearchControls } from './types'

const SearchControls = (props: INF_SearchControls) => {

    function removeFilter(toRemove: INF_FilterTag) {
        props.setFilters(state => {
            const temp = [...state]
            return temp.filter(x => x.filter !== toRemove.filter)
        })
    }
    
    /**
     * @param newFilter
     * @param replace - Replaces filter instead of creating a new filter with the same type. 
    */
    function addFilter(toAdd: INF_FilterTag, replace?: boolean) {
        // Automatically remove empty texts. 
        if(typeof(toAdd.value) === 'string' && toAdd.value.length === 0) {
            removeFilter(toAdd);
            return;
        }
            

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
            <TextFilter name='0$ - 25$' filter='actual_price__gte' setter={addFilter} value='25' />
            <TextFilter name='25$ - 50$' filter='actual_price__gte' setter={addFilter} value='50' />
            <TextFilter name='50$ - 100$' filter='actual_price__gte' setter={addFilter} value='100' />

            <MinMaxFilter setter={addFilter} />
        </FilterSet>

        <FilterSet title='Misc'>
            <TextInputFilter 
                placeholder='Enter title' 
                filter='name__icontains' 
                setter={addFilter} 
                keyName={'Title'}
                />
            <TextInputFilter 
                placeholder='Enter seller' 
                filter='seller__username__icontains' 
                setter={addFilter} 
                keyName={'Seller'}
                />
        </FilterSet>

        <Button 
            variant='interactive'
            onClick={() => props.fetchProducts(objectifyFilters(props.filters))}
            >
            Search
        </Button>
    </div>
  )
}

export default SearchControls
