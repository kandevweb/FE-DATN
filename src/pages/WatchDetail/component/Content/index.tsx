import { IonIcon } from '@ionic/react'
import React from 'react'
import Sidebar from './Sidebar'
import VideoPlayer from './VideoPlayer'

const Content = () => {
  return (
    <div className='mx-auto  gap-6 lg:flex 2xl:max-w-[1220px] 2xl:gap-8' id='js-oversized'>
      <div className='flex-1'>
        {/*  post image*/}
        <div className='border1 dark:bg-dark2 rounded-xl bg-white text-sm font-medium shadow-sm'>
          {/* video player */}

          <VideoPlayer />
          {/* post heading */}
          <div className='flex gap-3 p-2.5 text-sm font-medium sm:p-4'>
            <a href='timeline.html'>
              <img src='assets/images/avatars/avatar-3.jpg' alt='' className='h-9 w-9 rounded-full' />
            </a>
            <div className='flex-1'>
              <a href='timeline.html'>
                <h4 className='text-black dark:text-white'> Monroe Parker </h4>
              </a>
              <div className='text-xs text-gray-500 dark:text-white/80'> 2 hours ago</div>
            </div>
            <div className='-mr-1'>
              <button type='button' className='button-icon h-8 w-8'>
                <IonIcon className='text-xl' name='ellipsis-horizontal' />
              </button>
              <div
                className='w-[245px]'
                uk-dropdown='pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click'
              >
                <nav>
                  <a href='#'>
                    <IonIcon className='shrink-0 text-xl' name='bookmark-outline' /> Add to favorites
                  </a>
                  <a href='#'>
                    <IonIcon className='shrink-0 text-xl' name='notifications-off-outline' /> Mute Notification
                  </a>
                  <a href='#'>
                    <IonIcon className='shrink-0 text-xl' name='flag-outline' /> Report this post
                  </a>
                  <a href='#'>
                    <IonIcon className='shrink-0 text-xl' name='share-outline' /> Share your profile
                  </a>
                  <hr />
                  <a href='#' className='text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50'>
                    <IonIcon className='shrink-0 text-xl' name='stop-circle-outline' /> Unfollow
                  </a>
                </nav>
              </div>
            </div>
          </div>
          <p className='px-6 text-sm font-normal leading-6'>
            Photography is the art of capturing light with a camera. It can be used to create images that tell stories,
            express emotions, or document reality. it can be fun, challenging, or rewarding. It can also be a hobby, a
            profession, or a passion. 📷
          </p>
          {/* post icons */}
          <div className='flex items-center gap-4 p-2.5 text-xs font-semibold sm:p-4'>
            <div>
              <div className='flex items-center gap-2.5'>
                <button type='button' className='button-icon bg-red-100 text-red-500 dark:bg-slate-700'>
                  <IonIcon className='text-lg' name='heart' />
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
                <IonIcon className='text-lg' name='chatbubble-ellipses' />
              </button>
              <span>260</span>
            </div>
            <button type='button' className='button-icon ml-auto'>
              <IonIcon className='text-xl' name='paper-plane-outline' />
            </button>
            <button type='button' className='button-icon'>
              <IonIcon className='text-xl' name='share-outline' />
            </button>
          </div>
          {/* comments */}
          <div className='relative space-y-3 border-t border-gray-100 p-2.5 font-normal sm:p-6 dark:border-slate-700/40'>
            <div className='relative flex items-start gap-3'>
              <a href='timeline.html'>
                <img src='assets/images/avatars/avatar-3.jpg' alt='' className='mt-1 h-6 w-6 rounded-full' />
              </a>
              <div className='flex-1'>
                <a href='timeline.html' className='inline-block font-medium text-black dark:text-white'>
                  Monroe Parker
                </a>
                <p className='mt-0.5'>What a beautiful photo! I love it. 😍 </p>
              </div>
            </div>
            <div className='relative flex items-start gap-3'>
              <a href='timeline.html'>
                <img src='assets/images/avatars/avatar-2.jpg' alt='' className='mt-1 h-6 w-6 rounded-full' />
              </a>
              <div className='flex-1'>
                <a href='timeline.html' className='inline-block font-medium text-black dark:text-white'>
                  John Michael
                </a>
                <p className='mt-0.5'> You captured the moment.😎 </p>
              </div>
            </div>
            <div className='relative flex items-start gap-3'>
              <a href='timeline.html'>
                <img src='assets/images/avatars/avatar-5.jpg' alt='' className='mt-1 h-6 w-6 rounded-full' />
              </a>
              <div className='flex-1'>
                <a href='timeline.html' className='inline-block font-medium text-black dark:text-white'>
                  James Lewis
                </a>
                <p className='mt-0.5'>What a beautiful photo! I love it. 😍 </p>
              </div>
            </div>
            <div className='relative flex items-start gap-3'>
              <a href='timeline.html'>
                <img src='assets/images/avatars/avatar-4.jpg' alt='' className='mt-1 h-6 w-6 rounded-full' />
              </a>
              <div className='flex-1'>
                <a href='timeline.html' className='inline-block font-medium text-black dark:text-white'>
                  Martin Gray
                </a>
                <p className='mt-0.5'> You captured the moment.😎 </p>
              </div>
            </div>
            <button type='button' className='mt-2 flex items-center   gap-1.5 text-blue-500'>
              <IonIcon name='chevron-down-outline' className='ml-auto duration-200 group-aria-expanded:rotate-180' />
              More Comment
            </button>
          </div>
          {/* add comment */}
          <div className='flex items-center gap-1 border-t border-gray-100 p-2.5 sm:px-4 sm:py-3 dark:border-slate-700/40'>
            <img src='assets/images/avatars/avatar-7.jpg' alt='' className='h-6 w-6 rounded-full' />
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
        <br />
        <br />
      </div>
      {/* sidebar */}
      <Sidebar />
    </div>
  )
}

export default Content
