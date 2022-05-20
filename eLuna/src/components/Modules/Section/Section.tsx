import React from 'react'
import { INF_Section } from './types'

const Section = (props: INF_Section) => {
  return (
    <section 
        className={`[ ${props.name}__section ] [ section ] [ margin-block-1rem ]`} 
        role={props.role}
        >
        <h2 className='[ section__title ] [ fs-300 fw-normal text-upper margin-block-end-05rem ]'>
            { props.title }
        </h2>
        
        { props.children }
    </section>
  )
}

export default Section