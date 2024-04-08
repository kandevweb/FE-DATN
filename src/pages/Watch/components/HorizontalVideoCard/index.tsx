import { IonIcon } from '@ionic/react'
import React from 'react'
import { svg } from '~/assets/images'

const HorizontalVideoCard = () => {
  return (
    <React.Fragment>
      <div className='card-list'>
        <a href='video-watch.html'>
          <div className='card-list-media aspect-[3/1.5] sm:aspect-[3/1.2] md:h-[180px] md:w-[320px]'>
            <img src='src/assets/images/video/img-2.png' alt='' />
            <img
              src={svg.icon_play}
              className='absolute !left-1/2 !top-1/2 !h-12 !w-12 -translate-x-1/2 -translate-y-1/2'
              alt=''
            />
            <span className='absolute bottom-1 right-1 z-10 rounded bg-black bg-opacity-60 px-1.5 py-0.5 text-xs font-semibold text-white'>
              12:21
            </span>
          </div>
        </a>
        <div className='card-list-body relative'>
          <a href='video-watch.html'>
            <h3 className='card-list-title lg:mt-2 lg:line-clamp-1'>
              Great drone jet testing range flat model show with advance
            </h3>
          </a>
          <p className='card-list-text'>
            consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam,
          </p>
          <a href='timeline.html'>
            <div className='card-list-link mt-5'> John Michael </div>
          </a>
          <div className='flex items-center justify-between'>
            <div className='card-list-info'>
              <div> 27 weeks ago</div>
              <div className='hidden md:block'>·</div>
              <div> 156.9K views</div>
            </div>
            <button
              type='button'
              className=' bg-second ery border2 hidden rounded-lg px-3.5 py-1.5 text-sm md:inline-block'
            >
              Add favorites
            </button>
          </div>
          {/* dropdown menu */}
          <div className=' absolute right-0 top-0 -m-1'>
            <button type='button' className='grid h-10 w-10 place-items-center rounded-full hover:bg-secondery'>
              <IonIcon className='text-2xl' name='ellipsis-horizontal' />
            </button>
            <div
              className='w-[245px]'
              uk-dropdown='pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click'
            >
              <nav>
                <a href='#'>
                  <IonIcon className='text-xl' name='bookmark-outline' /> Add to favorites
                </a>
                <a href='#'>
                  <IonIcon className='text-xl' name='albums-outline' /> add to collections
                </a>
                <a href='#'>
                  <IonIcon className='text-xl' name='flag-outline' /> Report
                </a>
                <a href='#'>
                  <IonIcon className='text-xl' name='share-outline' /> Share
                </a>
                <hr />
                <a href='#' className='text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50'>
                  <IonIcon className='text-xl' name='trash-outline' /> Delete
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <hr className='card-list-divider' />
    </React.Fragment>
  )
}

export default HorizontalVideoCard
