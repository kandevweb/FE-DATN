import { IonIcon } from '@ionic/react'
import { svg } from '~/assets/images'

const SidebarSingVideo = () => {
  return (
    <div className='relative flex flex-col gap-2.5 lg:flex-row'>
      {/* video thumbal */}
      <div className='relative aspect-[3/1.5] shrink-0 overflow-hidden rounded-lg lg:h-[80px] lg:w-[130px]'>
        <img className='h-full w-full object-cover' src='assets/images/video/img-2.png' alt='' />
        {/* iconplay */}
        <img
          src={svg.icon_play}
          className='absolute !left-1/2 !top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2'
          alt=''
        />
        {/* timer */}
        <div className='absolute bottom-1 right-1 rounded bg-black/70 px-0.5 py-0.5 text-xs font-normal text-white'>
          10:32
        </div>
      </div>
      {/* video contents */}
      <div className='flex-1'>
        <a href='#'>
          <h3 className='mb-1.5 line-clamp-2 text-sm font-semibold'>
            Great drone jet testing range flat model show with advance
          </h3>
        </a>
        <div className='text-xs'>
          <a href='#' className='mb-0.5 flex items-center gap-1'>
            John Michael
            <IonIcon
              name='checkmark-circle'
              className='md hydrated dark:text-white'
              role='img'
              aria-label='checkmark circle'
            />
          </a>
          <div className='flex items-center gap-2'>
            <div> 260K views </div> <div> 1 days ago</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SidebarSingVideo
