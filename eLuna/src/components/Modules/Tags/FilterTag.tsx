import { CIRCLE_TIMES_ICON } from '../../../consts'
import Icon from '../Icon/Icon'
import { INF_FilterTag } from './types'

const FilterTag = (props: INF_FilterTag) => {

  return (
    <a 
        onClick={() => props.setter!(props)}
        href='#' 
        className='[ tag ]' 
        data-variant='link'
        >
        { props.children }
        <Icon class='[ margin-inline-025rem ]'>{ CIRCLE_TIMES_ICON }</Icon>
    </a>
  )
}

export default FilterTag