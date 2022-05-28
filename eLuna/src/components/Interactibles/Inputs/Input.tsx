import { useState } from 'react';
import { TIMES_ICON } from '../../../consts';
import { INF_Input } from './types';

const Input = (props: INF_Input<any>) => {
  function hasTypeof(val: any, conditions: string[]) {
    return conditions.includes(typeof(val));
  }

  return (
    <div className="[ input-container ] [ pos-relative ]">
        <input 
          className='[ input ] [ width-100pct ]' 
          value={props.val}
          placeholder={props.placeholder}
          type={props.type ? props.type : 'text'}
          { ...{ "data-desktop-only": true } }
          onInput={props.onInput} />

        {
          (props.onClearInput && 
            hasTypeof(props.val, ['string', 'number']) && 
            props.val.length > 0 
          ) &&
          (
            <button
              onClick={() => props.onClearInput!()}
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