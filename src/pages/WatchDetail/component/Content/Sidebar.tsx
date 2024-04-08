import SidebarSingVideo from './SidebarSingVideo'

const array = [1, 2, 3, 4, 5, 6, 7, 8]

const Sidebar = () => {
  return (
    <div className='w-full lg:w-[350px] 2xl:w-[400px]'>
      <div
        className='space-y-4 max-lg:grid max-lg:gap-6 sm:grid-cols-2 lg:space-y-6 lg:pb-8'
        uk-sticky='media: 1024; end: #js-oversized; offset: 80'
      >
        {/* peaple you might know */}
        <div className='box p-5 pr-2'>
          <div className='flex items-baseline justify-between text-black dark:text-white'>
            <h3 className='text-base font-bold'> Related Videos </h3>
          </div>

          {/* Video list */}
          <div className='mt-3 w-full space-y-4'>
            {/* single video */}
            {array.map((item) => {
              return <SidebarSingVideo key={item} />
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
