import React from 'react'
import { Link } from 'react-router-dom'
import { INF_LinkButton } from './types'

const LinkButton = (props: INF_LinkButton) => {
  return (
    <Link
      onClick={props?.onClick}
      to={props.to}
      aria-hidden
      aria-label={props.ariaLabel}
      className={`[ button ] ${props.class}`}
      data-variant={props.variant}
    >
      { props.children }
    </Link>
  )
}

export default LinkButton