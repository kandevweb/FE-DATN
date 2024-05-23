import { IonIcon } from '@ionic/react'
import React from 'react'

function Navigation() {
  return (
    <div
      className='mt-3 flex items-center justify-between border-t border-gray-100 px-2 max-lg:flex-col dark:border-slate-700'
      uk-sticky='offset:50; cls-active: bg-white/80 shadow rounded-b-2xl z-50 backdrop-blur-xl dark:!bg-slate-700/80; animation:uk-animation-slide-top ; media: 992'
    >
      <div className='flex items-center gap-2 py-2 pr-1 text-sm max-md:w-full lg:order-2'>
        <button className='button flex items-center gap-2 bg-primary px-3.5 py-2 text-white max-md:flex-1'>
          <IonIcon icon='add-circle' className='text-xl' />
          <span className='text-sm'> Thêm tin mới</span>
        </button>
        <button type='submit' className='dark:bg-dark2 flex rounded-lg bg-secondery px-2.5 py-2'>
          <IonIcon icon='search' className='text-xl' />
        </button>
        <div>
          <button type='submit' className='dark:bg-dark3 flex rounded-lg bg-secondery px-2.5 py-2'>
            <IonIcon icon='ellipsis-horizontal' className='text-xl' />
          </button>
          <div
            className='w-[240px]'
            uk-dropdown='pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click;offset:10'
          >
            <nav>
              <a href='#'>
                <IonIcon className='text-xl' icon='pricetags-outline' /> Hủy kết bạn
              </a>
              <a href='#'>
                <IonIcon className='text-xl' icon='time-outline' /> Mute story
              </a>
              <a href='#'>
                <IonIcon className='text-xl' icon='flag-outline' /> Báo cáo
              </a>
              <a href='#'>
                <IonIcon className='text-xl' icon='share-outline' /> Chia sẻ trang cá nhân
              </a>
              <hr />
              <a href='#' className='text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50'>
                <IonIcon className='text-xl' icon='stop-circle-outline' /> Chặn người dùng
              </a>
            </nav>
          </div>
        </div>
      </div>
      <nav className='-mb-px flex gap-0.5 rounded-xl text-[15px] font-medium text-gray-600  max-md:w-full max-md:overflow-x-auto dark:text-white'>
        <a href='#' className='inline-block  border-b-2 border-blue-600 px-3.5 py-3 leading-8 text-blue-600'>
          Trang cá nhân
        </a>
        <a href='#' className='inline-block px-3.5 py-3 leading-8'>
          Bạn bè <span className='hidden pl-2 text-xs font-normal lg:inline-block'>2,680</span>
        </a>
        <a href='#' className='inline-block px-3.5 py-3 leading-8'>
          Hình ảnh
        </a>
        <a href='#' className='inline-block px-3.5 py-3 leading-8'>
          Video
        </a>
        <a href='#' className='inline-block px-3.5 py-3 leading-8'>
          Check in
        </a>
        <a href='#' className='inline-block px-3.5 py-3 leading-8'>
          Video
        </a>
        {/* dropdown */}
        <div>
          <a href='#' className='inline-flex items-center gap-2 px-3 py-3 leading-8'>
            Xem thêm <IonIcon icon='chevron-down' />
          </a>
          <div
            className='w-screen md:w-[240px]'
            uk-dropdown='pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click;offset:-4'
          >
            <nav className='text-[15px]'>
              <a href='#'> Likes </a>
              <a href='#'> Music </a>
              <a href='#'> Events </a>
              <a href='#'> Books </a>
              <a href='#'> Reviews given </a>
              <a href='#'> Groups</a>
              <a href='#'> Manage Sections</a>
            </nav>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navigation
