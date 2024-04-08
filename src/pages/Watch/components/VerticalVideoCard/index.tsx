import { svg } from '~/assets/images'
import { ROUTE_PATH } from '~/constants'

/**
 * component is for vertical videos
 */

const VerticalVideoCard = () => {
  return (
    <div className='shadow-media rounded-md bg-white text-black'>
      <a href={ROUTE_PATH.WATCH_DETAIL}>
        <div className='card-media h-28 sm:aspect-[2/1.1]'>
          <img className='' src='assets/images/video/img-1.png' alt='' />
          <div className='card-overly' />
          <img
            src={svg.icon_play}
            className='absolute !left-1/2  !top-1/2 !h-12 !w-12 -translate-x-1/2 -translate-y-1/2 opacity-[.5]'
            alt=''
          />
          <span className='absolute bottom-1 right-1 z-10 rounded bg-black bg-opacity-60 px-1.5 py-0.5 text-xs font-semibold text-white'>
            12:21
          </span>
        </div>
      </a>
      <div className='card-body'>
        <a href={ROUTE_PATH.WATCH_DETAIL}>
          <h4 className='card-title line-clamp-2 text-sm !text-black'>Amazing house construction from foundation to last detail</h4>
        </a>
        <p className='card-text mt-1.5'>
          <a href='timeline.html' className='!text-black'> 111 Jesse Steeve </a>
        </p>
        <div className='card-list-info mt-1 flex-wrap text-xs text-black'>
          <div> 27 weeks ago</div>
          <div className='hidden md:block'>·</div>
          <div> 156.9K views</div>
        </div>
      </div>
    </div>
  )
}

export default VerticalVideoCard
