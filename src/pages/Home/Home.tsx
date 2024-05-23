import { IonIcon } from '@ionic/react'

function Home() {
  return (
    <div className='mx-auto max-w-[1065px] gap-12 lg:flex 2xl:gap-16' id='js-oversized'>
      <div className='mx-auto max-w-[680px]'>
        {/* stories */}
        <div className='mb-8'>
          <h3 className='hidden text-2xl  font-extrabold text-black dark:text-white'> Stories</h3>
          <div className='relative' tabIndex={-1} uk-slider='auto play: true;finite: true' uk-lightbox=''>
            <div className='uk-slider-container py-5'>
              <ul
                className='uk-slider-items w-[calc(100%+14px)]'
                uk-scrollspy='target: > li; cls: uk-animation-scale-up; delay: 20;repeat:true'
              >
                <li className='md:pr-3' uk-scrollspy-class='uk-animation-fade'>
                  <div
                    className='dark:bg-dark2 relative grid h-12 w-12 shrink-0 place-items-center rounded-full border-2 border-dashed border-slate-300 bg-slate-200 md:h-16 md:w-16 dark:border-slate-700'
                    uk-toggle='target: #create-story'
                  >
                    <IonIcon icon='camera' className='text-2xl' />
                  </div>
                </li>
                <li className='pr-2 duration-300 hover:-rotate-2 hover:scale-[1.15] md:pr-3'>
                  <a href='/src/assets/images/avatars/avatar-lg-1.jpg' data-caption='Caption 1'>
                    <div className='relative h-12 w-12 overflow-hidden rounded-full border-2 border-white shadow md:h-16 md:w-16 md:border-4 dark:border-slate-700'>
                      <img
                        src='/src/assets/images/avatars/avatar-2.jpg'
                        alt=''
                        className='absolute h-full w-full object-cover'
                      />
                    </div>
                  </a>
                </li>
                <li className='pr-2 duration-300 hover:-rotate-2 hover:scale-[1.15] md:pr-3'>
                  <a href='/src/assets/images/avatars/avatar-lg-2.jpg' data-caption='Caption 1'>
                    <div className='relative h-12 w-12 overflow-hidden rounded-full border-2 border-white shadow md:h-16 md:w-16 md:border-4 dark:border-slate-700'>
                      <img
                        src='/src/assets/images/avatars/avatar-3.jpg'
                        alt=''
                        className='absolute h-full w-full object-cover'
                      />
                    </div>
                  </a>
                </li>
                <li className='pr-2 duration-300 hover:-rotate-2 hover:scale-[1.15] md:pr-3'>
                  <a href='/src/assets/images/avatars/avatar-lg-4.jpg' data-caption='Caption 1'>
                    <div className='relative h-12 w-12 overflow-hidden rounded-full border-2 border-white shadow md:h-16 md:w-16 md:border-4 dark:border-slate-700'>
                      <img
                        src='/src/assets/images/avatars/avatar-5.jpg'
                        alt=''
                        className='absolute h-full w-full object-cover'
                      />
                    </div>
                  </a>
                </li>
                <li className='pr-2 duration-300 hover:-rotate-2 hover:scale-[1.15] md:pr-3'>
                  <a href='/src/assets/images/avatars/avatar-lg-5.jpg' data-caption='Caption 1'>
                    <div className='relative h-12 w-12 overflow-hidden rounded-full border-2 border-white shadow md:h-16 md:w-16 md:border-4 dark:border-slate-700'>
                      <img
                        src='/src/assets/images/avatars/avatar-6.jpg'
                        alt=''
                        className='absolute h-full w-full object-cover'
                      />
                    </div>
                  </a>
                </li>
                <li className='pr-2 duration-300 hover:-rotate-2 hover:scale-[1.15] md:pr-3'>
                  <a href='/src/assets/images/avatars/avatar-lg-1.jpg' data-caption='Caption 1'>
                    <div className='relative h-12 w-12 overflow-hidden rounded-full border-2 border-white shadow md:h-16 md:w-16 md:border-4 dark:border-slate-700'>
                      <img
                        src='/src/assets/images/avatars/avatar-7.jpg'
                        alt=''
                        className='absolute h-full w-full object-cover'
                      />
                    </div>
                  </a>
                </li>
                <li className='pr-2 duration-300 hover:-rotate-2 hover:scale-[1.15] md:pr-3'>
                  <a href='/src/assets/images/avatars/avatar-lg-1.jpg' data-caption='Caption 1'>
                    <div className='relative h-12 w-12 overflow-hidden rounded-full border-2 border-white shadow md:h-16 md:w-16 md:border-4 dark:border-slate-700'>
                      <img
                        src='/src/assets/images/avatars/avatar-2.jpg'
                        alt=''
                        className='absolute h-full w-full object-cover'
                      />
                    </div>
                  </a>
                </li>
                <li className='pr-2 duration-300 hover:-rotate-2 hover:scale-[1.15] md:pr-3'>
                  <a href='/src/assets/images/avatars/avatar-lg-2.jpg' data-caption='Caption 1'>
                    <div className='relative h-12 w-12 overflow-hidden rounded-full border-2 border-white shadow md:h-16 md:w-16 md:border-4 dark:border-slate-700'>
                      <img
                        src='/src/assets/images/avatars/avatar-3.jpg'
                        alt=''
                        className='absolute h-full w-full object-cover'
                      />
                    </div>
                  </a>
                </li>
                <li className='pr-2 duration-300 hover:-rotate-2 hover:scale-[1.15] md:pr-3'>
                  <a href='/src/assets/images/avatars/avatar-lg-4.jpg' data-caption='Caption 1'>
                    <div className='relative h-12 w-12 overflow-hidden rounded-full border-2 border-white shadow md:h-16 md:w-16 md:border-4 dark:border-slate-700'>
                      <img
                        src='/src/assets/images/avatars/avatar-5.jpg'
                        alt=''
                        className='absolute h-full w-full object-cover'
                      />
                    </div>
                  </a>
                </li>
                <li className='pr-2 duration-300 hover:-rotate-2 hover:scale-[1.15] md:pr-3'>
                  <a href='/src/assets/images/avatars/avatar-lg-5.jpg' data-caption='Caption 1'>
                    <div className='relative h-12 w-12 overflow-hidden rounded-full border-2 border-white shadow md:h-16 md:w-16 md:border-4 dark:border-slate-700'>
                      <img
                        src='/src/assets/images/avatars/avatar-6.jpg'
                        alt=''
                        className='absolute h-full w-full object-cover'
                      />
                    </div>
                  </a>
                </li>
                <li className='pr-2 duration-300 hover:-rotate-2 hover:scale-[1.15] md:pr-3'>
                  <a href='/src/assets/images/avatars/avatar-lg-1.jpg' data-caption='Caption 1'>
                    <div className='relative h-12 w-12 overflow-hidden rounded-full border-2 border-white shadow md:h-16 md:w-16 md:border-4 dark:border-slate-700'>
                      <img
                        src='/src/assets/images/avatars/avatar-7.jpg'
                        alt=''
                        className='absolute h-full w-full object-cover'
                      />
                    </div>
                  </a>
                </li>
                <li className='pr-2 md:pr-3'>
                  <div className='dark:bg-dark2 h-12 w-12 animate-pulse rounded-full bg-slate-200/60 md:h-16 md:w-16' />
                </li>
              </ul>
            </div>
            <div className='max-md:hidden'>
              <button
                type='button'
                className='dark:bg-dark3 absolute -left-3.5 top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full bg-white shadow'
                uk-slider-item='previous'
              >
                <IonIcon icon='chevron-back' className='text-2xl' />
              </button>
              <button
                type='button'
                className='dark:bg-dark3 absolute -right-2 top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full bg-white shadow'
                uk-slider-item='next'
              >
                <IonIcon icon='chevron-forward' className='text-2xl' />
              </button>
            </div>
          </div>
        </div>
        {/* feed story */}
        <div className='mx-auto flex-1 space-y-3 md:max-w-[580px] xl:space-y-6'>
          {/* add story */}
          <div className='border1 dark:bg-dark2 space-y-4 rounded-xl bg-white p-2 text-sm font-medium shadow-sm md:p-4'>
            <div className='flex items-center gap-1 md:gap-3'>
              <div
                className='dark:bg-dark3 flex-1 cursor-pointer rounded-lg bg-slate-100 transition-all hover:bg-opacity-80'
                uk-toggle='target: #create-status'
              >
                <div className='py-2.5 text-center dark:text-white'> What do you have in mind? </div>
              </div>
              <div
                className='cursor-pointer rounded-xl bg-pink-100/60 p-1 px-1.5 transition-all hover:bg-pink-100 hover:bg-opacity-80 dark:bg-white/10 dark:hover:bg-white/20'
                uk-toggle='target: #create-status'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-8 w-8 fill-pink-200/70 stroke-pink-600'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='#2c3e50'
                  fill='none'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                  <path d='M15 8h.01' />
                  <path d='M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z' />
                  <path d='M3.5 15.5l4.5 -4.5c.928 -.893 2.072 -.893 3 0l5 5' />
                  <path d='M14 14l1 -1c.928 -.893 2.072 -.893 3 0l2.5 2.5' />
                </svg>
              </div>
              <div
                className='cursor-pointer rounded-xl bg-sky-100/60 p-1 px-1.5 transition-all hover:bg-sky-100 hover:bg-opacity-80 dark:bg-white/10 dark:hover:bg-white/20'
                uk-toggle='target: #create-status'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-8 w-8 fill-sky-200/70 stroke-sky-600 '
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='#2c3e50'
                  fill='none'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                  <path d='M15 10l4.553 -2.276a1 1 0 0 1 1.447 .894v6.764a1 1 0 0 1 -1.447 .894l-4.553 -2.276v-4z' />
                  <path d='M3 6m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z' />
                </svg>
              </div>
            </div>
          </div>
          {/*  post image*/}
          <div className='border1 dark:bg-dark2 rounded-xl bg-white text-sm font-medium shadow-sm'>
            {/* post heading */}
            <div className='flex gap-3 p-2.5 text-sm font-medium sm:p-4'>
              <a href='timeline.html'>
                <img src='/src/assets/images/avatars/avatar-3.jpg' alt='' className='h-9 w-9 rounded-full' />
              </a>
              <div className='flex-1'>
                <a href='timeline.html'>
                  <h4 className='text-black dark:text-white'> Monroe Parker </h4>
                </a>
                <div className='text-xs text-gray-500 dark:text-white/80'> 2 hours ago</div>
              </div>
              <div className='-mr-1'>
                <button type='button' className='button-icon h-8 w-8'>
                  <IonIcon className='text-xl' icon='ellipsis-horizontal' />
                </button>
                <div
                  className='w-[245px]'
                  uk-dropdown='pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click'
                >
                  <nav>
                    <a href='#'>
                      <IonIcon className='shrink-0 text-xl' icon='bookmark-outline' /> Add to favorites
                    </a>
                    <a href='#'>
                      <IonIcon className='shrink-0 text-xl' icon='notifications-off-outline' /> Mute Notification
                    </a>
                    <a href='#'>
                      <IonIcon className='shrink-0 text-xl' icon='flag-outline' /> Report this post
                    </a>
                    <a href='#'>
                      <IonIcon className='shrink-0 text-xl' icon='share-outline' /> Share your profile
                    </a>
                    <hr />
                    <a href='#' className='text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50'>
                      <IonIcon className='shrink-0 text-xl' icon='stop-circle-outline' /> Unfollow
                    </a>
                  </nav>
                </div>
              </div>
            </div>
            {/* post image */}
            <a href='#preview_modal' uk-toggle=''>
              <div className='relative h-full w-full sm:px-4 lg:h-96'>
                <img
                  src='/src/assets/images/post/img-2.jpg'
                  alt=''
                  className='h-full w-full object-cover sm:rounded-lg'
                />
              </div>
            </a>
            {/* post icons */}
            <div className='flex items-center gap-4 p-2.5 text-xs font-semibold sm:p-4'>
              <div>
                <div className='flex items-center gap-2.5'>
                  <button type='button' className='button-icon bg-red-100 text-red-500 dark:bg-slate-700'>
                    <IonIcon className='text-lg' icon='heart' />
                  </button>
                  <a href='#'>1,300</a>
                </div>
                <div
                  className='w-[212px] rounded-full bg-white p-1 px-2 text-2xl drop-shadow-md dark:bg-slate-700'
                  uk-drop='offset:10;pos: top-left; animate-out: true; animation: uk-animation-scale-up uk-transform-origin-bottom-left'
                >
                  <div
                    className='flex gap-2'
                    uk-scrollspy='target: > button; cls: uk-animation-scale-up; delay: 100 ;repeat: true'
                  >
                    <button type='button' className='text-red-600 duration-300 hover:scale-125'>
                      <span> 👍 </span>
                    </button>
                    <button type='button' className='text-red-600 duration-300 hover:scale-125'>
                      <span> ❤️ </span>
                    </button>
                    <button type='button' className='text-red-600 duration-300 hover:scale-125'>
                      <span> 😂 </span>
                    </button>
                    <button type='button' className='text-red-600 duration-300 hover:scale-125'>
                      <span> 😯 </span>
                    </button>
                    <button type='button' className='text-red-600 duration-300 hover:scale-125'>
                      <span> 😢 </span>
                    </button>
                  </div>
                  <div className='absolute -bottom-1 left-3 hidden h-2.5 w-2.5 rotate-45 bg-white' />
                </div>
              </div>
              <div className='flex items-center gap-3'>
                <button type='button' className='button-icon bg-slate-200/70 dark:bg-slate-700'>
                  <IonIcon className='text-lg' icon='chatbubble-ellipses' />
                </button>
                <span>260</span>
              </div>
              <button type='button' className='button-icon ml-auto'>
                <IonIcon className='text-xl' icon='paper-plane-outline' />
              </button>
              <button type='button' className='button-icon'>
                <IonIcon className='text-xl' icon='share-outline' />
              </button>
            </div>
            {/* comments */}
            <div className='relative space-y-3 border-t border-gray-100 p-2.5 font-normal sm:p-4 dark:border-slate-700/40'>
              <div className='relative flex items-start gap-3'>
                <a href='timeline.html'>
                  <img src='/src/assets/images/avatars/avatar-2.jpg' alt='' className='mt-1 h-6 w-6 rounded-full' />
                </a>
                <div className='flex-1'>
                  <a href='timeline.html' className='inline-block font-medium text-black dark:text-white'>
                    Steeve
                  </a>
                  <p className='mt-0.5'>What a beautiful photo! I love it. 😍 </p>
                </div>
              </div>
              <div className='relative flex items-start gap-3'>
                <a href='timeline.html'>
                  <img src='/src/assets/images/avatars/avatar-3.jpg' alt='' className='mt-1 h-6 w-6 rounded-full' />
                </a>
                <div className='flex-1'>
                  <a href='timeline.html' className='inline-block font-medium text-black dark:text-white'>
                    Monroe
                  </a>
                  <p className='mt-0.5'> You captured the moment.😎 </p>
                </div>
              </div>
              <button type='button' className='mt-2 flex items-center gap-1.5 text-gray-500 hover:text-blue-500'>
                <IonIcon icon='chevron-down-outline' className='ml-auto duration-200 group-aria-expanded:rotate-180' />
                More Comment
              </button>
            </div>
            {/* add comment */}
            <div className='flex items-center gap-1 border-t border-gray-100 p-2.5 sm:px-4 sm:py-3 dark:border-slate-700/40'>
              <img src='/src/assets/images/avatars/avatar-7.jpg' alt='' className='h-6 w-6 rounded-full' />
              <div className='relative h-10 flex-1 overflow-hidden'>
                <textarea
                  placeholder='Add Comment....'
                  rows={1}
                  className='w-full resize-none !bg-transparent px-4 py-2 focus:!border-transparent focus:!ring-transparent'
                  defaultValue={''}
                />
                <div className='!top-2 pr-2' uk-drop='pos: bottom-right; mode: click'>
                  <div
                    className='flex items-center gap-2'
                    uk-scrollspy='target: > svg; cls: uk-animation-slide-right-small; delay: 100 ;repeat: true'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      fill='currentColor'
                      className='h-6 w-6 fill-sky-600'
                    >
                      <path
                        fillRule='evenodd'
                        d='M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z'
                        clipRule='evenodd'
                      />
                    </svg>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                      className='h-5 w-5 fill-pink-600'
                    >
                      <path d='M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z' />
                    </svg>
                  </div>
                </div>
              </div>
              <button type='submit' className='rounded-full bg-secondery px-3.5 py-1.5 text-sm'>
                Replay
              </button>
            </div>
          </div>
          {/*  post image with slider*/}
          <div className='border1 dark:bg-dark2 rounded-xl bg-white text-sm font-medium shadow-sm'>
            {/* post heading */}
            <div className='flex gap-3 p-2.5 text-sm font-medium sm:p-4'>
              <a href='timeline.html'>
                <img src='/src/assets/images/avatars/avatar-3.jpg' alt='' className='h-9 w-9 rounded-full' />
              </a>
              <div className='flex-1'>
                <a href='timeline.html'>
                  <h4 className='text-black dark:text-white'> Monroe Parker </h4>
                </a>
                <div className='text-xs text-gray-500 dark:text-white/80'> 2 hours ago</div>
              </div>
              <div className='-mr-1'>
                <button type='button' className='button-icon h-8 w-8'>
                  <IonIcon className='text-xl' icon='ellipsis-horizontal' />
                </button>
                <div
                  className='w-[245px]'
                  uk-dropdown='pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click'
                >
                  <nav>
                    <a href='#'>
                      <IonIcon className='shrink-0 text-xl' icon='bookmark-outline' /> Add to favorites
                    </a>
                    <a href='#'>
                      <IonIcon className='shrink-0 text-xl' icon='notifications-off-outline' /> Mute Notification
                    </a>
                    <a href='#'>
                      <IonIcon className='shrink-0 text-xl' icon='flag-outline' /> Report this post
                    </a>
                    <a href='#'>
                      <IonIcon className='shrink-0 text-xl' icon='share-outline' /> Share your profile
                    </a>
                    <hr />
                    <a href='#' className='text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50'>
                      <IonIcon className='shrink-0 text-xl' icon='stop-circle-outline' /> Unfollow
                    </a>
                  </nav>
                </div>
              </div>
            </div>
            {/* post image */}
            <div className='uk-visible-toggle relative sm:px-4' tabIndex={-1} uk-slideshow='animation: push;ratio: 4:3'>
              <ul className='uk-slideshow-items overflow-hidden rounded-xl' uk-lightbox='animation: fade'>
                <li className='w-full'>
                  <a className='inline' href='https://getuikit.com/docs/images/photo3.jpg' data-caption='Caption 1'>
                    <img
                      src='/src/assets/images/post/img-2.jpg'
                      alt=''
                      className='insta-0 absolute h-full w-full object-cover'
                    />
                  </a>
                </li>
                <li className='w-full'>
                  <a className='inline' href='https://getuikit.com/docs/images/photo2.jpg' data-caption='Caption 2'>
                    <img
                      src='/src/assets/images/post/img-3.jpg'
                      alt=''
                      className='insta-0 absolute h-full w-full object-cover'
                    />
                  </a>
                </li>
                <li className='w-full'>
                  <a className='inline' href='https://getuikit.com/docs/images/photo.jpg' data-caption='Caption 3'>
                    <img
                      src='/src/assets/images/post/img-4.jpg'
                      alt=''
                      className='insta-0 absolute h-full w-full object-cover'
                    />
                  </a>
                </li>
              </ul>
              <a className='nav-prev left-6' href='#' uk-slideshow-item='previous'>
                <IonIcon icon='chevron-back' className='text-2xl' />
              </a>
              <a className='nav-next right-6' href='#' uk-slideshow-item='next'>
                <IonIcon icon='chevron-forward' className='text-2xl' />
              </a>
            </div>
            {/* post icons */}
            <div className='flex items-center gap-4 p-2.5 text-xs font-semibold sm:p-4'>
              <div>
                <div className='flex items-center gap-2.5'>
                  <button type='button' className='button-icon bg-red-100 text-red-500 dark:bg-slate-700'>
                    <IonIcon className='text-lg' icon='heart' />
                  </button>
                  <a href='#'>1,300</a>
                </div>
                <div
                  className='w-[212px] rounded-full bg-white p-1 px-2 text-2xl drop-shadow-md dark:bg-slate-700'
                  uk-drop='offset:10;pos: top-left; animate-out: true; animation: uk-animation-scale-up uk-transform-origin-bottom-left'
                >
                  <div
                    className='flex gap-2'
                    uk-scrollspy='target: > button; cls: uk-animation-scale-up; delay: 100 ;repeat: true'
                  >
                    <button type='button' className='text-red-600 duration-300 hover:scale-125'>
                      <span> 👍 </span>
                    </button>
                    <button type='button' className='text-red-600 duration-300 hover:scale-125'>
                      <span> ❤️ </span>
                    </button>
                    <button type='button' className='text-red-600 duration-300 hover:scale-125'>
                      <span> 😂 </span>
                    </button>
                    <button type='button' className='text-red-600 duration-300 hover:scale-125'>
                      <span> 😯 </span>
                    </button>
                    <button type='button' className='text-red-600 duration-300 hover:scale-125'>
                      <span> 😢 </span>
                    </button>
                  </div>
                  <div className='absolute -bottom-1 left-3 hidden h-2.5 w-2.5 rotate-45 bg-white' />
                </div>
              </div>
              <div className='flex items-center gap-3'>
                <button type='button' className='button-icon bg-slate-200/70 dark:bg-slate-700'>
                  <IonIcon className='text-lg' icon='chatbubble-ellipses' />
                </button>
                <span>260</span>
              </div>
              <button type='button' className='button-icon ml-auto'>
                <IonIcon className='text-xl' icon='paper-plane-outline' />
              </button>
              <button type='button' className='button-icon'>
                <IonIcon className='text-xl' icon='share-outline' />
              </button>
            </div>
            {/* comments */}
            <div className='relative space-y-3 border-t border-gray-100 p-2.5 font-normal sm:p-4 dark:border-slate-700/40'>
              <div className='relative flex items-start gap-3'>
                <a href='timeline.html'>
                  <img src='/src/assets/images/avatars/avatar-2.jpg' alt='' className='mt-1 h-6 w-6 rounded-full' />
                </a>
                <div className='flex-1'>
                  <a href='timeline.html' className='inline-block font-medium text-black dark:text-white'>
                    Steeve
                  </a>
                  <p className='mt-0.5'>What a beautiful photo! I love it. 😍 </p>
                </div>
              </div>
              <div className='relative flex items-start gap-3'>
                <a href='timeline.html'>
                  <img src='/src/assets/images/avatars/avatar-3.jpg' alt='' className='mt-1 h-6 w-6 rounded-full' />
                </a>
                <div className='flex-1'>
                  <a href='timeline.html' className='inline-block font-medium text-black dark:text-white'>
                    Monroe
                  </a>
                  <p className='mt-0.5'> You captured the moment.😎 </p>
                </div>
              </div>
              <button type='button' className='mt-2 flex items-center gap-1.5 text-gray-500 hover:text-blue-500'>
                <IonIcon icon='chevron-down-outline' className='ml-auto duration-200 group-aria-expanded:rotate-180' />
                More Comment
              </button>
            </div>
            {/* add comment */}
            <div className='flex items-center gap-1 border-t border-gray-100 p-2.5 sm:px-4 sm:py-3 dark:border-slate-700/40'>
              <img src='/src/assets/images/avatars/avatar-7.jpg' alt='' className='h-6 w-6 rounded-full' />
              <div className='relative h-10 flex-1 overflow-hidden'>
                <textarea
                  placeholder='Add Comment....'
                  rows={1}
                  className='w-full resize-none !bg-transparent px-4 py-2 focus:!border-transparent focus:!ring-transparent'
                  defaultValue={''}
                />
                <div className='!top-2 pr-2' uk-drop='pos: bottom-right; mode: click'>
                  <div
                    className='flex items-center gap-2'
                    uk-scrollspy='target: > svg; cls: uk-animation-slide-right-small; delay: 100 ;repeat: true'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      fill='currentColor'
                      className='h-6 w-6 fill-sky-600'
                    >
                      <path
                        fillRule='evenodd'
                        d='M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z'
                        clipRule='evenodd'
                      />
                    </svg>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                      className='h-5 w-5 fill-pink-600'
                    >
                      <path d='M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z' />
                    </svg>
                  </div>
                </div>
              </div>
              <button type='submit' className='rounded-full bg-secondery px-3.5 py-1.5 text-sm'>
                Replay
              </button>
            </div>
          </div>
          {/* post text*/}
          <div className='border1 dark:bg-dark2 rounded-xl bg-white text-sm font-medium shadow-sm'>
            {/* post heading */}
            <div className='flex gap-3 p-2.5 text-sm font-medium sm:p-4'>
              <a href='timeline.html'>
                <img src='/src/assets/images/avatars/avatar-5.jpg' alt='' className='h-9 w-9 rounded-full' />
              </a>
              <div className='flex-1'>
                <a href='timeline.html'>
                  <h4 className='text-black dark:text-white'> John Michael </h4>
                </a>
                <div className='text-xs text-gray-500 dark:text-white/80'> 2 hours ago</div>
              </div>
              <div className='-mr-1'>
                <button type='button' className='button__ico h-8 w-8' aria-haspopup='true' aria-expanded='false'>
                  <IonIcon
                    className='md hydrated text-xl'
                    icon='ellipsis-horizontal'
                    role='img'
                    aria-label='ellipsis horizontal'
                  />
                </button>
                <div
                  className='uk-dropdown w-[245px]'
                  uk-dropdown='pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click'
                >
                  <nav>
                    <a href='#'>
                      <IonIcon
                        className='md hydrated shrink-0 text-xl'
                        icon='bookmark-outline'
                        role='img'
                        aria-label='bookmark outline'
                      />
                      Add to favorites
                    </a>
                    <a href='#'>
                      <IonIcon
                        className='md hydrated shrink-0 text-xl'
                        icon='notifications-off-outline'
                        role='img'
                        aria-label='notifications off outline'
                      />
                      Mute Notification
                    </a>
                    <a href='#'>
                      <IonIcon
                        className='md hydrated shrink-0 text-xl'
                        icon='flag-outline'
                        role='img'
                        aria-label='flag outline'
                      />
                      Report this post
                    </a>
                    <a href='#'>
                      <IonIcon
                        className='md hydrated shrink-0 text-xl'
                        icon='share-outline'
                        role='img'
                        aria-label='share outline'
                      />
                      Share your profile
                    </a>
                    <hr />
                    <a href='#' className='text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50'>
                      <IonIcon
                        className='md hydrated shrink-0 text-xl'
                        icon='stop-circle-outline'
                        role='img'
                        aria-label='stop circle outline'
                      />
                      Unfollow
                    </a>
                  </nav>
                </div>
              </div>
            </div>
            <div className='p-2.5 pt-0 sm:px-4'>
              <p className='font-normal'>
                Photography is the art of capturing light with a camera. It can be used to create images that tell
                stories, express emotions, or document reality. it can be fun, challenging, or rewarding. It can also be
                a hobby, a profession, or a passion. 📷
              </p>
            </div>
            {/* post icons */}
            <div className='flex items-center gap-4 p-2.5 text-xs font-semibold sm:p-4'>
              <div>
                <div className='flex items-center gap-2.5'>
                  <button type='button' className='button-icon bg-red-100 text-red-500 dark:bg-slate-700'>
                    <IonIcon className='text-lg' icon='heart' />
                  </button>
                  <a href='#'>1,300</a>
                </div>
                <div
                  className='w-[212px] rounded-full bg-white p-1 px-2 text-2xl drop-shadow-md dark:bg-slate-700'
                  uk-drop='offset:10;pos: top-left; animate-out: true; animation: uk-animation-scale-up uk-transform-origin-bottom-left'
                >
                  <div
                    className='flex gap-2'
                    uk-scrollspy='target: > button; cls: uk-animation-scale-up; delay: 100 ;repeat: true'
                  >
                    <button type='button' className='text-red-600 duration-300 hover:scale-125'>
                      <span> 👍 </span>
                    </button>
                    <button type='button' className='text-red-600 duration-300 hover:scale-125'>
                      <span> ❤️ </span>
                    </button>
                    <button type='button' className='text-red-600 duration-300 hover:scale-125'>
                      <span> 😂 </span>
                    </button>
                    <button type='button' className='text-red-600 duration-300 hover:scale-125'>
                      <span> 😯 </span>
                    </button>
                    <button type='button' className='text-red-600 duration-300 hover:scale-125'>
                      <span> 😢 </span>
                    </button>
                  </div>
                  <div className='absolute -bottom-1 left-3 hidden h-2.5 w-2.5 rotate-45 bg-white' />
                </div>
              </div>
              <div className='flex items-center gap-3'>
                <button type='button' className='button-icon bg-slate-200/70 dark:bg-slate-700'>
                  <IonIcon className='text-lg' icon='chatbubble-ellipses' />
                </button>
                <span>260</span>
              </div>
              <button type='button' className='button-icon ml-auto'>
                <IonIcon className='text-xl' icon='paper-plane-outline' />
              </button>
              <button type='button' className='button-icon'>
                <IonIcon className='text-xl' icon='share-outline' />
              </button>
            </div>
            {/* comments */}
            <div className='relative space-y-3 border-t border-gray-100 p-2.5 font-normal sm:p-4 dark:border-slate-700/40'>
              <div className='relative flex items-start gap-3'>
                <a href='timeline.html'>
                  <img src='/src/assets/images/avatars/avatar-2.jpg' alt='' className='mt-1 h-6 w-6 rounded-full' />
                </a>
                <div className='flex-1'>
                  <a href='timeline.html' className='inline-block font-medium text-black dark:text-white'>
                    Steeve
                  </a>
                  <p className='mt-0.5'> I love taking photos of nature and animals. 🌳🐶</p>
                </div>
              </div>
              <div className='relative flex items-start gap-3'>
                <a href='timeline.html'>
                  <img src='/src/assets/images/avatars/avatar-3.jpg' alt='' className='mt-1 h-6 w-6 rounded-full' />
                </a>
                <div className='flex-1'>
                  <a href='timeline.html' className='inline-block font-medium text-black dark:text-white'>
                    Monroe
                  </a>
                  <p className='mt-0.5'> I enjoy people and emotions. 😊😢 </p>
                </div>
              </div>
              <div className='relative flex items-start gap-3'>
                <a href='timeline.html'>
                  <img src='/src/assets/images/avatars/avatar-5.jpg' alt='' className='mt-1 h-6 w-6 rounded-full' />
                </a>
                <div className='flex-1'>
                  <a href='timeline.html' className='inline-block font-medium text-black dark:text-white'>
                    Jesse
                  </a>
                  <p className='mt-0.5'> Photography is my passion. 🎨📸 </p>
                </div>
              </div>
            </div>
            {/* add comment */}
            <div className='flex items-center gap-1 border-t border-gray-100 p-2.5 sm:px-4 sm:py-3 dark:border-slate-700/40'>
              <img src='/src/assets/images/avatars/avatar-7.jpg' alt='' className='h-6 w-6 rounded-full' />
              <div className='relative h-10 flex-1 overflow-hidden'>
                <textarea
                  placeholder='Add Comment....'
                  rows={1}
                  className='w-full resize-none !bg-transparent px-4 py-2 focus:!border-transparent focus:!ring-transparent'
                  aria-haspopup='true'
                  aria-expanded='false'
                  defaultValue={''}
                />
                <div className='uk-drop !top-2 pr-2' uk-drop='pos: bottom-right; mode: click'>
                  <div
                    className='flex items-center gap-2'
                    uk-scrollspy='target: > svg; cls: uk-animation-slide-right-small; delay: 100 ;repeat: true'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      fill='currentColor'
                      className='h-6 w-6 fill-sky-600'
                      style={{ opacity: 0 }}
                    >
                      <path
                        fillRule='evenodd'
                        d='M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z'
                        clipRule='evenodd'
                      />
                    </svg>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                      className='h-5 w-5 fill-pink-600'
                      style={{ opacity: 0 }}
                    >
                      <path d='M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z' />
                    </svg>
                  </div>
                </div>
              </div>
              <button type='submit' className='rounded-full bg-secondery px-3.5 py-1.5 text-sm'>
                Replay
              </button>
            </div>
          </div>
          {/* placeholder */}
          <div className='border1 dark:bg-dark2 animate-pulse space-y-4 rounded-xl bg-slate-200/40 p-4 shadow-sm'>
            <div className='flex gap-3'>
              <div className='h-9 w-9 rounded-full bg-slate-300/20' />
              <div className='flex-1 space-y-3'>
                <div className='h-5 w-40 rounded-md bg-slate-300/20' />
                <div className='h-4 w-24 rounded-md bg-slate-300/20' />
              </div>
              <div className='h-6 w-6 rounded-full bg-slate-300/20' />
            </div>
            <div className='my-3 h-52 w-full rounded-lg bg-slate-300/10'> </div>
            <div className='flex gap-3'>
              <div className='h-5 w-16 rounded-md bg-slate-300/20' />
              <div className='h-5 w-14 rounded-md bg-slate-300/20' />
              <div className='ml-auto h-6 w-6 rounded-full bg-slate-300/20' />
              <div className='h-6 w-6 rounded-full bg-slate-300/20  ' />
            </div>
          </div>
        </div>
      </div>
      {/* sidebar */}
      <div className='flex-1'>
        <div
          className='max-lg:grid max-lg:gap-6 sm:grid-cols-2 lg:space-y-4 lg:pb-8'
          uk-sticky='media: 1024; end: #js-oversized; offset: 80'
        >
          <div className='box p-5 px-6'>
            <div className='flex items-baseline justify-between text-black dark:text-white'>
              <h3 className='text-base font-bold'> People you may know </h3>
              <a href='#' className='text-sm text-blue-500'>
                See all
              </a>
            </div>
            <div className='side-list'>
              <div className='side-list-item'>
                <a href='timeline.html'>
                  <img src='/src/assets/images/avatars/avatar-2.jpg' alt='' className='side-list-image rounded-full' />
                </a>
                <div className='flex-1'>
                  <a href='timeline.html'>
                    <h4 className='side-list-title'> John Michael </h4>
                  </a>
                  <div className='side-list-info'> 125k Following </div>
                </div>
                <button className='button bg-primary-soft text-primary dark:text-white'>follow</button>
              </div>
              <div className='side-list-item'>
                <a href='timeline.html'>
                  <img src='/src/assets/images/avatars/avatar-3.jpg' alt='' className='side-list-image rounded-full' />
                </a>
                <div className='flex-1'>
                  <a href='timeline.html'>
                    <h4 className='side-list-title'> Monroe Parker </h4>
                  </a>
                  <div className='side-list-info'> 320k Following </div>
                </div>
                <button className='button bg-primary-soft text-primary dark:text-white'>follow</button>
              </div>
              <div className='side-list-item'>
                <a href='timeline.html'>
                  <img src='/src/assets/images/avatars/avatar-5.jpg' alt='' className='side-list-image rounded-full' />
                </a>
                <div className='flex-1'>
                  <a href='timeline.html'>
                    <h4 className='side-list-title'> James Lewis</h4>
                  </a>
                  <div className='side-list-info'> 125k Following </div>
                </div>
                <button className='button bg-primary-soft text-primary dark:text-white'>follow</button>
              </div>
              <div className='side-list-item'>
                <a href='timeline.html'>
                  <img src='/src/assets/images/avatars/avatar-6.jpg' alt='' className='side-list-image rounded-full' />
                </a>
                <div className='flex-1'>
                  <a href='timeline.html'>
                    <h4 className='side-list-title'> Alexa stella </h4>
                  </a>
                  <div className='side-list-info'> 192k Following </div>
                </div>
                <button className='button bg-primary-soft text-primary dark:text-white'>follow</button>
              </div>
              <div className='side-list-item'>
                <a href='timeline.html'>
                  <img src='/src/assets/images/avatars/avatar-2.jpg' alt='' className='side-list-image rounded-full' />
                </a>
                <div className='flex-1'>
                  <a href='timeline.html'>
                    <h4 className='side-list-title'> John Michael </h4>
                  </a>
                  <div className='side-list-info'> 320k Following </div>
                </div>
                <button className='button bg-primary-soft text-primary dark:text-white'>follow</button>
              </div>
              <button className='button mt-2 hidden w-full bg-secondery'>See all</button>
            </div>
          </div>
          {/* peaple you might know */}
          <div className='box border1 dark:bg-dark2 hidden p-5 px-6'>
            <div className='flex justify-between text-black dark:text-white'>
              <h3 className='text-base font-bold'> Peaple You might know </h3>
              <button type='button'>
                <IonIcon icon='sync-outline' className='text-xl' />
              </button>
            </div>
            <div className='mb-2 mt-5 space-y-4 text-xs font-normal capitalize text-gray-500 dark:text-white/80'>
              <div className='flex items-center gap-3'>
                <a href='timeline.html'>
                  <img
                    src='/src/assets/images/avatars/avatar-7.jpg'
                    alt=''
                    className='h-10 w-10 rounded-full bg-gray-200'
                  />
                </a>
                <div className='flex-1'>
                  <a href='timeline.html'>
                    <h4 className='text-sm font-semibold text-black dark:text-white'> Johnson smith</h4>
                  </a>
                  <div className='mt-0.5'> Suggested For You </div>
                </div>
                <button type='button' className='rounded-full bg-secondery px-4 py-1.5 text-sm font-semibold'>
                  Follow
                </button>
              </div>
              <div className='flex items-center gap-3'>
                <a href='timeline.html'>
                  <img
                    src='/src/assets/images/avatars/avatar-5.jpg'
                    alt=''
                    className='h-10 w-10 rounded-full bg-gray-200'
                  />
                </a>
                <div className='flex-1'>
                  <a href='timeline.html'>
                    <h4 className='text-sm font-semibold text-black dark:text-white'> James Lewis</h4>
                  </a>
                  <div className='mt-0.5'> Followed by Johnson </div>
                </div>
                <button type='button' className='rounded-full bg-secondery px-4 py-1.5 text-sm font-semibold'>
                  Follow
                </button>
              </div>
              <div className='flex items-center gap-3'>
                <a href='timeline.html'>
                  <img
                    src='/src/assets/images/avatars/avatar-2.jpg'
                    alt=''
                    className='h-10 w-10 rounded-full bg-gray-200'
                  />
                </a>
                <div className='flex-1'>
                  <a href='timeline.html'>
                    <h4 className='text-sm font-semibold text-black dark:text-white'> John Michael</h4>
                  </a>
                  <div className='mt-0.5'> Followed by Monroe</div>
                </div>
                <button type='button' className='rounded-full bg-secondery px-4 py-1.5 text-sm font-semibold'>
                  Follow
                </button>
              </div>
              <div className='flex items-center gap-3'>
                <a href='timeline.html'>
                  <img
                    src='/src/assets/images/avatars/avatar-3.jpg'
                    alt=''
                    className='h-10 w-10 rounded-full bg-gray-200'
                  />
                </a>
                <div className='flex-1'>
                  <a href='timeline.html'>
                    <h4 className='text-sm font-semibold text-black dark:text-white'> Monroe Parker</h4>
                  </a>
                  <div className='mt-0.5'> Suggested For You </div>
                </div>
                <button type='button' className='rounded-full bg-secondery px-4 py-1.5 text-sm font-semibold'>
                  Follow
                </button>
              </div>
              <div className='flex items-center gap-3'>
                <a href='timeline.html'>
                  <img
                    src='/src/assets/images/avatars/avatar-4.jpg'
                    alt=''
                    className='h-10 w-10 rounded-full bg-gray-200'
                  />
                </a>
                <div className='flex-1'>
                  <a href='timeline.html'>
                    <h4 className='text-sm font-semibold text-black dark:text-white'> Martin Gray</h4>
                  </a>
                  <div className='mt-0.5'> Suggested For You </div>
                </div>
                <button type='button' className='rounded-full bg-secondery px-4 py-1.5 text-sm font-semibold'>
                  Follow
                </button>
              </div>
            </div>
          </div>
          {/* latest marketplace items */}
          <div className='box border1 dark:bg-dark2 p-5 px-6'>
            <div className='flex justify-between text-black dark:text-white'>
              <h3 className='text-base font-bold'> Premium Photos </h3>
              <button type='button'>
                <IonIcon icon='sync-outline' className='text-xl' />
              </button>
            </div>
            <div
              className='relative mb-2 mt-4 text-center text-sm font-medium capitalize'
              tabIndex={-1}
              uk-slider='autoplay: true;finite: true'
            >
              <div className='uk-slider-container overflow-hidden'>
                <ul className='uk-slider-items -ml-2 w-[calc(100%+0.5rem)]'>
                  <li className='w-1/2 pr-2'>
                    <a href='#'>
                      <div className='relative overflow-hidden rounded-lg'>
                        <div className='relative h-40 w-full'>
                          <img
                            src='/src/assets/images/product/product-1.jpg'
                            alt=''
                            className='inset-0 h-full w-full object-cover'
                          />
                        </div>
                        <div className='absolute right-0 top-0 m-2 rounded-full bg-white/60 px-2 py-0.5 text-sm font-semibold dark:bg-slate-800/60'>
                          $12
                        </div>
                      </div>
                      <div className='mt-3 w-full'> Chill Lotion </div>
                    </a>
                  </li>
                  <li className='w-1/2 pr-2'>
                    <a href='#'>
                      <div className='relative overflow-hidden rounded-lg'>
                        <div className='relative h-40 w-full'>
                          <img
                            src='/src/assets/images/product/product-3.jpg'
                            alt=''
                            className='inset-0 h-full w-full object-cover'
                          />
                        </div>
                        <div className='absolute right-0 top-0 m-2 rounded-full bg-white/60 px-2 py-0.5 text-sm font-semibold dark:bg-slate-800/60'>
                          $18
                        </div>
                      </div>
                      <div className='mt-3 w-full'> Gaming mouse </div>
                    </a>
                  </li>
                  <li className='w-1/2 pr-2'>
                    <a href='#'>
                      <div className='relative overflow-hidden rounded-lg'>
                        <div className='relative h-40 w-full'>
                          <img
                            src='/src/assets/images/product/product-5.jpg'
                            alt=''
                            className='inset-0 h-full w-full object-cover'
                          />
                        </div>
                        <div className='absolute right-0 top-0 m-2 rounded-full bg-white/60 px-2 py-0.5 text-sm font-semibold dark:bg-slate-800/60'>
                          $12
                        </div>
                      </div>
                      <div className='mt-3 w-full'> Herbal Shampoo </div>
                    </a>
                  </li>
                </ul>
                <button
                  type='button'
                  className='dark:bg-dark3 absolute -left-4 top-16 grid h-9 w-9 place-items-center rounded-full bg-white shadow'
                  uk-slider-item='previous'
                >
                  <IonIcon icon='chevron-back' className='text-2xl' />
                </button>
                <button
                  type='button'
                  className='dark:bg-dark3 absolute -right-4 top-16 grid h-9 w-9 place-items-center rounded-full bg-white shadow'
                  uk-slider-item='next'
                >
                  <IonIcon icon='chevron-forward' className='text-2xl' />
                </button>
              </div>
            </div>
          </div>
          {/* online friends */}
          <div className='box border1 dark:bg-dark2 p-5 px-6'>
            <div className='flex justify-between text-black dark:text-white'>
              <h3 className='text-base font-bold'> Online Friends </h3>
              <button type='button'>
                <IonIcon icon='sync-outline' className='text-xl' />
              </button>
            </div>
            <div className='mt-4 grid grid-cols-6 gap-3'>
              <a href='timeline.html'>
                <div className='relative h-10 w-10'>
                  <img
                    src='/src/assets/images/avatars/avatar-2.jpg'
                    alt=''
                    className='absolute inset-0 h-full w-full rounded-full'
                  />
                  <div className='absolute bottom-0 right-0 m-0.5 h-2 w-2 rounded-full bg-green-500' />
                </div>
              </a>
              <a href='timeline.html'>
                <div className='relative h-10 w-10'>
                  <img
                    src='/src/assets/images/avatars/avatar-3.jpg'
                    alt=''
                    className='absolute inset-0 h-full w-full rounded-full'
                  />
                  <div className='absolute bottom-0 right-0 m-0.5 h-2 w-2 rounded-full bg-green-500' />
                </div>
              </a>
              <a href='timeline.html'>
                <div className='relative h-10 w-10'>
                  <img
                    src='/src/assets/images/avatars/avatar-4.jpg'
                    alt=''
                    className='absolute inset-0 h-full w-full rounded-full'
                  />
                  <div className='absolute bottom-0 right-0 m-0.5 h-2 w-2 rounded-full bg-green-500' />
                </div>
              </a>
              <a href='timeline.html'>
                <div className='relative h-10 w-10'>
                  <img
                    src='/src/assets/images/avatars/avatar-5.jpg'
                    alt=''
                    className='absolute inset-0 h-full w-full rounded-full'
                  />
                  <div className='absolute bottom-0 right-0 m-0.5 h-2 w-2 rounded-full bg-green-500' />
                </div>
              </a>
              <a href='timeline.html'>
                <div className='relative h-10 w-10'>
                  <img
                    src='/src/assets/images/avatars/avatar-6.jpg'
                    alt=''
                    className='absolute inset-0 h-full w-full rounded-full'
                  />
                  <div className='absolute bottom-0 right-0 m-0.5 h-2 w-2 rounded-full bg-green-500' />
                </div>
              </a>
              <a href='timeline.html'>
                <div className='relative h-10 w-10'>
                  <img
                    src='/src/assets/images/avatars/avatar-7.jpg'
                    alt=''
                    className='absolute inset-0 h-full w-full rounded-full'
                  />
                  <div className='absolute bottom-0 right-0 m-0.5 h-2 w-2 rounded-full bg-green-500' />
                </div>
              </a>
            </div>
          </div>
          {/* Pro Members */}
          <div className='box border1 dark:bg-dark2 p-5 px-6'>
            <div className='flex justify-between text-black dark:text-white'>
              <h3 className='text-base font-bold'> Pro Members </h3>
            </div>
            <div
              className='relative mb-2 mt-4 text-sm font-normal capitalize'
              tabIndex={-1}
              uk-slider='autoplay: true;finite: true'
            >
              <div className='uk-slider-container overflow-hidden'>
                <ul className='uk-slider-items -ml-2 w-[calc(100%+0.5rem)]'>
                  <li className='w-1/2 pr-2'>
                    <a href='timeline.html'></a>
                    <div className='border1 flex flex-col items-center rounded-xl p-2 shadow-sm'>
                      <a href='timeline.html'></a>
                      <a href='timeline.html'>
                        <div className='relative mx-auto mt-2 h-16 w-16'>
                          <img
                            src='/src/assets/images/avatars/avatar-5.jpg'
                            alt=''
                            className='h-full w-full rounded-full object-cover shadow'
                          />
                        </div>
                      </a>
                      <div className='mt-5 w-full text-center'>
                        <a href='timeline.html'>
                          <h5 className='font-semibold'> Martin Gray</h5>
                        </a>
                        <div className='mt-0.5 text-xs font-medium text-gray-400'> 12K Followers</div>
                        <button
                          type='button'
                          className='border1 mt-4 block w-full rounded-lg bg-secondery py-1.5 text-sm font-semibold'
                        >
                          Follow
                        </button>
                      </div>
                    </div>
                  </li>
                  <li className='w-1/2 pr-2'>
                    <div className='border1 flex flex-col items-center rounded-xl p-2 shadow-sm'>
                      <a href='timeline.html'>
                        <div className='relative mx-auto mt-2 h-16 w-16'>
                          <img
                            src='/src/assets/images/avatars/avatar-4.jpg'
                            alt=''
                            className='h-full w-full rounded-full object-cover shadow'
                          />
                        </div>
                      </a>
                      <div className='mt-5 w-full text-center'>
                        <a href='timeline.html'>
                          <h5 className='font-semibold'> Alexa Park</h5>
                        </a>
                        <div className='mt-0.5 text-xs font-medium text-gray-400'> 12K Followers</div>
                        <button
                          type='button'
                          className='border1 mt-4 block w-full rounded-lg bg-secondery py-1.5 text-sm font-semibold'
                        >
                          Follow
                        </button>
                      </div>
                    </div>
                  </li>
                  <li className='w-1/2 pr-2'>
                    <div className='border1 flex flex-col items-center rounded-xl p-2 shadow-sm'>
                      <a href='timeline.html'>
                        <div className='relative mx-auto mt-2 h-16 w-16'>
                          <img
                            src='/src/assets/images/avatars/avatar-4.jpg'
                            alt=''
                            className='h-full w-full rounded-full object-cover shadow'
                          />
                        </div>
                      </a>
                      <div className='mt-5 w-full text-center'>
                        <a href='timeline.html'>
                          <h5 className='font-semibold'> James Lewis</h5>
                        </a>
                        <div className='mt-0.5 text-xs font-medium text-gray-400'> 15K Followers</div>
                        <button
                          type='button'
                          className='border1 mt-4 block w-full rounded-lg bg-secondery py-1.5 text-sm font-semibold'
                        >
                          Follow
                        </button>
                      </div>
                    </div>
                  </li>
                </ul>
                <button
                  type='button'
                  className='dark:bg-dark3 absolute -left-4 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-slate-100'
                  uk-slider-item='previous'
                >
                  <IonIcon icon='chevron-back' className='text-2xl' />
                </button>
                <button
                  type='button'
                  className='dark:bg-dark3 absolute -right-4 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-slate-100'
                  uk-slider-item='next'
                >
                  <IonIcon icon='chevron-forward' className='text-2xl' />
                </button>
              </div>
            </div>
          </div>
          {/* Trends */}
          <div className='box border1 dark:bg-dark2 p-5 px-6'>
            <div className='flex justify-between text-black dark:text-white'>
              <h3 className='text-base font-bold'> Trends for you </h3>
              <button type='button'>
                <IonIcon icon='sync-outline' className='text-xl' />
              </button>
            </div>
            <div className='mb-2 mt-5 space-y-3.5 text-xs font-normal capitalize text-gray-600 dark:text-white/80'>
              <a href='#'>
                <div className='p flex items-center gap-3'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                    className='-mt-2 h-5 w-5'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5'
                    />
                  </svg>
                  <div className='flex-1'>
                    <h4 className='text-sm font-semibold text-black dark:text-white'> artificial intelligence </h4>
                    <div className='mt-0.5'> 1,245,62 post </div>
                  </div>
                </div>
              </a>
              <a href='#' className='block'>
                <div className='flex items-center gap-3'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                    className='-mt-2 h-5 w-5'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5'
                    />
                  </svg>
                  <div className='flex-1'>
                    <h4 className='text-sm font-semibold text-black dark:text-white'> Web developers</h4>
                    <div className='mt-0.5'> 1,624 post </div>
                  </div>
                </div>
              </a>
              <a href='#' className='block'>
                <div className='flex items-center gap-3'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                    className='-mt-2 h-5 w-5'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5'
                    />
                  </svg>
                  <div className='flex-1'>
                    <h4 className='text-sm font-semibold text-black dark:text-white'> Ui Designers</h4>
                    <div className='mt-0.5'> 820 post </div>
                  </div>
                </div>
              </a>
              <a href='#' className='block'>
                <div className='flex items-center gap-3'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                    className='-mt-2 h-5 w-5'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5'
                    />
                  </svg>
                  <div className='flex-1'>
                    <h4 className='text-sm font-semibold text-black dark:text-white'> affiliate marketing </h4>
                    <div className='mt-0.5'> 480 post </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
