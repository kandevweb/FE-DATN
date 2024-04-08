import { IonIcon } from '@ionic/react'
import React from 'react'

const VideoPlayer = () => {
  return (
    <div className='videoFrame' uk-sticky='cls-active: sticked uk-animation-scale-up; media: 992; top:600'>
      <iframe
        src='https://www.youtube.com/embed/0fYi8SGA20k'
        className='aspect-video w-full rounded-t-md'
        uk-video='autoplay: inview'
      />
      {/* close button after stiky */}
      <button type='button' id='closebtn' className='hidden' uk-toggle='target:.videoFrame ; cls: hide'>
        <IonIcon name='close' />{' '}
      </button>
    </div>
  )
}

export default VideoPlayer
