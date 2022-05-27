import React from 'react'
import SmoothBar from '../../Modules/SmoothBar/SmoothBar'

const PageNotFound = () => {
  return (
    <div className='[ page-not-found ] [ flow ] [ text-center absolute-center ]'>
        <div className="[ pos-relative ]">
            <h2 className='[ text-error ]'>Woops! Page not found.</h2>
            <SmoothBar />
        </div>
        <p className='[ text-muted margin-block-05rem ]'>Don't blame me :(</p>
    </div>
  )
}

export default PageNotFound