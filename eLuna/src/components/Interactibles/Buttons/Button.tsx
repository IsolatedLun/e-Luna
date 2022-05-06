import { INF_Button } from './types'

const Button = (props: INF_Button) => {
  return (
    <button
        onClick={props.onClick}
        className={`[ button ] ${props.class}`}
        data-variant={props.variant}
    >
        { props.children }
    </button>
  )
}

export default Button