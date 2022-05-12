import { INF_CVC } from '../../../types'

const Tag = (props: INF_CVC) => {
  return (
    <p className={`[ tag ] ${props.class}`} data-variant={props.variant ? props.variant : 'default'}>
        { props.children }
    </p>
  )
}

export default Tag