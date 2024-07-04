import { IonIcon } from '@ionic/react'
import { useMutation, useQuery } from '@tanstack/react-query'
import React from 'react'
import { Link } from 'react-router-dom'
import favoriteVideoApi from '~/apis/favoriteVideo.api'
import likeVideoApi from '~/apis/like-video.api'
import { Video } from '~/components/design-systems'
import { ROUTE_PATH } from '~/constants'
import { cn } from '~/helpers'
import SvgIcon from '~/helpers/SvgIcon'
import useAuthStore from '~/store/auth.store'
import { calculateTimeAgo } from '~/utils/helpers'

interface HorizontalVideoCardProps {
  video: DataVideoResponse
}

const HorizontalVideoCard = ({ video }: HorizontalVideoCardProps) => {
  const { profile } = useAuthStore()

  const { data: likeVideo, refetch } = useQuery({
    queryKey: ['getLikeVideos', video.id],
    queryFn: async () => {
      const res = await likeVideoApi.getLikeCountVideo(video.id)
      return res.data
    }
  })

  const { mutate: handlePatchLikeVideo } = useMutation({
    mutationFn: async () => {
      const res = await likeVideoApi.pathLikeVideo(video.id)
      return res.data
    },
    onSuccess: () => {
      refetch()
    }
  })

  const { mutate: handleFavoriteVideo } = useMutation({
    mutationFn: async () => {
      const res = await favoriteVideoApi.patchFavoriteVideo(video.id)
      return res
    },
    onSuccess: () => {
      getFavoriteVideo()
    }
  })

  const { data: favoriteVideo, mutate: getFavoriteVideo } = useMutation({
    mutationFn: async () => {
      const res = await favoriteVideoApi.getFavoriteVideo(video.id)
      return res.data.data
    }
    // onSuccess: (data) => {
    // }
  })

  const handleClickActionVideo = () => {
    if (!favoriteVideo) {
      getFavoriteVideo()
    }
  }

  return (
    <React.Fragment>
      <div className='flex flex-col gap-y-2'>
        <div className='flex items-start justify-between px-2'>
          <div className=''>
            <div className='flex gap-x-2'>
              <div className='relative shrink-0 cursor-pointer rounded-full'>
                <img
                  className='sm:w-h-11 h-10 w-11 shrink-0 rounded-full shadow sm:h-11'
                  src={video?.user.Profile.cover_photo}
                  alt=''
                />
              </div>
              <div className=''>
                <p className='font-medium text-black'>{video?.user.first_name}</p>
                <p className='text-sm'>{calculateTimeAgo(video.createdAt as unknown as string)}</p>
              </div>
            </div>
            <div className='mt-2 text-sm'>{video.content}</div>
          </div>
          <div className=''>
            <button
              type='button'
              className='grid h-10 w-10 place-items-center rounded-full hover:bg-secondery'
              onClick={handleClickActionVideo}
            >
              <IonIcon className='text-2xl' name='ellipsis-horizontal' />
            </button>
            <div
              className='w-[245px]'
              uk-dropdown='pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click'
            >
              <nav>
                <button
                  className='flex w-full items-center gap-x-2 rounded-lg px-2.5 py-2 hover:bg-slate-100'
                  onClick={() => handleFavoriteVideo()}
                >
                  {favoriteVideo?.isFavorite ? (
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      className='size-5'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='m3 3 1.664 1.664M21 21l-1.5-1.5m-5.485-1.242L12 17.25 4.5 21V8.742m.164-4.078a2.15 2.15 0 0 1 1.743-1.342 48.507 48.507 0 0 1 11.186 0c1.1.128 1.907 1.077 1.907 2.185V19.5M4.664 4.664 19.5 19.5'
                      />
                    </svg>
                  ) : (
                    <IonIcon className='size-5' name='bookmark-outline' />
                  )}
                  <div className='flex flex-col items-start'>
                    <span className='text-sm font-medium text-black'>
                      {favoriteVideo?.isFavorite ? 'Bỏ lưu video' : 'Lưu video'}
                    </span>
                    <span className='text-[12px] font-normal text-[#65676B]'>
                      {favoriteVideo?.isFavorite ? 'Gõ bỏ phần video đã lưu' : 'Thêm vào phần Video đã lưu.'}
                    </span>
                  </div>
                </button>
                {/* <a href='#'>
                  <IonIcon className='text-xl' name='albums-outline' /> add to collections
                </a> */}
                {video.user_id !== profile?.user_id && (
                  <a href='#'>
                    <IonIcon className='text-xl' name='flag-outline' />
                    <div className='flex flex-col '>
                      <span className='text-sm font-medium text-black'>Báo cáo video</span>
                      <span className='text-[12px] font-normal text-[#65676B]'>Tôi lo ngại về video này.</span>
                    </div>
                  </a>
                )}

                {video.user_id === profile?.user_id && (
                  <React.Fragment>
                    <hr />
                    <a href='#' className='text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50'>
                      <IonIcon className='text-xl' name='trash-outline' /> Delete
                    </a>
                  </React.Fragment>
                )}
              </nav>
            </div>
          </div>
        </div>
        {/* <img src='src/assets/images/video/img-2.png' alt='' />
            <img src='' className='absolute !left-1/2 !top-1/2 !h-12 !w-12 -translate-x-1/2 -translate-y-1/2' alt='' /> */}
        <Video link={video.url} public_id={video.public_id} />
        <div className='card-list-body relative mt-2 flex items-center justify-between px-2'>
          <div className='flex items-center gap-x-4'>
            <button
              className={cn(
                'relative flex items-center gap-x-2 rounded-md px-3 py-[6px] hover:bg-secondery dark:text-white',
                {
                  'text-blue-500': likeVideo?.data?.isLike
                }
              )}
              onClick={() => {
                console.log('Click like')
                handlePatchLikeVideo()
              }}
            >
              <SvgIcon name='like' className='h-5 w-5' />
              <p className='text-xs font-medium'>Thích</p>
            </button>
            <Link
              to={ROUTE_PATH.WATCH + '/' + video.id}
              className='relative flex items-center gap-x-2 rounded-md px-3 py-[6px] hover:bg-secondery dark:text-white'
            >
              <SvgIcon name='comment' className='h-5 w-5' />
              <p className='text-xs font-medium'>Bình luận</p>
            </Link>
            <button className='relative flex items-center gap-x-2 rounded-md px-3 py-[6px] hover:bg-secondery dark:text-white'>
              <SvgIcon name='share' className='h-5 w-5' />
              <p className='text-xs font-medium'>Chia sẻ</p>
            </button>
          </div>
          <div className='flex items-center gap-x-4 px-2'>
            <div className='flex gap-2'>
              <div className='flex items-center justify-center rounded-full bg-blue-600 p-[6px]'>
                <SvgIcon name='like' className='h-3 w-3 text-white' />
              </div>
              <p className='text-sm'>{likeVideo?.data?.likeCount}</p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default HorizontalVideoCard