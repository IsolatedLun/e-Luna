import { INF_AboutText } from './types'

const AboutText = (props: INF_AboutText) => {
  return (
    <p className='[ margin-block-025rem ]'>
        <span className="[ text-muted fw-bold ]">{ props.name }</span> &nbsp;
        <span className="[ fs-300 ]">{ props.value }</span>
    </p>
  )
}

export default AboutText