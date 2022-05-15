import { useState } from 'react';
import { TIMES_ICON } from '../../../consts';
import { INF_Input } from './types';

const Input = (props: INF_Input) => {
  return (
    <div className="[ input-container ] [ pos-relative ]">
        <input 
          type="text" 
          className='[ input ] [ width-100pct ]' 
          value={props.val}
          onInput={(e) => props.setter(e.currentTarget.value)} />

        {
          (props.val.length > 0 ) &&
          (
            <button
              onClick={() => props.setter('')}
              className='[ input__clear-button ] [ tag icon hoverable ] [ fw-bold pos-absolute ]' 
              data-variant='empty'>
              { TIMES_ICON }
          </button>
          )
        }
    </div>
  )
}

export default Input