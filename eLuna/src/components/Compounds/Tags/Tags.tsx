import React from 'react'
import { INF_CC } from '../../../types'
import Tag from '../../Modules/Tags/Tag'
import { INF_Tags } from '../../Modules/Tags/types'

const Tags = (props: INF_Tags) => {
  return (
    <div className={` ${props.class}
    [ flex-align-center flex-justify-between margin-inline-05 ]`} data-flex-collapse>
        { props.tags.map((tag, idx) => <Tag key={idx} { ...tag } />) }
    </div>
  )
}

export default Tags