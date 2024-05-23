import { IonIcon } from '@ionic/react'
import useAuthStore from '~/store/auth.store'
import useMutationLogout from './hooks/useMutationLogout'
import { Link } from 'react-router-dom'

function Header() {
  const { profile } = useAuthStore()
  const logoutMutation = useMutationLogout()

  const handleLogout = () => {
    logoutMutation.mutate()
  }

  return (
    <header className='sky-50 dark:bg-dark2 fixed left-0 top-0 z-[100] flex h-[--m-top] w-full items-center border-b border-slate-200 bg-white/80 backdrop-blur-xl dark:border-slate-800'>
      <div className='flex w-full items-center px-2 max-lg:gap-10 xl:px-6'>
        <div className='lg:w-[--w-side-sm] 2xl:w-[--w-side]'>
          {/* left */}
          <div className='flex items-center gap-1'>
            {/* icon menu */}
            <button
              uk-toggle='target: #site__sidebar ; cls :!-translate-x-0'
              className='group flex h-8 w-8 items-center justify-center rounded-full text-xl hover:bg-gray-100 xl:hidden dark:hover:bg-slate-600'
              aria-expanded='false'
            >
              <IonIcon
                icon='menu-outline'
                className='md hydrated text-2xl group-aria-expanded:hidden'
                role='img'
                aria-label='menu outline'
              />
              <IonIcon
                icon='close-outline'
                className='md hydrated hidden text-2xl group-aria-expanded:block'
                role='img'
                aria-label='close outline'
              />
            </button>
            <div id='logo'>
              <Link to={'/'}>
                <img src='src/assets/images/logo.png' alt='' className='hidden w-28 md:block dark:!hidden' />
                <img src='src/assets/images/logo-light.png' alt='' className='hidden dark:md:block' />
                <img src='src/assets/images/logo-mobile.png' className='hidden w-20 max-md:block dark:!hidden' alt='' />
                <img src='src/assets/images/logo-mobile-light.png' className='hidden w-20 dark:max-md:block' alt='' />
              </Link>
            </div>
          </div>
        </div>
        <div className='relative flex-1'>
          <div className='mx-auto flex max-w-[1220px] items-center'>
            {/* search */}
            <div
              id='search--box'
              className='left-0 z-20 w-screen overflow-hidden rounded-xl bg-secondery max-md:hidden max-sm:fixed max-sm:top-2 sm:relative sm:w-96 xl:w-[680px] dark:!bg-white/5'
              tabIndex={0}
              aria-haspopup='true'
              aria-expanded='false'
            >
              <IonIcon
                icon='search'
                className='md hydrated absolute left-4 top-1/2 -translate-y-1/2'
                role='img'
                aria-label='search'
              />

              <input
                type='text'
                placeholder='Tìm kiếm bạn bè, video, fanpage ...'
                className='h-12 w-full !bg-transparent !pl-10 !text-sm !font-normal'
              />
            </div>
            {/* search dropdown*/}
            <div
              className='uk- open uk-drop z-10 hidden'
              uk-drop='pos: bottom-center ; animation: uk-animation-slide-bottom-small;mode:click '
            >
              <div className='dark:bg-dark3 -mt-14 w-screen rounded-lg bg-white p-2 pt-14 shadow-lg sm:w-96 xl:w-[694px]'>
                <div className='flex justify-between px-2 py-2.5 text-sm font-medium'>
                  <div className=' text-black dark:text-white'>Recent</div>
                  <button type='button' className='text-blue-500'>
                    Clear
                  </button>
                </div>
                <nav className='text-sm font-medium text-black dark:text-white'>
                  <a
                    href='#!'
                    className=' relative flex items-center gap-4 rounded-lg px-3 py-1.5 hover:bg-secondery dark:hover:bg-white/10'
                  >
                    <img src={profile?.Profile.profile_picture} className='h-9 w-9 rounded-full' alt='' />
                    <div>
                      <div> Jesse Steeve </div>
                      <div className='mt-0.5 text-xs font-medium text-blue-500'> Friend </div>
                    </div>
                    <IonIcon
                      icon='close'
                      className='md hydrated absolute right-3 top-1/2 -translate-y-1/2 text-base'
                      role='img'
                      aria-label='close'
                    />
                  </a>
                  <a
                    href='#!'
                    className=' relative flex items-center gap-4 rounded-lg px-3 py-1.5 hover:bg-secondery dark:hover:bg-white/10'
                  >
                    <img src={profile?.Profile.profile_picture} className='h-9 w-9 rounded-full' alt='' />
                    <div>
                      <div> Martin Gray </div>
                      <div className='mt-0.5 text-xs font-medium text-blue-500'> Friend </div>
                    </div>
                    <IonIcon
                      icon='close'
                      className='md hydrated absolute right-3 top-1/2 -translate-y-1/2 text-base'
                      role='img'
                      aria-label='close'
                    />
                  </a>
                  <a
                    href='#!'
                    className=' relative flex items-center gap-4 rounded-lg px-3 py-1.5 hover:bg-secondery dark:hover:bg-white/10'
                  >
                    <img src='src/assets/images/group/group-2.jpg' className='h-9 w-9 rounded-full' alt='' />
                    <div>
                      <div> Delicious Foods</div>
                      <div className='mt-0.5 text-xs font-medium text-rose-500'> Group </div>
                    </div>
                    <IonIcon
                      icon='close'
                      className='md hydrated absolute right-3 top-1/2 -translate-y-1/2 text-base'
                      role='img'
                      aria-label='close'
                    />
                  </a>
                  <a
                    href='#!'
                    className=' relative flex items-center gap-4 rounded-lg px-3 py-1.5 hover:bg-secondery dark:hover:bg-white/10'
                  >
                    <img src='src/assets/images/group/group-1.jpg' className='h-9 w-9 rounded-full' alt='' />
                    <div>
                      <div> Delicious Foods</div>
                      <div className='mt-0.5 text-xs font-medium text-yellow-500'> Page </div>
                    </div>
                    <IonIcon
                      icon='close'
                      className='md hydrated absolute right-3 top-1/2 -translate-y-1/2 text-base'
                      role='img'
                      aria-label='close'
                    />
                  </a>
                  <a
                    href='#!'
                    className=' relative flex items-center gap-4 rounded-lg px-3 py-1.5 hover:bg-secondery dark:hover:bg-white/10'
                  >
                    <img src='src/assets/images/avatars/avatar-6.jpg' className='h-9 w-9 rounded-full' alt='' />
                    <div>
                      <div> John Welim </div>
                      <div className='mt-0.5 text-xs font-medium text-blue-500'> Friend </div>
                    </div>
                    <IonIcon
                      icon='close'
                      className='md hydrated absolute right-3 top-1/2 -translate-y-1/2 text-base'
                      role='img'
                      aria-label='close'
                    />
                  </a>
                  <a
                    href='#!'
                    className='relative flex  hidden items-center gap-4 rounded-lg px-3 py-1.5 hover:bg-secondery dark:hover:bg-white/10'
                  >
                    <IonIcon
                      icon='search-outline'
                      className='md hydrated text-2xl'
                      role='img'
                      aria-label='search outline'
                    />
                    Creative ideas about Business
                  </a>
                  <a
                    href='#!'
                    className='relative flex hidden   items-center gap-4 rounded-lg px-3 py-1.5 hover:bg-secondery dark:hover:bg-white/10'
                  >
                    <IonIcon
                      icon='search-outline'
                      className='md hydrated text-2xl'
                      role='img'
                      aria-label='search outline'
                    />
                    8 Facts About Writting
                  </a>
                </nav>
                <hr className='-mx-2 mt-2 hidden' />
                <div className='flex hidden justify-end pr-2 text-sm font-medium text-red-500'>
                  <a href='#!' className='flex rounded p-1.5 hover:bg-red-50 dark:hover:bg-slate-700'>
                    <IonIcon icon='trash' className='md hydrated mr-2 text-lg' role='img' aria-label='trash' />
                    Clear your history
                  </a>
                </div>
              </div>
            </div>
            {/* header icons */}
            <div className='absolute right-5 top-1/2 flex -translate-y-1/2 items-center gap-2 text-black sm:gap-4'>
              {/* create */}
              <button
                type='button'
                className='relative rounded-full p-1 sm:bg-secondery sm:p-2 dark:text-white'
                aria-haspopup='true'
                aria-expanded='false'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                  className='h-5 w-5 max-sm:hidden'
                >
                  <path strokeLinecap='round' strokeLinejoin='round' d='M12 4.5v15m7.5-7.5h-15' />
                </svg>
                <IonIcon
                  icon='add-circle-outline'
                  className='md hydrated text-2xl sm:hidden'
                  role='img'
                  aria-label='add circle outline'
                />
              </button>
              <div
                className='border2 uk-drop hidden w-screen overflow-hidden rounded-lg bg-white p-4 drop-shadow-xl md:w-[324px] dark:bg-slate-700'
                uk-drop='offset:6;pos: bottom-right; mode: click; animate-out: true; animation: uk-animation-scale-up uk-transform-origin-top-right '
              >
                <h3 className='text-md font-bold'> Create</h3>
                {/* slider */}
                <div className='uk-slider mt-4' tabIndex={-1} uk-slider='finite:true;sets: true'>
                  <div className='uk-slider-container pb-1'>
                    <ul
                      className='uk-slider-items grid-small'
                      uk-scrollspy='target: > li; cls: uk-animation-scale-up , uk-animation-slide-right-small; delay: 20 ;repeat: true'
                      style={{ transform: 'translate3d(0px, 0px, 0px)' }}
                    >
                      <li
                        className='uk-active w-28'
                        uk-scrollspy-class='uk-animation-fade'
                        tabIndex={-1}
                        style={{ opacity: 0 }}
                      >
                        <div className='dark:bg-dark4 rounded-lg bg-teal-100/60 p-3 px-4 text-teal-600 dark:text-white'>
                          <IonIcon
                            icon='book'
                            className='md hydrated text-2xl drop-shadow-md'
                            role='img'
                            aria-label='book'
                          />
                          <div className='mt-1.5 text-sm font-medium'> Story </div>
                        </div>
                      </li>
                      <li className='uk-active w-28' tabIndex={-1} style={{ opacity: 0 }}>
                        <div className='dark:bg-dark4 rounded-lg bg-sky-100/60 p-3 px-4 text-sky-600 dark:text-white'>
                          <IonIcon
                            icon='camera'
                            className='md hydrated text-2xl drop-shadow-md'
                            role='img'
                            aria-label='camera'
                          />

                          <div className='mt-1.5 text-sm font-medium'> Post </div>
                        </div>
                      </li>
                      <li className='uk-active w-28' tabIndex={-1} style={{ opacity: 0 }}>
                        <div className='dark:bg-dark4 rounded-lg bg-purple-100/60 p-3 px-4 text-purple-600 dark:text-white'>
                          <IonIcon
                            icon='videocam'
                            className='md hydrated text-2xl drop-shadow-md'
                            role='img'
                            aria-label='videocam'
                          />

                          <div className='mt-1.5 text-sm font-medium'> Reel </div>
                        </div>
                      </li>
                      <li className='uk-active w-28' tabIndex={-1} style={{ opacity: 0 }}>
                        <div className='dark:bg-dark4 rounded-lg bg-pink-100/60 p-3 px-4 text-pink-600 dark:text-white'>
                          <IonIcon
                            icon='location'
                            className='md hydrated text-2xl drop-shadow-md'
                            role='img'
                            aria-label='location'
                          />
                          <div className='mt-1.5 text-sm font-medium'> location </div>
                        </div>
                      </li>
                      <li className='uk-active w-28' tabIndex={-1} style={{ opacity: 0 }}>
                        <div className='dark:bg-dark4 rounded-lg bg-sky-100/70 p-3 px-4 text-sky-600 dark:text-white'>
                          <IonIcon
                            icon='happy'
                            className='md hydrated text-2xl drop-shadow-md'
                            role='img'
                            aria-label='happy'
                          />

                          <div className='mt-1.5 text-sm font-medium'> Status </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/* slide nav icons */}
                  <div className='dark:hidden'>
                    <a
                      className='absolute -left-4 top-1/2 flex h-full w-8 -translate-y-1/2 items-center justify-start bg-gradient-to-r from-white via-white px-1.5 dark:from-slate-600 dark:from-transparent dark:via-slate-500 dark:via-transparent'
                      href='#!'
                      uk-slider-item='previous'
                    >
                      <IonIcon
                        icon='chevron-back'
                        className='md hydrated text-xl dark:text-white'
                        role='img'
                        aria-label='chevron back'
                      />
                    </a>
                    <a
                      className='uk-invisible absolute -right-4 top-1/2 flex h-full w-8 -translate-y-1/2 items-center justify-end bg-gradient-to-l from-white via-white px-1.5 dark:from-transparent dark:via-transparent'
                      href='#!'
                      uk-slider-item='next'
                    >
                      <IonIcon
                        icon='chevron-forward'
                        className='md hydrated text-xl dark:text-white'
                        role='img'
                        aria-label='chevron forward'
                      />
                    </a>
                  </div>
                  {/* slide nav */}
                  <div className='-mb-2 mt-2 hidden justify-center dark:flex'>
                    <ul className='uk-dotnav uk-slider-nav inline-flex flex-wrap justify-center gap-1'>
                      <li uk-slider-item={0} className='uk-active'>
                        <a href='#!'></a>
                      </li>
                      <li uk-slider-item={1}>
                        <a href='#!' />
                      </li>
                      <li uk-slider-item={2}>
                        <a href='#!' />
                      </li>
                      <li uk-slider-item={3}>
                        <a href='#!' />
                      </li>
                      <li uk-slider-item={4}>
                        <a href='#!' />
                      </li>
                    </ul>
                  </div>
                </div>
                {/* list */}
                <ul
                  className='-m-1 mt-4 pb-1 text-xs text-gray-500 dark:text-white'
                  uk-scrollspy='target: > li; cls: uk-animation-scale-up , uk-animation-slide-bottom-small ;repeat: true'
                >
                  <li
                    className='flex cursor-pointer items-center gap-4 rounded-md p-1.5 hover:bg-secondery dark:hover:bg-white/10'
                    style={{ opacity: 0 }}
                  >
                    <img src='src/assets/images/icons/group.png' alt='' className='w-7' />
                    <div className='flex-1'>
                      <a href='timeline.html'>
                        <h4 className='text-sm font-medium text-black dark:text-white'> Groups </h4>
                      </a>
                      <div className='mt-1 text-xs text-gray-500 dark:text-white'>
                        Meet people with similar interests.
                      </div>
                    </div>
                  </li>
                  <li
                    className='flex cursor-pointer items-center gap-4 rounded-md p-1.5 hover:bg-secondery dark:hover:bg-white/10'
                    style={{ opacity: 0 }}
                  >
                    <img src='src/assets/images/icons/page.png' alt='' className='w-7' />
                    <div className='flex-1'>
                      <a href='timeline.html'>
                        <h4 className='text-sm font-medium text-black dark:text-white'> Pages </h4>
                      </a>
                      <div className='mt-1'> Find and connect with businesses.</div>
                    </div>
                  </li>
                  <li
                    className='flex cursor-pointer items-center gap-4 rounded-md p-1.5 hover:bg-secondery dark:hover:bg-white/10'
                    style={{ opacity: 0 }}
                  >
                    <img src='src/assets/images/icons/event.png' className='w-7' />
                    <div className='flex-1'>
                      <a href='timeline.html'>
                        <h4 className='text-sm font-medium text-black dark:text-white'> Event </h4>
                      </a>
                      <div className='mt-1'>Discover fun activities near you .</div>
                    </div>
                  </li>
                  <li
                    className='flex cursor-pointer items-center gap-4 rounded-md p-1.5 hover:bg-secondery dark:hover:bg-white/10'
                    style={{ opacity: 0 }}
                  >
                    <img src='src/assets/images/icons/market.png' className='-ml-1 w-8' />
                    <div className='flex-1'>
                      <a href='timeline.html'>
                        <h4 className='text-sm font-medium text-black dark:text-white'> Event </h4>
                      </a>
                      <div className='mt-1'>Find local buyers and sellers .</div>
                    </div>
                  </li>
                  <li
                    className='flex cursor-pointer items-center gap-4 rounded-md p-1.5 hover:bg-secondery dark:hover:bg-white/10'
                    style={{ opacity: 0 }}
                  >
                    <img src='src/assets/images/icons/game.png' alt='' className='w-7' />
                    <div className='flex-1'>
                      <a href='timeline.html'>
                        <h4 className='text-sm font-medium text-black dark:text-white'> Games </h4>
                      </a>
                      <div className='mt-1'> play game with friends have fun. </div>
                    </div>
                  </li>
                </ul>
              </div>
              {/* notification */}
              <button
                type='button'
                className='relative rounded-full p-1 sm:bg-secondery sm:p-2 dark:text-white'
                uk-tooltip='title: Notification; pos: bottom; offset:6'
                title=''
                aria-describedby='uk-tooltip-8'
                aria-haspopup='true'
                aria-expanded='false'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                  className='h-6 w-6 max-sm:hidden'
                >
                  <path d='M5.85 3.5a.75.75 0 00-1.117-1 9.719 9.719 0 00-2.348 4.876.75.75 0 001.479.248A8.219 8.219 0 015.85 3.5zM19.267 2.5a.75.75 0 10-1.118 1 8.22 8.22 0 011.987 4.124.75.75 0 001.48-.248A9.72 9.72 0 0019.266 2.5z' />
                  <path
                    fillRule='evenodd'
                    d='M12 2.25A6.75 6.75 0 005.25 9v.75a8.217 8.217 0 01-2.119 5.52.75.75 0 00.298 1.206c1.544.57 3.16.99 4.831 1.243a3.75 3.75 0 107.48 0 24.583 24.583 0 004.83-1.244.75.75 0 00.298-1.205 8.217 8.217 0 01-2.118-5.52V9A6.75 6.75 0 0012 2.25zM9.75 18c0-.034 0-.067.002-.1a25.05 25.05 0 004.496 0l.002.1a2.25 2.25 0 11-4.5 0z'
                    clipRule='evenodd'
                  />
                </svg>
                <div className='absolute right-0 top-0 -m-1 rounded-full bg-red-600 px-1 text-xs text-white'>6</div>
                <IonIcon
                  icon='notifications-outline'
                  className='md hydrated text-2xl sm:hidden'
                  role='img'
                  aria-label='notifications outline'
                />
              </button>
              <div
                className='border2 uk-drop hidden w-screen rounded-lg bg-white pr-1.5 drop-shadow-xl md:w-[365px] dark:bg-slate-700'
                uk-drop='offset:6;pos: bottom-right; mode: click; animate-out: true; animation: uk-animation-scale-up uk-transform-origin-top-right '
              >
                {/* heading */}
                <div className='flex items-center justify-between gap-2 p-4 pb-2'>
                  <h3 className='text-xl font-bold'> Notifications </h3>
                  <div className='flex gap-2.5'>
                    <button
                      type='button'
                      className='flex rounded-full p-1 focus:bg-secondery dark:text-white'
                      aria-haspopup='true'
                      aria-expanded='false'
                    >
                      <IonIcon
                        icon='ellipsis-horizontal'
                        className='md hydrated text-xl'
                        role='img'
                        aria-label='ellipsis horizontal'
                      />
                    </button>
                    <div
                      className='uk-dropdown group w-[280px]'
                      uk-dropdown='pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click; offset:5'
                    >
                      <nav className='text-sm'>
                        <a href='#!'>
                          <IonIcon
                            icon='checkmark-circle-outline'
                            className='md hydrated shrink-0 text-xl'
                            role='img'
                            aria-label='checkmark circle outline'
                          />
                          Mark all as read
                        </a>
                        <a href='#!'>
                          <IonIcon
                            icon='settings-outline'
                            className='md hydrated shrink-0 text-xl'
                            role='img'
                            aria-label='settings outline'
                          />
                          Notification setting
                        </a>
                        <a href='#!'>
                          <IonIcon
                            icon='notifications-off-outline'
                            className='md hydrated shrink-0 text-xl'
                            role='img'
                            aria-label='notifications off outline'
                          />
                          Mute Notification
                        </a>
                      </nav>
                    </div>
                  </div>
                </div>
                <div className='h-[400px] w-full overflow-y-auto pr-2 text-sm'>
                  {/* contents list */}
                  <div className='p-1 pl-2 text-sm font-normal dark:text-white'>
                    <a
                      href='#!'
                      className='relative flex items-center gap-3 rounded-xl bg-teal-500/5 p-2 pr-10 duration-200 hover:bg-secondery dark:hover:bg-white/10'
                    >
                      <div className='relative h-12 w-12 shrink-0'>
                        <img
                          src='src/assets/images/avatars/avatar-3.jpg'
                          alt=''
                          className='h-full w-full rounded-full object-cover'
                        />
                      </div>
                      <div className='flex-1 '>
                        <p>
                          <b className='mr-1 font-bold'> Alexa Gray</b> started following you. Welcome him to your
                          profile. 👋
                        </p>
                        <div className='mt-1.5 text-xs text-gray-500 dark:text-white/80'> 4 hours ago </div>
                        <div className='absolute right-3 top-5 h-2.5 w-2.5 rounded-full bg-teal-600' />
                      </div>
                    </a>
                    <a
                      href='#!'
                      className='relative flex items-center gap-3 rounded-xl p-2 pr-10 duration-200 hover:bg-secondery dark:hover:bg-white/10'
                    >
                      <div className='relative h-12 w-12 shrink-0'>
                        <img
                          src='src/assets/images/avatars/avatar-7.jpg'
                          alt=''
                          className='h-full w-full rounded-full object-cover'
                        />
                      </div>
                      <div className='flex-1 '>
                        <p>
                          <b className='mr-1 font-bold'>Jesse Steeve</b> mentioned you in a story. Check it out and
                          reply. 📣
                        </p>
                        <div className='mt-1.5 text-xs text-gray-500 dark:text-white/80'> 8 hours ago </div>
                      </div>
                    </a>
                    <a
                      href='#!'
                      className='relative flex items-center gap-3 rounded-xl p-2 pr-10 duration-200 hover:bg-secondery dark:hover:bg-white/10'
                    >
                      <div className='relative h-12 w-12 shrink-0'>
                        <img
                          src='src/assets/images/avatars/avatar-6.jpg'
                          alt=''
                          className='h-full w-full rounded-full object-cover'
                        />
                      </div>
                      <div className='flex-1 '>
                        <p>
                          <b className='mr-1 font-bold'> Alexa stella</b> commented on your photo “Wow, stunning shot!”
                          💬
                        </p>
                        <div className='mt-1.5 text-xs text-gray-500 dark:text-white/80'> 8 hours ago </div>
                      </div>
                    </a>
                    <a
                      href='#!'
                      className='relative flex items-center gap-3 rounded-xl p-2 pr-10 duration-200 hover:bg-secondery dark:hover:bg-white/10'
                    >
                      <div className='relative h-12 w-12 shrink-0'>
                        <img
                          src={profile?.Profile.profile_picture}
                          alt=''
                          className='h-full w-full rounded-full object-cover'
                        />
                      </div>
                      <div className='flex-1 '>
                        <p>
                          <b className='mr-1 font-bold'> John Michael</b> who you might know, is on socialite.
                        </p>
                        <div className='mt-1.5 text-xs text-gray-500 dark:text-white/80'> 2 hours ago </div>
                      </div>
                      <button type='button' className='button bg-primary text-white'>
                        fallow
                      </button>
                    </a>
                    <a
                      href='#!'
                      className='relative flex items-center gap-3 rounded-xl bg-teal-500/5 p-2 pr-10 duration-200 hover:bg-secondery dark:hover:bg-white/10'
                    >
                      <div className='relative h-12 w-12 shrink-0'>
                        <img
                          src='src/assets/images/avatars/avatar-3.jpg'
                          alt=''
                          className='h-full w-full rounded-full object-cover'
                        />
                      </div>
                      <div className='flex-1 '>
                        <p>
                          <b className='mr-1 font-bold'> Sarah Gray</b> sent you a message. He wants to chat with you.
                          💖
                        </p>
                        <div className='mt-1.5 text-xs text-gray-500 dark:text-white/80'> 4 hours ago </div>
                        <div className='absolute right-3 top-5 h-2.5 w-2.5 rounded-full bg-teal-600' />
                      </div>
                    </a>
                    <a
                      href='#!'
                      className='relative flex items-center gap-3 rounded-xl p-2 pr-10 duration-200 hover:bg-secondery dark:hover:bg-white/10'
                    >
                      <div className='relative h-12 w-12 shrink-0'>
                        <img
                          src='src/assets/images/avatars/avatar-4.jpg'
                          alt=''
                          className='h-full w-full rounded-full object-cover'
                        />
                      </div>
                      <div className='flex-1 '>
                        <p>
                          <b className='mr-1 font-bold'> Jesse Steeve</b> sarah tagged you <br /> in a photo of your
                          birthday party. 📸
                        </p>
                        <div className='mt-1.5 text-xs text-gray-500 dark:text-white/80'> 8 hours ago </div>
                      </div>
                    </a>
                    <a
                      href='#!'
                      className='relative flex items-center gap-3 rounded-xl p-2 pr-10 duration-200 hover:bg-secondery dark:hover:bg-white/10'
                    >
                      <div className='relative h-12 w-12 shrink-0'>
                        <img
                          src={profile?.Profile.profile_picture}
                          alt=''
                          className='h-full w-full rounded-full object-cover'
                        />
                      </div>
                      <div className='flex-1 '>
                        <p>
                          <b className='mr-1 font-bold'> Lewis Lewis</b> mentioned you in a story. Check it out and
                          reply. 📣
                        </p>
                        <div className='mt-1.5 text-xs text-gray-500 dark:text-white/80'> 8 hours ago </div>
                      </div>
                    </a>
                    <a
                      href='#!'
                      className='relative flex items-center gap-3 rounded-xl p-2 pr-10 duration-200 hover:bg-secondery dark:hover:bg-white/10'
                    >
                      <div className='relative h-12 w-12 shrink-0'>
                        <img
                          src='src/assets/images/avatars/avatar-7.jpg'
                          alt=''
                          className='h-full w-full rounded-full object-cover'
                        />
                      </div>
                      <div className='flex-1 '>
                        <p>
                          <b className='mr-1 font-bold'> Martin Gray</b> liked your photo of the Eiffel Tower. 😍
                        </p>
                        <div className='mt-1.5 text-xs text-gray-500 dark:text-white/80'> 8 hours ago </div>
                      </div>
                    </a>
                  </div>
                </div>
                {/* footer */}
                <a href='#!'>
                  <div className='border-t border-slate-100 py-4 text-center text-sm font-medium text-blue-600 dark:border-gray-600 dark:text-white'>
                    View Notifications
                  </div>
                </a>
                <div className='dark:bg-dark3 absolute -top-1.5 right-3 h-3 w-3 rotate-45 border-l border-t bg-white max-md:hidden dark:border-transparent' />
              </div>
              {/* messages */}
              <button
                type='button'
                className='relative rounded-full p-1 sm:bg-secondery sm:p-2 dark:text-white'
                uk-tooltip='title: Messages; pos: bottom; offset:6'
                title=''
                aria-describedby='uk-tooltip-13'
                aria-haspopup='true'
                aria-expanded='false'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                  className='h-6 w-6 max-sm:hidden'
                >
                  <path
                    fillRule='evenodd'
                    d='M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z'
                    clipRule='evenodd'
                  />
                </svg>
                <IonIcon
                  icon='chatbox-ellipses-outline'
                  className='md hydrated text-2xl sm:hidden'
                  role='img'
                  aria-label='chatbox ellipses outline'
                />
              </button>
              <div
                className='border2 uk-drop hidden w-screen rounded-lg bg-white pr-1.5 drop-shadow-xl md:w-[360px] dark:bg-slate-700'
                uk-drop='offset:6;pos: bottom-right; mode: click; animate-out: true; animation: uk-animation-scale-up uk-transform-origin-top-right '
              >
                {/* heading */}
                <div className='flex items-center justify-between gap-2 p-4 pb-1'>
                  <h3 className='text-xl font-bold'> Chats </h3>
                  <div className='flex gap-2.5 text-lg text-slate-900 dark:text-white'>
                    <IonIcon icon='expand-outline' className='md hydrated' role='img' aria-label='expand outline' />
                    <IonIcon icon='create-outline' className='md hydrated' role='img' aria-label='create outline' />
                  </div>
                </div>
                <div className='relative w-full p-2 px-3 '>
                  <input type='text' className='w-full !rounded-lg !pl-10 dark:!bg-white/10' placeholder='Search' />
                  <IonIcon
                    icon='search-outline'
                    className='md hydrated absolute left-7 top-1/2 -translate-y-1/2 dark:text-white'
                    role='img'
                    aria-label='search outline'
                  />
                </div>
                <div className='h-80 overflow-y-auto pr-2'>
                  <div className='p-2 pr-1 pt-0 dark:text-white/80'>
                    <a
                      href='#!'
                      className='relative flex items-center gap-4 rounded-lg p-2 py-3 duration-200 hover:bg-secondery dark:hover:bg-white/10'
                    >
                      <div className='relative h-10 w-10 shrink-0'>
                        <img
                          src={profile?.Profile.profile_picture}
                          alt=''
                          className='h-full w-full rounded-full object-cover'
                        />
                      </div>
                      <div className='min-w-0 flex-1'>
                        <div className='mb-1 flex items-center gap-2'>
                          <div className='mr-auto text-sm font-medium text-black dark:text-white'>Jesse Steeve</div>
                          <div className='text-xs text-gray-500 dark:text-white/80'> 09:40AM </div>
                          <div className='h-2.5 w-2.5 rounded-full bg-blue-600 dark:bg-slate-700' />
                        </div>
                        <div className='overflow-hidden text-ellipsis whitespace-nowrap text-xs font-normal'>
                          Love your photos 😍
                        </div>
                      </div>
                    </a>
                    <a
                      href='#!'
                      className='relative flex items-center gap-4 rounded-lg p-2 py-3 duration-200 hover:bg-secondery dark:hover:bg-white/10'
                    >
                      <div className='relative h-10 w-10 shrink-0'>
                        <img
                          src='src/assets/images/avatars/avatar-4.jpg'
                          alt=''
                          className='h-full w-full rounded-full object-cover'
                        />
                      </div>
                      <div className='min-w-0 flex-1'>
                        <div className='mb-1 flex items-center gap-2'>
                          <div className='mr-auto text-sm font-medium text-black dark:text-white'>Martin Gray</div>
                          <div className='text-xs text-gray-500 dark:text-white/80'> 02:40AM </div>
                        </div>
                        <div className='overflow-hidden text-ellipsis whitespace-nowrap text-xs font-normal'>
                          Product photographer wanted? 📷
                        </div>
                      </div>
                    </a>
                    <a
                      href='#!'
                      className='relative flex items-center gap-4 rounded-lg p-2 py-3 duration-200 hover:bg-secondery dark:hover:bg-white/10'
                    >
                      <div className='relative h-10 w-10 shrink-0'>
                        <img
                          src='src/assets/images/avatars/avatar-5.jpg'
                          alt=''
                          className='h-full w-full rounded-full object-cover'
                        />
                      </div>
                      <div className='min-w-0 flex-1'>
                        <div className='mb-1 flex items-center gap-2'>
                          <div className='mr-auto text-sm font-medium text-black dark:text-white'>Jesse Steeve</div>
                          <div className='text-xs text-gray-500 dark:text-white/80'> 2 day </div>
                        </div>
                        <div className='overflow-hidden text-ellipsis whitespace-nowrap text-xs font-normal'>
                          Want to buy landscape photo? 🌄
                        </div>
                      </div>
                    </a>
                    <a
                      href='#!'
                      className='relative flex items-center gap-4 rounded-lg p-2 py-3 duration-200 hover:bg-secondery dark:hover:bg-white/10'
                    >
                      <div className='relative h-10 w-10 shrink-0'>
                        <img
                          src='src/assets/images/avatars/avatar-3.jpg'
                          alt=''
                          className='h-full w-full rounded-full object-cover'
                        />
                      </div>
                      <div className='min-w-0 flex-1'>
                        <div className='mb-1 flex items-center gap-2'>
                          <div className='mr-auto text-sm font-medium text-black dark:text-white'>Monroe Parker</div>
                          <div className='text-xs text-gray-500 dark:text-white/80'> 4 week </div>
                          <div className='h-2.5 w-2.5 rounded-full bg-blue-600 dark:bg-slate-700' />
                        </div>
                        <div className='overflow-hidden text-ellipsis whitespace-nowrap text-xs font-normal'>
                          I’m glad you like it.😊
                        </div>
                      </div>
                    </a>
                    <a
                      href='#!'
                      className='relative flex items-center gap-4 rounded-lg p-2 py-3 duration-200 hover:bg-secondery dark:hover:bg-white/10'
                    >
                      <div className='relative h-10 w-10 shrink-0'>
                        <img
                          src='src/assets/images/avatars/avatar-7.jpg'
                          alt=''
                          className='h-full w-full rounded-full object-cover'
                        />
                      </div>
                      <div className='min-w-0 flex-1'>
                        <div className='mb-1 flex items-center gap-2'>
                          <div className='mr-auto text-sm font-medium text-black dark:text-white'>Alex Dolve</div>
                          <div className='text-xs text-gray-500 dark:text-white/80'> 2 month </div>
                        </div>
                        <div className='overflow-hidden text-ellipsis whitespace-nowrap text-xs font-normal'>
                          Photo editor needed. Fix photos? 🛠️
                        </div>
                      </div>
                    </a>
                    <a
                      href='#!'
                      className='relative flex items-center gap-4 rounded-lg p-2 py-3 duration-200 hover:bg-secondery dark:hover:bg-white/10'
                    >
                      <div className='relative h-10 w-10 shrink-0'>
                        <img
                          src='src/assets/images/avatars/avatar-4.jpg'
                          alt=''
                          className='h-full w-full rounded-full object-cover'
                        />
                      </div>
                      <div className='min-w-0 flex-1'>
                        <div className='mb-1 flex items-center gap-2'>
                          <div className='mr-auto text-sm font-medium text-black dark:text-white'>Jesse Steeve</div>
                          <div className='text-xs text-gray-500 dark:text-white/80'> 09:40AM </div>
                        </div>
                        <div className='overflow-hidden text-ellipsis whitespace-nowrap text-xs font-normal'>
                          Love your photos 😍
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                {/* footer */}
                <a href='#!'>
                  <div className='border-t border-slate-100 py-4 text-center text-sm font-medium text-blue-600 dark:border-gray-600 dark:text-white'>
                    See all Messages
                  </div>
                </a>
                <div className='dark:bg-dark3 absolute -top-1.5 right-3 h-3 w-3 rotate-45 border-l border-t bg-white max-md:hidden dark:border-transparent' />
              </div>
              {/* profile */}
              <div
                className='relative shrink-0 cursor-pointer rounded-full bg-secondery'
                tabIndex={0}
                aria-haspopup='true'
                aria-expanded='false'
              >
                <img
                  src={profile?.Profile.profile_picture}
                  alt=''
                  className='h-7 w-7 shrink-0 rounded-full object-cover shadow sm:h-9 sm:w-9'
                />
              </div>
              {/* fix */}
              <div
                className='border2 uk-drop hidden w-64 rounded-lg bg-white drop-shadow-xl dark:bg-slate-700'
                uk-drop='offset:6;pos: bottom-right;animate-out: true; animation: uk-animation-scale-up uk-transform-origin-top-right '
              >
                <Link to={'/profile'}>
                  <div className='flex items-center gap-4 p-4 py-5'>
                    <img
                      src={profile?.Profile.profile_picture}
                      alt=''
                      className='h-10 w-10 rounded-full object-cover shadow'
                    />
                    <div className='flex-1'>
                      <h4 className='text-sm font-medium text-black'>
                        {profile?.last_name} {profile?.first_name}
                      </h4>
                      <div className='mt-1 text-sm font-light text-blue-600 dark:text-white/70'>{profile?.email}</div>
                    </div>
                  </div>
                </Link>
                <hr className='dark:border-gray-600/60' />
                <nav className='p-2 text-sm font-normal text-black dark:text-white'>
                  <a href='upgrade.html'>
                    <div className='flex items-center gap-2.5 rounded-md p-2 px-2.5 text-blue-600 hover:bg-secondery dark:hover:bg-white/10'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'
                        className='h-6 w-6'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z'
                        />
                      </svg>
                      Nâng cấp tài khoản
                    </div>
                  </a>
                  <a href='setting.html'>
                    <div className='flex items-center gap-2.5 rounded-md p-2 px-2.5 hover:bg-secondery dark:hover:bg-white/10'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'
                        className='h-6 w-6'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z'
                        />
                      </svg>
                      Ví của tôi
                    </div>
                  </a>
                  <a href='setting.html'>
                    <div className='flex items-center gap-2.5 rounded-md p-2 px-2.5 hover:bg-secondery dark:hover:bg-white/10'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'
                        className='h-6 w-6'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46'
                        />
                      </svg>
                      Thông báo
                    </div>
                  </a>
                  <a href='setting.html'>
                    <div className='flex items-center gap-2.5 rounded-md p-2 px-2.5 hover:bg-secondery dark:hover:bg-white/10'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'
                        className='h-6 w-6'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z'
                        />
                        <path strokeLinecap='round' strokeLinejoin='round' d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
                      </svg>
                      Cài đặt
                    </div>
                  </a>
                  <button type='button' className='w-full'>
                    <div className='flex items-center gap-2.5 rounded-md p-2 px-2.5 hover:bg-secondery dark:hover:bg-white/10'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'
                        className='h-6 w-6'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z'
                        />
                      </svg>
                      Chế độ sáng
                      <span className='ml-auto w-9 rounded-full bg-slate-200/40 p-0.5 dark:hover:bg-white/20'>
                        <span className='relative block h-4 w-2 w-4 rounded-full bg-white shadow-md dark:bg-blue-600' />
                      </span>
                    </div>
                  </button>
                  <hr className='-mx-2 my-2 dark:border-gray-600/60' />
                  <a className='cursor-pointer' onClick={handleLogout}>
                    <div className='flex items-center gap-2.5 rounded-md p-2 px-2.5 hover:bg-secondery dark:hover:bg-white/10'>
                      <svg
                        className='w-6'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1'
                        />
                      </svg>
                      Đăng xuất
                    </div>
                  </a>
                </nav>
              </div>
              <div className='flex hidden items-center gap-2'>
                <img src={profile?.Profile.profile_picture} alt='' className='h-9 w-9 rounded-full shadow' />
                <div className='w-20 font-semibold text-gray-600'> Hamse </div>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                  className='h-5 w-5'
                >
                  <path strokeLinecap='round' strokeLinejoin='round' d='M19.5 8.25l-7.5 7.5-7.5-7.5' />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
