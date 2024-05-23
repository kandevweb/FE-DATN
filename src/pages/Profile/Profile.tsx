import useAuthStore from '~/store/auth.store'
import Modal from '~/components/Modal'
import { useState } from 'react'
import UpdateProfile from './components/UpdateProfile'
import Introduce from './components/Introduce'
import Navigation from './components/Navigation'
import UserInfo from './components/UserInfo'
import CreateStory from '~/components/CreateStory'
import FeedStory from './components/FeedStory'

function Profile() {
  const [showModal, setShowModal] = useState<boolean>(false)
  const { profile } = useAuthStore()

  return (
    <>
      <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
        <UpdateProfile onClose={() => setShowModal(false)} />
      </Modal>
      <div className='mx-auto max-w-[1065px] max-lg:-m-2.5'>
        <div className='dark:bg-dark2 bg-white shadow lg:-mt-10 lg:rounded-b-2xl'>
          {/* Cover */}
          <div className='relative h-48 w-full overflow-hidden lg:h-72'>
            <img src={profile?.Profile.cover_photo} alt='' className='inset-0 h-full w-full object-cover' />
            {/* overly */}
            <div className='absolute bottom-0 left-0 z-10 w-full bg-gradient-to-t from-black/60 pt-20' />
            <div className='absolute bottom-0 right-0 z-20 m-4'>
              <div className='flex items-center gap-3'>
                <button className='button backdrop-blur-small flex items-center gap-2 bg-white/20 text-white'>
                  Xóa
                </button>
                <button className='button backdrop-blur-small flex items-center gap-2 bg-black/10 text-white'>
                  Chỉnh sửa
                </button>
              </div>
            </div>
          </div>
          {/* User Info */}
          <UserInfo profile={profile} setShowModal={setShowModal} />
          {/* Navigations */}
          <Navigation />
        </div>
        <div className='mt-8 flex gap-10 max-lg:flex-col 2xl:gap-12' id='js-oversized'>
          {/* Feed Story */}
          <FeedStory />
          {/* Introduce */}
          <Introduce profile={profile} setShowModal={setShowModal} />
          {/* Create Storey */}
          <CreateStory />
        </div>
      </div>
    </>
  )
}

export default Profile
