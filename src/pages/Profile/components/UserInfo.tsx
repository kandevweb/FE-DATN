import { IonIcon } from '@ionic/react'
import { useRef } from 'react'
import useMutationUpdateProfile from '../hooks/useMutationUpdateProfile'
import { toast } from 'react-toastify'
import { setProfileLocalStorage } from '~/utils/auth'
import useAuthStore from '~/store/auth.store'

interface Props {
  profile: UserProfile | null
  setShowModal: (value: React.SetStateAction<boolean>) => void
}

function UserInfo({ profile, setShowModal }: Props) {
  const { setProfile } = useAuthStore()
  const inputFileRef = useRef<HTMLInputElement | null>(null)
  // React Query
  const updateProfileMutation = useMutationUpdateProfile()

  const handleUpdateAvatar = () => {
    if (inputFileRef.current && inputFileRef.current.files && inputFileRef.current.files[0]) {
      const file = inputFileRef.current.files[0]

      const formData = new FormData()
      formData.append('file', file)

      updateProfileMutation.mutate(formData, {
        onSuccess: (data) => {
          const userProfile = data.data.data.user
          setProfile(userProfile)
          setProfileLocalStorage(userProfile)
          toast.success('Cập nhật ảnh đại diện thành công!')
        },
        onError: (error) => {
          toast.error(error.message)
        }
      })
    }
  }

  return (
    <div className='p-3'>
      <div className='-mt-28 flex flex-col justify-center md:items-center lg:-mt-48'>
        <div className='relative z-10 mb-4 h-28 w-28 lg:h-48 lg:w-48'>
          <div className='relative h-28 w-28 shrink-0 overflow-hidden rounded-full border-gray-100 shadow md:border-[6px] lg:h-48 lg:w-48 dark:border-slate-900'>
            <img src={profile?.Profile.profile_picture} alt='' className='inset-0 h-full w-full object-cover' />
          </div>
          <button
            onClick={() => inputFileRef.current?.click()}
            type='button'
            className='absolute -bottom-3 left-1/2 hidden -translate-x-1/2 rounded-full bg-white p-1.5 shadow sm:flex'
          >
            <IonIcon icon='camera' className='md hydrated text-2xl' role='img' aria-label='camera' />
            <input type='file' accept='image/' hidden ref={inputFileRef} onChange={handleUpdateAvatar} />
          </button>
        </div>
        <h3 className='text-base font-bold text-black md:text-3xl dark:text-white'>
          {profile?.last_name} {profile?.first_name} {profile?.Profile.alias ? `(${profile?.Profile.alias})` : ''}
        </h3>
        <p className='mt-2 text-center text-gray-500 dark:text-white/80'>
          {profile?.Profile.biography}
          <a
            className='ml-4 block cursor-pointer text-center text-base text-blue-500'
            onClick={() => setShowModal(true)}
          >
            {profile?.Profile.biography ? 'Chỉnh sửa' : 'Thêm tiểu sử'}
          </a>
        </p>
        <p className='mt-2 hidden max-w-xl text-center text-sm font-light md:font-normal'>
          I love beauty and emotion. 🥰 I’m passionate about photography and learning. 📚 I explore genres and styles.
          🌈 I think photography is storytelling. 😊
        </p>
      </div>
    </div>
  )
}

export default UserInfo
