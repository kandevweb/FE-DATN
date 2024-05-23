import { yupResolver } from '@hookform/resolvers/yup'
import { IonIcon } from '@ionic/react'
import { useForm } from 'react-hook-form'
import { LoginForm, loginSchema } from '~/utils/rules'
import useMutationLogin from './hooks/useMutationLogin'
import { isAxiosError } from '~/utils/utils'
import { toast } from 'react-toastify'
import useAuthStore from '~/store/auth.store'
import { Link } from 'react-router-dom'

function Login() {
  const { setIsAuthenticated, setProfile } = useAuthStore()
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError
  } = useForm<LoginForm>({
    resolver: yupResolver(loginSchema)
  })

  const loginMutation = useMutationLogin()

  const handleLogin = handleSubmit((data) => {
    loginMutation.mutate(data, {
      onSuccess: (data) => {
        const userProfile = data.data.data.user
        setProfile(userProfile)
        setIsAuthenticated(true)
        toast.success('Đăng nhập thành công!')
      },
      onError: (error) => {
        if (isAxiosError<ErrorResponse<LoginForm>>(error)) {
          if (error.response) {
            const formError = error.response.data.errors

            if (formError) {
              Object.keys(formError).forEach((key) => {
                setError(key as keyof LoginForm, {
                  message: formError[key as keyof LoginForm]
                })
              })
            }
          }
        }
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
            <img
              className='w-12'
              src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
              alt='Socialite html template'
            />
          </div>
          {/* title */}
          <div>
            <h2 className='mb-1.5 text-2xl font-semibold'> Đăng nhập tài khoản của bạn </h2>
            <p className='text-sm font-normal text-gray-700'>
              Nếu bạn chưa có tài khoản.
              <Link to={'/register'} className='text-blue-700'>
                Đăng ký tại đây!
              </Link>
            </p>
          </div>
          {/* form */}
          <form
            onSubmit={handleLogin}
            className='space-y-7 text-sm font-medium text-black dark:text-white'
            uk-scrollspy='target: > *; cls: uk-animation-scale-up; delay: 100 ;repeat: true'
          >
            {/* email */}
            <div>
              <label htmlFor='email' className=''>
                Địa chỉ email
              </label>
              <div className='mt-2.5'>
                <input
                  id='email'
                  type='text'
                  placeholder='kanisdev@gmail.com'
                  className='!w-full !rounded-lg !border-slate-200 !bg-transparent !shadow-sm dark:!border-slate-800 dark:!bg-white/5'
                  {...register('email')}
                />
              </div>
              <span className='mt-2 block text-red-500'>{errors.email?.message}</span>
            </div>
            {/* password */}
            <div>
              <label htmlFor='email' className=''>
                Mật khẩu
              </label>
              <div className='mt-2.5'>
                <input
                  id='password'
                  type='password'
                  placeholder='********'
                  className='!w-full !rounded-lg !border-slate-200 !bg-transparent !shadow-sm dark:!border-slate-800 dark:!bg-white/5'
                  {...register('password')}
                />
              </div>
              <span className='mt-2 block text-red-500'>{errors.password?.message}</span>
            </div>
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-2.5'>
                <input id='rememberme' name='rememberme' type='checkbox' />
                <label htmlFor='rememberme' className='font-normal'>
                  Nhớ mật khẩu
                </label>
              </div>
              <a href='#' className='text-blue-700'>
                Quên mật khẩu?
              </a>
            </div>
            {/* submit button */}
            <div>
              <button type='submit' className='button w-full bg-primary py-[10px] text-sm text-white'>
                Đăng nhập
              </button>
            </div>
            <div className='flex items-center gap-6 text-center'>
              <hr className='flex-1 border-slate-200 dark:border-slate-800' />
              Hoặc đăng nhập với
              <hr className='flex-1 border-slate-200 dark:border-slate-800' />
            </div>
            {/* social login */}
            <div
              className='flex gap-2'
              uk-scrollspy='target: > *; cls: uk-animation-scale-up; delay: 400 ;repeat: true'
            >
              <a href='#' className='button flex flex-1 items-center gap-2 bg-primary text-sm text-white'>
                <IonIcon icon='logo-facebook' className='text-lg' />
                Facebook
              </a>
              <a href='#' className='button flex flex-1 items-center gap-2 bg-sky-600 text-sm text-white'>
                <IonIcon icon='logo-twitter' className='text-lg' />
                Twitter
              </a>
              <a href='#' className='button flex flex-1 items-center gap-2 bg-black text-sm text-white'>
                <IonIcon icon='logo-github' className='text-lg' />
                Github
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
                src='https://images.unsplash.com/photo-1529539795054-3c162aab037a?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
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
                    Cụm từ này giản dị và vui tươi hơn. Nó gợi ý rằng bạn đang cập nhật thông tin cho bạn bè của mình
                  </p>
                </div>
              </div>
              <div className='absolute bottom-0 left-0 h-96 w-full bg-gradient-to-t from-black' />
            </li>
            <li className='w-full'>
              <img
                src='https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1772&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
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
                    Cụm từ này giản dị và vui tươi hơn. Nó gợi ý rằng bạn đang cập nhật thông tin cho bạn bè của mình
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

export default Login
