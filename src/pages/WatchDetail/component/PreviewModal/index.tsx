import { IonIcon } from '@ionic/react'

const PreviewModal = () => {
  return (
    <div className='uk-open hidden max-lg:!items-start lg:overflow-hidden lg:p-10' id='preview_modal' uk-modal=''>
      <div className='uk-modal-dialog tt relative mx-auto w-full items-center overflow-hidden rounded-lg shadow-xl  lg:flex lg:h-[85vh]'>
        {/* video player */}
        <div className='relative flex h-96 w-full items-center justify-center bg-black/90 backdrop-blur lg:h-full lg:w-[calc(100vw-400px)]'>
          <div className='w-full' uk-sticky='cls-active: sticked uk-animation-scale-up; media: 992; top:600'>
            <iframe
              src='https://www.youtube.com/embed/0fYi8SGA20k'
              className='aspect-video w-full'
              uk-video='autoplay: inview'
            />
          </div>
          {/* close button */}
          <button
            type='button'
            className='uk-animation-slide-right-medium uk-modal-close absolute right-0 top-0 z-10 m-3 rounded-full bg-white p-2 dark:bg-slate-600'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              className='h-6 w-6'
            >
              <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
            </svg>
          </button>
        </div>
        {/* right sidebar */}
        <div className='dark:bg-dark2 relative flex h-full w-full  flex-col justify-between overflow-y-auto bg-white shadow-xl lg:w-[400px]'>
          <div className='p-5 pb-0'>
            {/* story heading */}
            <div className='flex gap-3 text-sm font-medium'>
              <img src='assets/images/avatars/avatar-5.jpg' alt='' className='h-9 w-9 rounded-full' />
              <div className='flex-1'>
                <h4 className='font-medium text-black dark:text-white'> Steeve </h4>
                <div className='text-xs text-gray-500 dark:text-white/80'> 2 hours ago</div>
              </div>
              {/* dropdown */}
              <div className='-m-1'>
                <button type='button' className='button-icon h-8 w-8'>
                  {' '}
                  <IonIcon className='text-xl' name='ellipsis-horizontal' />{' '}
                </button>
                <div
                  className='w-[253px]'
                  uk-dropdown='pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true'
                >
                  <nav>
                    <a href='#'>
                      {' '}
                      <IonIcon className='shrink-0 text-xl' name='bookmark-outline' /> Add to favorites{' '}
                    </a>
                    <a href='#'>
                      {' '}
                      <IonIcon className='shrink-0 text-xl' name='notifications-off-outline' /> Mute Notification{' '}
                    </a>
                    <a href='#'>
                      {' '}
                      <IonIcon className='shrink-0 text-xl' name='flag-outline' /> Report this post{' '}
                    </a>
                    <a href='#'>
                      {' '}
                      <IonIcon className='shrink-0 text-xl' name='share-outline' /> Share your profile{' '}
                    </a>
                    <hr />
                    <a href='#' className='text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50'>
                      {' '}
                      <IonIcon className='shrink-0 text-xl' name='stop-circle-outline' /> Unfollow{' '}
                    </a>
                  </nav>
                </div>
              </div>
            </div>
            <p className='mt-4 text-sm font-normal leading-6'>
              {' '}
              Photography is the art of capturing light with a camera. it can be fun, challenging. It can also be a
              hobby, a passion. 📷{' '}
            </p>
            <div className='relative -mx-5 mt-3 px-5 py-3 shadow'>
              <div className='flex items-center gap-4 text-xs font-semibold'>
                <div className='flex items-center gap-2.5'>
                  <button type='button' className='button-icon bg-red-100 text-red-500 dark:bg-slate-700'>
                    {' '}
                    <IonIcon className='text-lg' name='heart' />{' '}
                  </button>
                  <a href='#'>1,300</a>
                </div>
                <div className='flex items-center gap-3'>
                  <button type='button' className='button-icon bg-slate-100 dark:bg-slate-700'>
                    {' '}
                    <IonIcon className='text-lg' name='chatbubble-ellipses' />{' '}
                  </button>
                  <span>260</span>
                </div>
                <button type='button' className='button-icon ml-auto'>
                  {' '}
                  <IonIcon className='text-xl' name='share-outline' />{' '}
                </button>
                <button type='button' className='button-icon'>
                  {' '}
                  <IonIcon className='text-xl' name='bookmark-outline' />{' '}
                </button>
              </div>
            </div>
          </div>
          <div className='h-full flex-1 overflow-y-auto p-5'>
            {/* comment list */}
            <div className='relative space-y-5 text-sm font-medium'>
              <div className='relative flex items-start gap-3'>
                <img src='assets/images/avatars/avatar-2.jpg' alt='' className='mt-1 h-6 w-6 rounded-full' />
                <div className='flex-1'>
                  <a href='#' className='inline-block font-medium text-black dark:text-white'>
                    {' '}
                    Steeve{' '}
                  </a>
                  <p className='mt-0.5'>What a beautiful, I love it. 😍 </p>
                </div>
              </div>
              <div className='relative flex items-start gap-3'>
                <img src='assets/images/avatars/avatar-3.jpg' alt='' className='mt-1 h-6 w-6 rounded-full' />
                <div className='flex-1'>
                  <a href='#' className='inline-block font-medium text-black dark:text-white'>
                    {' '}
                    Monroe{' '}
                  </a>
                  <p className='mt-0.5'> You captured the moment.😎 </p>
                </div>
              </div>
              <div className='relative flex items-start gap-3'>
                <img src='assets/images/avatars/avatar-7.jpg' alt='' className='mt-1 h-6 w-6 rounded-full' />
                <div className='flex-1'>
                  <a href='#' className='inline-block font-medium text-black dark:text-white'>
                    {' '}
                    Alexa{' '}
                  </a>
                  <p className='mt-0.5'> This photo is amazing! </p>
                </div>
              </div>
              <div className='relative flex items-start gap-3'>
                <img src='assets/images/avatars/avatar-4.jpg' alt='' className='mt-1 h-6 w-6 rounded-full' />
                <div className='flex-1'>
                  <a href='#' className='inline-block font-medium text-black dark:text-white'>
                    {' '}
                    John
                  </a>
                  <p className='mt-0.5'> Wow, You are so talented 😍 </p>
                </div>
              </div>
              <div className='relative flex items-start gap-3'>
                <img src='assets/images/avatars/avatar-5.jpg' alt='' className='mt-1 h-6 w-6 rounded-full' />
                <div className='flex-1'>
                  <a href='#' className='inline-block font-medium text-black dark:text-white'>
                    {' '}
                    Michael{' '}
                  </a>
                  <p className='mt-0.5'> I love taking photos 🌳🐶</p>
                </div>
              </div>
              <div className='relative flex items-start gap-3'>
                <img src='assets/images/avatars/avatar-3.jpg' alt='' className='mt-1 h-6 w-6 rounded-full' />
                <div className='flex-1'>
                  <a href='#' className='inline-block font-medium text-black dark:text-white'>
                    {' '}
                    Monroe{' '}
                  </a>
                  <p className='mt-0.5'> Awesome. 😊😢 </p>
                </div>
              </div>
              <div className='relative flex items-start gap-3'>
                <img src='assets/images/avatars/avatar-5.jpg' alt='' className='mt-1 h-6 w-6 rounded-full' />
                <div className='flex-1'>
                  <a href='#' className='inline-block font-medium text-black dark:text-white'>
                    {' '}
                    Jesse{' '}
                  </a>
                  <p className='mt-0.5'> Well done 🎨📸 </p>
                </div>
              </div>
              <div className='relative flex items-start gap-3'>
                <img src='assets/images/avatars/avatar-2.jpg' alt='' className='mt-1 h-6 w-6 rounded-full' />
                <div className='flex-1'>
                  <a href='#' className='inline-block font-medium text-black dark:text-white'>
                    {' '}
                    Steeve{' '}
                  </a>
                  <p className='mt-0.5'>What a beautiful, I love it. 😍 </p>
                </div>
              </div>
              <div className='relative flex items-start gap-3'>
                <img src='assets/images/avatars/avatar-7.jpg' alt='' className='mt-1 h-6 w-6 rounded-full' />
                <div className='flex-1'>
                  <a href='#' className='inline-block font-medium text-black dark:text-white'>
                    {' '}
                    Alexa{' '}
                  </a>
                  <p className='mt-0.5'> This photo is amazing! </p>
                </div>
              </div>
              <div className='relative flex items-start gap-3'>
                <img src='assets/images/avatars/avatar-4.jpg' alt='' className='mt-1 h-6 w-6 rounded-full' />
                <div className='flex-1'>
                  <a href='#' className='inline-block font-medium text-black dark:text-white'>
                    {' '}
                    John
                  </a>
                  <p className='mt-0.5'> Wow, You are so talented 😍 </p>
                </div>
              </div>
              <div className='relative flex items-start gap-3'>
                <img src='assets/images/avatars/avatar-5.jpg' alt='' className='mt-1 h-6 w-6 rounded-full' />
                <div className='flex-1'>
                  <a href='#' className='inline-block font-medium text-black dark:text-white'>
                    {' '}
                    Michael{' '}
                  </a>
                  <p className='mt-0.5'> I love taking photos 🌳🐶</p>
                </div>
              </div>
              <div className='relative flex items-start gap-3'>
                <img src='assets/images/avatars/avatar-3.jpg' alt='' className='mt-1 h-6 w-6 rounded-full' />
                <div className='flex-1'>
                  <a href='#' className='inline-block font-medium text-black dark:text-white'>
                    {' '}
                    Monroe{' '}
                  </a>
                  <p className='mt-0.5'> Awesome. 😊😢 </p>
                </div>
              </div>
            </div>
          </div>
          <div className='dark:bg-dark2 flex items-center gap-2 bg-white p-3 text-sm font-medium'>
            <img src='assets/images/avatars/avatar-2.jpg' alt='' className='h-6 w-6 rounded-full' />
            <div className='relative flex-1 overflow-hidden '>
              <textarea
                placeholder='Add Comment....'
                rows={1}
                className='resize- w-full  resize-y px-4 py-2 focus:!border-transparent focus:!ring-transparent'
                defaultValue={''}
              />
              <div className='absolute bottom-0.5 right-0 m-3 flex items-center gap-2'>
                <IonIcon className='flex text-xl text-blue-700' name='image' />
                <IonIcon className='flex text-xl text-yellow-500' name='happy' />
              </div>
            </div>
            <button type='submit' className='hidden rounded-full bg-secondery px-4 py-1.5 text-sm font-semibold'>
              {' '}
              Replay
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PreviewModal
