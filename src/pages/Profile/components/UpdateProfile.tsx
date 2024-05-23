import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import useQueryProfile from '~/hooks/queries/useQueryProfile'
import useMutationUpdateProfile from '../hooks/useMutationUpdateProfile'
import { toast } from 'react-toastify'
import useAuthStore from '~/store/auth.store'
import { setProfileLocalStorage } from '~/utils/auth'
import { useQueryClient } from '@tanstack/react-query'
import { formatDateString } from '~/utils/utils'

interface Props {
  onClose: () => void
}

function UpdateProfile({ onClose }: Props) {
  // Hooks
  const { setProfile } = useAuthStore()
  const { data } = useQueryProfile()
  // React Hook Form
  const { register, handleSubmit, setValue } = useForm<UpdateProfile>()
  // React Query
  const queryClient = useQueryClient()
  const updateProfileMutation = useMutationUpdateProfile()
  // Variable
  const profile = data?.data.data.user.Profile

  useEffect(() => {
    if (profile) {
      const keys = Object.keys(profile).filter((key) => key !== 'profile_id' && key !== 'user_id') as [
        keyof UpdateProfile
      ]
      keys.forEach((key) => {
        if (key === 'date_of_birth' && profile[key] !== null) {
          setValue('date_of_birth', formatDateString(profile[key]))
        } else {
          setValue(key, profile[key])
        }
      })
    }
  }, [profile, setValue])

  const handleUpdateProfile = handleSubmit((data) => {
    const filterDataProfile = Object.entries(data).reduce<{ [key: string]: string | number | null }>(
      (arr, [key, value]) => {
        if (value !== null && value !== undefined) {
          arr[key] = value
        }
        return arr
      },
      {}
    )

    updateProfileMutation.mutate(filterDataProfile, {
      onSuccess: (data) => {
        const userProfile = data.data.data.user

        setProfile(userProfile)
        setProfileLocalStorage(userProfile)
        toast.success('Cập nhật hồ sơ thành công!')

        queryClient.invalidateQueries({ queryKey: ['profile'] })
        onClose()
      },
      onError: (error) => {
        toast.error(error.message)
      }
    })
  })

  return (
    <>
      <div className='mb-0 border-b py-4 text-center dark:border-slate-700'>
        <h2 className='text-lg font-medium text-black'> Cập nhật chi tiết </h2>
      </div>
      <form onSubmit={handleUpdateProfile} className='space-y-6 py-8'>
        <div className='items-center gap-10 md:flex'>
          <label className='text-right md:w-32'> Biệt danh </label>
          <div className='flex-1 max-md:mt-4'>
            <input type='text' placeholder='Chưa cập nhật ...' className='lg:w-5/6' {...register('alias')} />
          </div>
        </div>
        <div className='items-center gap-10 md:flex'>
          <label className='text-right md:w-32'> Số điện thoại </label>
          <div className='flex-1 max-md:mt-4'>
            <input type='text' placeholder='Chưa cập nhật ...' className='lg:w-5/6' {...register('phone_number')} />
          </div>
        </div>
        <div className='items-center gap-10 md:flex'>
          <label className='text-right md:w-32'> Ngày sinh </label>

          <div className='flex-1 max-md:mt-4'>
            <input type='date' className='w-5/6' {...register('date_of_birth')} />
          </div>
        </div>
        <div className='items-start gap-10 md:flex'>
          <label className='text-right md:w-32'> Mô tả </label>
          <div className='flex-1 max-md:mt-4'>
            <textarea className='w-5/6' rows={5} placeholder={'Chưa cập nhật ...'} {...register('biography')} />
          </div>
        </div>
        <div className='items-center gap-10 md:flex'>
          <label className='text-right md:w-32'> Học vấn </label>
          <div className='flex-1 max-md:mt-4'>
            <input type='text' placeholder='Chưa cập nhật ...' className='lg:w-5/6' {...register('education')} />
          </div>
        </div>
        <div className='items-center gap-10 md:flex'>
          <label className='text-right md:w-32'> Quê quán </label>
          <div className='flex-1 max-md:mt-4'>
            <input type='text' placeholder='Chưa cập nhật ...' className='lg:w-5/6' {...register('home_town')} />
          </div>
        </div>
        <div className='items-center gap-10 md:flex'>
          <label className='text-right md:w-32'> Công việc </label>
          <div className='flex-1 max-md:mt-4'>
            <input type='text' placeholder='Chưa cập nhật ...' className='lg:w-5/6' {...register('job')} />
          </div>
        </div>
        <div className='items-center gap-10 md:flex'>
          <label className='text-right md:w-32'> Giới tính </label>
          <div className='flex-1 max-md:mt-4'>
            <select className='w-full !rounded-md !border-0 lg:w-2/4'>
              <option value={0}>Nam</option>
              <option value={1}>Nữ</option>
              <option value={3}>Khác</option>
            </select>
          </div>
        </div>
        <div className='items-center gap-10 md:flex'>
          <label className='text-right md:w-32'> Tình trạng </label>
          <div className='flex-1 max-md:mt-4'>
            <select className='w-full !rounded-md !border-0 lg:w-2/4' {...register('relationship_status')}>
              <option value={1}>Độc thân</option>
              <option value={2}>Đang hẹn hò</option>
              <option value={3}>Đang tìm hiểu</option>
              <option value={4}>Phức tạp</option>
              <option value={5}>Đã kết hôn</option>
              <option value={6}>Đã ly hôn</option>
              <option value={7}>Không</option>
            </select>
          </div>
        </div>
        <div className='mt-16 flex items-center gap-4 lg:pl-[10.5rem]'>
          <button onClick={onClose} type='button' className='button bg-secondery py-2 text-sm max-md:flex-1 lg:px-6'>
            Quay lại
          </button>
          <button type='submit' className='button bg-primary py-2 text-white max-md:flex-1 lg:px-10'>
            Cập nhật
          </button>
        </div>
      </form>
    </>
  )
}

export default UpdateProfile
