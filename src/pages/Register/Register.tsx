import { yupResolver } from '@hookform/resolvers/yup'
import { IonIcon } from '@ionic/react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { RegisterForm, registerSchema } from '~/utils/rules'
import useMutationRegister from './hooks/useMutationRegister'
import { toast } from 'react-toastify'

function Register() {
  const navigate = useNavigate()
  const registerMutation = useMutationRegister()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<RegisterForm>({
    resolver: yupResolver(registerSchema)
  })

  const handleRegister = handleSubmit((data) => {
    registerMutation.mutate(data, {
      onSuccess: () => {
        toast.warn('Xác nhận email của bạn!')
        navigate(`/confirm_otp/${data.email}`)
      },
      onError: (error) => {
        toast.error(error.message)
      }
    })
  })

  return (
    <div className='sm:flex'>
      <div className='relative z-10 flex min-h-screen w-full items-center bg-white p-10 pt-10 shadow-xl md:w-96 lg:w-[580px] dark:bg-slate-900'>
        <div
          className='mx-auto w-full space-y-10 lg:max-w-sm'
          uk-scrollspy='target: > *; cls: uk-animation-scale-up; delay: 100 ;repeat: true'
        >
          {/* logo image*/}
          <a href='#'>
            <img src='assets/images/logo.png' className='absolute left-10 top-10 w-28 dark:hidden' alt='' />
          </a>
          <a href='#'>
            <img
              src='assets/images/logo-light.png'
              className='absolute left-10 top-10 hidden w-28 dark:!block'
              alt=''
            />
          </a>
          {/* logo icon optional */}
          <div className='hidden'>
            <img className='w-12' src='assets/images/logo-icon.png' alt='Socialite html template' />
          </div>
          {/* title */}
          <div>
            <h2 className='mb-1.5 text-2xl font-semibold'> Đăng ký tài khoản ngay </h2>
            <p className='text-sm font-normal text-gray-700'>
              Nếu bạn đã có tài khoản,
              <Link to={'/login'} className='text-blue-700'>
                Đăng nhập tại đây!
              </Link>
            </p>
          </div>
          {/* form */}
          <form
            onSubmit={handleRegister}
            className='space-y-7 text-sm font-medium text-black dark:text-white'
            uk-scrollspy='target: > *; cls: uk-animation-scale-up; delay: 100 ;repeat: true'
          >
            <div className='grid grid-cols-2 gap-4 gap-y-7'>
              <div>
                <label className=''>Họ</label>
                <div className='mt-2.5'>
                  <input
                    type='text'
                    placeholder='Nguyễn'
                    className='!w-full !rounded-lg !border-slate-200 !bg-transparent !shadow-sm dark:!border-slate-800 dark:!bg-white/5'
                    {...register('last_name')}
                  />
                </div>
                <span className='mt-2 block text-red-500'>{errors.last_name?.message}</span>
              </div>
              <div>
                <label className=''>Tên</label>
                <div className='mt-2.5'>
                  <input
                    type='text'
                    placeholder='An'
                    className='!w-full !rounded-lg !border-slate-200 !bg-transparent !shadow-sm dark:!border-slate-800 dark:!bg-white/5'
                    {...register('first_name')}
                  />
                </div>
                <span className='mt-2 block text-red-500'>{errors.first_name?.message}</span>
              </div>
              <div className='col-span-2'>
                <label className=''>Địa chỉ email</label>
                <div className='mt-2.5'>
                  <input
                    type='text'
                    placeholder='kanisdev@gmail.com'
                    className='!w-full !rounded-lg !border-slate-200 !bg-transparent !shadow-sm dark:!border-slate-800 dark:!bg-white/5'
                    {...register('email')}
                  />
                  <span className='mt-2 block text-red-500'>{errors.email?.message}</span>
                </div>
              </div>
              <div>
                <label className=''>Mật khẩu</label>
                <div className='mt-2.5'>
                  <input
                    type='password'
                    placeholder='*****'
                    className='!w-full !rounded-lg !border-slate-200 !bg-transparent !shadow-sm dark:!border-slate-800 dark:!bg-white/5'
                    {...register('password')}
                  />
                </div>
                <span className='mt-2 block text-red-500'>{errors.password?.message}</span>
              </div>
              <div>
                <label className=''>Xác nhận mật khẩu</label>
                <div className='mt-2.5'>
                  <input
                    type='password'
                    placeholder='******'
                    className='!w-full !rounded-lg !border-slate-200 !bg-transparent !shadow-sm dark:!border-slate-800 dark:!bg-white/5'
                    {...register('confirm_password')}
                  />
                </div>
                <span className='mt-2 block text-red-500'>{errors.confirm_password?.message}</span>
              </div>
              <div className='col-span-2'>
                <div>
                  <label className='mr-4 inline-block'>Giới tính</label>
                  <input type='radio' value={0} className='mr-1' id='male' {...register('gender')} />{' '}
                  <label htmlFor='male' className='cursor-pointer'>
                    Nam
                  </label>
                  <input type='radio' value={1} className='ml-6 mr-2' id='female' {...register('gender')} />{' '}
                  <label htmlFor='female' className='cursor-pointer'>
                    Nữ
                  </label>
                </div>
                <span className='mt-2 block text-red-500'>{errors.gender?.message}</span>
              </div>
              <div className='col-span-2'>
                <label className='inline-flex items-center' id='rememberme'>
                  <input type='checkbox' id='accept-terms' className='!rounded-md accent-red-800' />
                  <span className='ml-2'>
                    Bạn đồng ý với chúng tôi {''}
                    <a href='#' className='text-blue-700 hover:underline'>
                      điều khoản sử dụng
                    </a>
                  </span>
                </label>
              </div>
              {/* submit button */}
              <div className='col-span-2'>
                <button type='submit' className='button w-full bg-primary py-2 text-sm text-white'>
                  Đăng ký
                </button>
              </div>
            </div>
            <div className='flex items-center gap-6 text-center'>
              <hr className='flex-1 border-slate-200 dark:border-slate-800' />
              Hoặc tiếp tục với
              <hr className='flex-1 border-slate-200 dark:border-slate-800' />
            </div>
            {/* social login */}
            <div
              className='flex gap-2'
              uk-scrollspy='target: > *; cls: uk-animation-scale-up; delay: 400 ;repeat: true'
            >
              <a href='#' className='button flex flex-1 items-center gap-2 bg-primary text-sm text-white'>
                <IonIcon icon='logo-facebook' className='text-lg' /> facebook
              </a>
              <a href='#' className='button flex flex-1 items-center gap-2 bg-sky-600 text-sm text-white'>
                <IonIcon icon='logo-twitter' className='text-lg' /> twitter
              </a>
              <a href='#' className='button flex flex-1 items-center gap-2 bg-black text-sm text-white'>
                <IonIcon icon='logo-github' className='text-lg' /> github
              </a>
            </div>
          </form>
        </div>
      </div>
      {/* image slider */}
      <div className='relative flex-1 bg-primary max-md:hidden'>
        <div className='relative h-full w-full' tabIndex={-1} uk-slideshow='animation: slide; autoplay: true'>
          <ul className='uk-slideshow-items h-full w-full'>
            <li className='w-full'>
              <img
                src='https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                alt=''
                className='uk-animation-kenburns uk-animation-reverse uk-transform-origin-center-left h-full w-full object-cover'
              />
              <div className='uk-tr ansition-slide-bottom-small absolute bottom-0 z-10 w-full'>
                <div
                  className='relative z-30 mx-auto w-full max-w-xl px-5 pb-32'
                  uk-scrollspy='target: > *; cls: uk-animation-scale-up; delay: 100 ;repeat: true'
                >
                  <h4 className='mt-7 text-2xl font-semibold !text-white' uk-slideshow-parallax='y: 600,0,0'>
                    Kết nối với bạn bè
                  </h4>
                  <p className='mt-7 text-lg leading-8 !text-white' uk-slideshow-parallax='y: 800,0,0;'>
                    Cụm từ này giản dị và vui tươi hơn. Nó gợi ý rằng bạn đang cập nhật cho bạn bè về những gì đang xảy
                    ra trong cuộc sống của bạn.
                  </p>
                </div>
              </div>
              <div className='absolute bottom-0 left-0 h-96 w-full bg-gradient-to-t from-black' />
            </li>
            <li className='w-full'>
              <img
                src='https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                alt=''
                className='uk-animation-kenburns uk-animation-reverse uk-transform-origin-center-left h-full w-full object-cover'
              />
              <div className='uk-tr ansition-slide-bottom-small absolute bottom-0 z-10 w-full'>
                <div
                  className='relative z-30 mx-auto w-full max-w-xl px-5 pb-32'
                  uk-scrollspy='target: > *; cls: uk-animation-scale-up; delay: 100 ;repeat: true'
                >
                  <h4 className='mt-7 text-2xl font-semibold !text-white' uk-slideshow-parallax='y: 800,0,0'>
                    Kết nối với bạn bè
                  </h4>
                  <p className='mt-7 text-lg leading-8 !text-white' uk-slideshow-parallax='y: 800,0,0;'>
                    Cụm từ này giản dị và vui tươi hơn. Nó gợi ý rằng bạn đang cập nhật cho bạn bè về những gì đang xảy
                    ra trong cuộc sống của bạn.
                  </p>
                </div>
              </div>
              <div className='absolute bottom-0 left-0 h-96 w-full bg-gradient-to-t from-black' />
            </li>
          </ul>
          {/* slide nav */}
          <div className='flex justify-center'>
            <ul className='uk-dotnav uk-slideshow-nav absolute  bottom-8 inline-flex flex-wrap justify-center gap-1.5'></ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
