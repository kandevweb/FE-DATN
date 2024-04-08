import { IonIcon } from '@ionic/react'
import React from 'react'

const ChatBox = () => {
  return (
    <div>
      <button
        type='button'
        className='group fixed bottom-0 right-0 m-5 flex items-center gap-2 rounded-2xl bg-gradient-to-tr from-blue-500 to-blue-700 px-4 py-2.5 text-white shadow sm:m-10'
      >
        <svg
          className='h-6 w-6 duration-500 group-aria-expanded:hidden'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={2}
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z'
          />
        </svg>
        <div className='text-base font-semibold max-sm:hidden'> Chat </div>
        <svg
          className='-mr-1 hidden h-6 w-6 group-aria-expanded:block'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='currentColor'
        >
          <path
            fillRule='evenodd'
            d='M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z'
            clipRule='evenodd'
          />
        </svg>
      </button>
      <div
        className='dark:bg-dark3 w-screen rounded-xl  border-t bg-white drop-shadow-xl sm:w-80 dark:border-slate-600'
        id='chat__box'
        uk-drop='offset:10;pos: bottom-right; animate-out: true; animation: uk-animation-scale-up uk-transform-origin-bottom-right; mode: click'
      >
        <div className='relative'>
          <div className='p-5'>
            <h1 className='text-lg font-bold text-black'> Chats </h1>
          </div>
          {/* search input defaul is hidden */}
          <div
            className='absolute top-11 z-10 flex hidden w-full gap-2 border-b bg-white p-3 dark:border-slate-600 dark:bg-slate-700'
            uk-scrollspy='cls:uk-animation-slide-bottom-small ; repeat: true; duration:0'
            id='search__chat'
          >
            <div className='relative w-full'>
              <input type='text' className='w-full rounded-3xl dark:!bg-white/10' placeholder='Search' />
              <button
                type='button'
                className='absolute  right-0  top-1/2 shrink-0 -translate-y-1/2 rounded-full px-2'
                uk-toggle='target: #search__chat ; cls: hidden'
              >
                <IonIcon name='close-outline' className='flex text-xl' />
              </button>
            </div>
          </div>
          {/* button actions */}
          <div className='absolute -right-1 top-0 m-5 flex gap-2 text-xl'>
            <button uk-toggle='target: #search__chat ; cls: hidden'>
              <IonIcon name='search-outline' />
            </button>
            <button uk-toggle='target: #chat__box ; cls: uk-open'>
              <IonIcon name='close-outline' />
            </button>
          </div>
          {/* tabs */}
          <div className='page-heading bg-slat e-50 '>
            <nav className='nav__underline -mt-7 px-5'>
              <ul
                className='group'
                uk-switcher='connect: #chat__tabs ; animation: uk-animation-slide-right-medium, uk-animation-slide-left-medium'
              >
                <li>
                  {' '}
                  <a
                    href='#'
                    className='inline-block border-b-2 border-transparent py-[18px] aria-expanded:border-black aria-expanded:text-black aria-expanded:dark:border-white aria-expanded:dark:text-white'
                  >
                    {' '}
                    Friends
                  </a>{' '}
                </li>
                <li>
                  {' '}
                  <a href='#'> Groups </a>{' '}
                </li>
              </ul>
            </nav>
          </div>
          {/* tab 2 optional */}
          <div
            className='relative z-10 -mt-12 grid hidden  grid-cols-2 border-b bg-slate-50 px-3 py-2  text-sm'
            uk-switcher='connect: #chat__tabs; toggle: * > button ; animation: uk-animation-slide-right uk-animation-slide-top'
          >
            <button className='rounded-md bg-white py-1.5 shadow'> Friends </button>
            <button> Groups </button>
          </div>
          {/* chat list */}
          <div className='uk-switcher -mt-8 overflow-hidden rounded-xl' id='chat__tabs'>
            {/* tab list 1 */}
            <div className='space-y -m t-5 h-[280px] overflow-y-auto p-3 text-sm font-medium'>
              <a href='#' className='block'>
                <div className='flex items-center gap-3.5 rounded-lg p-2 hover:bg-secondery dark:hover:bg-white/10'>
                  <img src='assets/images/avatars/avatar-1.jpg' alt='' className='w-7 rounded-full' />
                  <div> Jesse Steeve </div>
                </div>
              </a>
              <a href='#' className='block'>
                <div className='flex items-center gap-3.5 rounded-lg p-2 hover:bg-secondery dark:hover:bg-white/10'>
                  <img src='assets/images/avatars/avatar-2.jpg' alt='' className='w-7 rounded-full' />
                  <div> John Michael </div>
                </div>
              </a>
              <a href='#' className='block'>
                <div className='flex items-center gap-3.5 rounded-lg p-2 hover:bg-secondery dark:hover:bg-white/10'>
                  <img src='assets/images/avatars/avatar-3.jpg' alt='' className='w-7 rounded-full' />
                  <div> Monroe Parker </div>
                </div>
              </a>
              <a href='#' className='block'>
                <div className='flex items-center gap-3.5 rounded-lg p-2 hover:bg-secondery dark:hover:bg-white/10'>
                  <img src='assets/images/avatars/avatar-5.jpg' alt='' className='w-7 rounded-full' />
                  <div> James Lewis </div>
                </div>
              </a>
              <a href='#' className='block'>
                <div className='flex items-center gap-3.5 rounded-lg p-2 hover:bg-secondery dark:hover:bg-white/10'>
                  <img src='assets/images/avatars/avatar-4.jpg' alt='' className='w-7 rounded-full' />
                  <div> Martin Gray </div>
                </div>
              </a>
              <a href='#' className='block'>
                <div className='flex items-center gap-3.5 rounded-lg p-2 hover:bg-secondery dark:hover:bg-white/10'>
                  <img src='assets/images/avatars/avatar-6.jpg' alt='' className='w-7 rounded-full' />
                  <div> Alexa stella </div>
                </div>
              </a>
              <a href='#' className='block'>
                <div className='flex items-center gap-3.5 rounded-lg p-2 hover:bg-secondery dark:hover:bg-white/10'>
                  <img src='assets/images/avatars/avatar-1.jpg' alt='' className='w-7 rounded-full' />
                  <div> Jesse Steeve </div>
                </div>
              </a>
              <a href='#' className='block'>
                <div className='flex items-center gap-3.5 rounded-lg p-2 hover:bg-secondery dark:hover:bg-white/10'>
                  <img src='assets/images/avatars/avatar-2.jpg' alt='' className='w-7 rounded-full' />
                  <div> John Michael </div>
                </div>
              </a>
              <a href='#' className='block'>
                <div className='flex items-center gap-3.5 rounded-lg p-2 hover:bg-secondery dark:hover:bg-white/10'>
                  <img src='assets/images/avatars/avatar-3.jpg' alt='' className='w-7 rounded-full' />
                  <div> Monroe Parker </div>
                </div>
              </a>
              <a href='#' className='block'>
                <div className='flex items-center gap-3.5 rounded-lg p-2 hover:bg-secondery dark:hover:bg-white/10'>
                  <img src='assets/images/avatars/avatar-5.jpg' alt='' className='w-7 rounded-full' />
                  <div> James Lewis </div>
                </div>
              </a>
              <a href='#' className='block'>
                <div className='flex items-center gap-3.5 rounded-lg p-2 hover:bg-secondery dark:hover:bg-white/10'>
                  <img src='assets/images/avatars/avatar-4.jpg' alt='' className='w-7 rounded-full' />
                  <div> Martin Gray </div>
                </div>
              </a>
              <a href='#' className='block'>
                <div className='flex items-center gap-3.5 rounded-lg p-2 hover:bg-secondery dark:hover:bg-white/10'>
                  <img src='assets/images/avatars/avatar-6.jpg' alt='' className='w-7 rounded-full' />
                  <div> Alexa stella </div>
                </div>
              </a>
            </div>
            {/* tab list 2 */}
            <div className='space-y -m t-5 h-[280px] overflow-y-auto p-3 text-sm font-medium'>
              <a href='#' className='block'>
                <div className='flex items-center gap-3.5 rounded-lg p-2 hover:bg-secondery dark:hover:bg-white/10'>
                  <img src='assets/images/avatars/avatar-1.jpg' alt='' className='w-7 rounded-full' />
                  <div> Jesse Steeve </div>
                </div>
              </a>
              <a href='#' className='block'>
                <div className='flex items-center gap-3.5 rounded-lg p-2 hover:bg-secondery dark:hover:bg-white/10'>
                  <img src='assets/images/avatars/avatar-2.jpg' alt='' className='w-7 rounded-full' />
                  <div> John Michael </div>
                </div>
              </a>
              <a href='#' className='block'>
                <div className='flex items-center gap-3.5 rounded-lg p-2 hover:bg-secondery dark:hover:bg-white/10'>
                  <img src='assets/images/avatars/avatar-3.jpg' alt='' className='w-7 rounded-full' />
                  <div> Monroe Parker </div>
                </div>
              </a>
              <a href='#' className='block'>
                <div className='flex items-center gap-3.5 rounded-lg p-2 hover:bg-secondery dark:hover:bg-white/10'>
                  <img src='assets/images/avatars/avatar-5.jpg' alt='' className='w-7 rounded-full' />
                  <div> James Lewis </div>
                </div>
              </a>
              <a href='#' className='block'>
                <div className='flex items-center gap-3.5 rounded-lg p-2 hover:bg-secondery dark:hover:bg-white/10'>
                  <img src='assets/images/avatars/avatar-4.jpg' alt='' className='w-7 rounded-full' />
                  <div> Martin Gray </div>
                </div>
              </a>
              <a href='#' className='block'>
                <div className='flex items-center gap-3.5 rounded-lg p-2 hover:bg-secondery dark:hover:bg-white/10'>
                  <img src='assets/images/avatars/avatar-6.jpg' alt='' className='w-7 rounded-full' />
                  <div> Alexa stella </div>
                </div>
              </a>
              <a href='#' className='block'>
                <div className='flex items-center gap-3.5 rounded-lg p-2 hover:bg-secondery dark:hover:bg-white/10'>
                  <img src='assets/images/avatars/avatar-1.jpg' alt='' className='w-7 rounded-full' />
                  <div> Jesse Steeve </div>
                </div>
              </a>
              <a href='#' className='block'>
                <div className='flex items-center gap-3.5 rounded-lg p-2 hover:bg-secondery dark:hover:bg-white/10'>
                  <img src='assets/images/avatars/avatar-2.jpg' alt='' className='w-7 rounded-full' />
                  <div> John Michael </div>
                </div>
              </a>
              <a href='#' className='block'>
                <div className='flex items-center gap-3.5 rounded-lg p-2 hover:bg-secondery dark:hover:bg-white/10'>
                  <img src='assets/images/avatars/avatar-3.jpg' alt='' className='w-7 rounded-full' />
                  <div> Monroe Parker </div>
                </div>
              </a>
              <a href='#' className='block'>
                <div className='flex items-center gap-3.5 rounded-lg p-2 hover:bg-secondery dark:hover:bg-white/10'>
                  <img src='assets/images/avatars/avatar-5.jpg' alt='' className='w-7 rounded-full' />
                  <div> James Lewis </div>
                </div>
              </a>
              <a href='#' className='block'>
                <div className='flex items-center gap-3.5 rounded-lg p-2 hover:bg-secondery dark:hover:bg-white/10'>
                  <img src='assets/images/avatars/avatar-4.jpg' alt='' className='w-7 rounded-full' />
                  <div> Martin Gray </div>
                </div>
              </a>
              <a href='#' className='block'>
                <div className='flex items-center gap-3.5 rounded-lg p-2 hover:bg-secondery dark:hover:bg-white/10'>
                  <img src='assets/images/avatars/avatar-6.jpg' alt='' className='w-7 rounded-full' />
                  <div> Alexa stella </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className='dark:bg-dark3 absolute -bottom-2 right-5 h-3.5 w-3.5 rotate-45 bg-white' />
      </div>
    </div>
  )
}

export default ChatBox
