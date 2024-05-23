import { IonIcon } from '@ionic/react'

function CreateStory() {
  return (
    <>
      {/* create status */}
      <div className='uk- open hidden lg:p-20' id='create-status' uk-modal=''>
        <div className='uk-modal-dialog tt dark:bg-dark2 relative mx-auto w-full overflow-hidden rounded-lg bg-white shadow-xl md:w-[520px]'>
          <div className='mb-0 border-b py-4 text-center dark:border-slate-700'>
            <h2 className='text-sm font-medium text-black'> Create Status </h2>
            {/* close button */}
            <button type='button' className='button-icon uk-modal-close absolute right-0 top-0 m-2.5'>
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
          <div className='mt-3 space-y-5 p-2'>
            <textarea
              className='w-full !border-transparent !bg-white !text-xl !font-normal !text-black placeholder:!text-black focus:!border-transparent focus:!ring-transparent   dark:!bg-slate-800 dark:!text-white dark:placeholder:!text-white'
              name=''
              id=''
              rows={6}
              placeholder='What do you have in mind?'
              defaultValue={''}
            />
          </div>
          <div className='flex flex-wrap items-center gap-2 px-4 py-2 text-sm font-medium'>
            <button
              type='button'
              className='flex items-center gap-1.5 rounded-full border-2 border-sky-100 bg-sky-50 px-2 py-1 text-sky-600 dark:border-sky-900 dark:bg-sky-950'
            >
              <IonIcon icon='image' className='text-base' />
              Image
            </button>
            <button
              type='button'
              className='flex items-center gap-1.5 rounded-full border-2 border-teal-100 bg-teal-50 px-2 py-1 text-teal-600 dark:border-teal-900 dark:bg-teal-950'
            >
              <IonIcon icon='videocam' className='text-base' />
              Video
            </button>
            <button
              type='button'
              className='flex items-center gap-1.5 rounded-full border-2 border-orange-100 bg-orange-50 px-2 py-1 text-orange-600 dark:border-yellow-900 dark:bg-yellow-950'
            >
              <IonIcon icon='happy' className='text-base' />
              Feeling
            </button>
            <button
              type='button'
              className='flex items-center gap-1.5 rounded-full border-2 border-rose-100 bg-red-50 px-2 py-1 text-red-600 dark:border-rose-900 dark:bg-rose-950'
            >
              <IonIcon icon='location' className='text-base' />
              Check in
            </button>
            <button type='button' className='grid h-8 w-8 place-items-center rounded-full bg-secondery text-xl'>
              <IonIcon icon='ellipsis-horizontal' />
            </button>
          </div>
          <div className='flex items-center justify-between p-5'>
            <div>
              <button
                className='aria-expanded: group inline-flex items-center gap-1 rounded-full border-2 border-slate-100 bg-slate-50 px-2.5 py-1 text-sm font-medium aria-expanded:bg-slate-100 dark:border-slate-600 dark:bg-slate-700 dark:text-white'
                type='button'
              >
                Everyone
                <IonIcon
                  icon='chevron-down-outline'
                  className='text-base duration-500 group-aria-expanded:rotate-180'
                />
              </button>
              <div
                className='w-60 rounded-lg border border-slate-100 bg-white p-2 font-medium text-black shadow-lg dark:bg-slate-700'
                uk-drop='offset:10;pos: bottom-left; reveal-left;animate-out: true; animation: uk-animation-scale-up uk-transform-origin-bottom-left ; mode:click'
              >
                <form>
                  <label>
                    <input type='radio' name='radio-status' id='monthly1' className='peer hidden appearance-none' />
                    <div className=' dark:bg-dark3 relative flex cursor-pointer items-center justify-between rounded-md p-2 px-3 hover:bg-secondery peer-checked:[&_.active]:block'>
                      <div className='text-sm'> Everyone </div>
                      <IonIcon
                        icon='checkmark-circle'
                        className='active uk-animation-scale-up absolute right-2 hidden -translate-y-1/2 text-2xl text-blue-600'
                      />
                    </div>
                  </label>
                  <label>
                    <input type='radio' name='radio-status' id='monthly1' className='peer hidden appearance-none' />
                    <div className=' dark:bg-dark3 relative flex cursor-pointer items-center justify-between rounded-md p-2 px-3 hover:bg-secondery peer-checked:[&_.active]:block'>
                      <div className='text-sm'> Friends </div>
                      <IonIcon
                        icon='checkmark-circle'
                        className='active uk-animation-scale-up absolute right-2 hidden -translate-y-1/2 text-2xl text-blue-600'
                      />
                    </div>
                  </label>
                  <label>
                    <input type='radio' name='radio-status' id='monthly' className='peer hidden appearance-none' />
                    <div className=' dark:bg-dark3 relative flex cursor-pointer items-center justify-between rounded-md p-2 px-3 hover:bg-secondery peer-checked:[&_.active]:block'>
                      <div className='text-sm'> Only me </div>
                      <IonIcon
                        icon='checkmark-circle'
                        className='active uk-animation-scale-up absolute right-2 hidden -translate-y-1/2 text-2xl text-blue-600'
                      />
                    </div>
                  </label>
                </form>
              </div>
            </div>
            <div className='flex items-center gap-2'>
              <button type='button' className='button bg-blue-500 px-12 py-2 text-[14px] text-white'>
                {' '}
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CreateStory
