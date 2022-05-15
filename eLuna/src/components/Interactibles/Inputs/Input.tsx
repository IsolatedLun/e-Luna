import { TIMES_ICON } from '../../../consts';
import IconButton from '../Buttons/IconButton';

const Input = () => {
  return (
    <div className="[ input-container ] [ pos-relative ]">
        <input type="text" className='[ input ]' />

        <button
           className='[ input__clear-button ] [ tag icon hoverable ] [ fw-bold pos-absolute ]' 
          data-variant='empty'>
            { TIMES_ICON }
        </button>
    </div>
  )
}

export default Input