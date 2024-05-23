import { useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useMutationConfirmEmail from './hooks/useMutationConfirmEmail'
import { toast } from 'react-toastify'
import { isAxiosError } from 'axios'
import useMutationSendNewOTP from './hooks/useMutationSendNewOTP'

function ConfirmOTP() {
  // Hooks
  const [error, setError] = useState<string | undefined>('')
  const { email } = useParams()
  const navigate = useNavigate()
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])
  // React Query
  const confirmEmailMutation = useMutationConfirmEmail()
  const sendNewOTPMutation = useMutationSendNewOTP()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value

    if (error !== '') {
      setError('')
    }

    if (value.length === 0 && index > 0) {
      inputRefs.current[index - 1]?.focus()
      return
    }

    if (value.length === 1 && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  // Xử lý xác thực OPT
  const handleConfirmOTP = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const otpValues = inputRefs.current.map((input) => input?.value || '').join('')
    if (otpValues) {
      confirmEmailMutation.mutate(
        { email: email as string, code: otpValues },
        {
          onSuccess: () => {
            navigate('/')
            toast.success('Xác thực email thành công')
          },
          onError: (error) => {
            if (isAxiosError<ErrorResponse>(error)) {
              setError(error.response?.data.message)
            }
          }
        }
      )
    } else {
      setError('Vui lòng nhập mã xác thực')
    }
  }

  // Gửi mã xác thực mới
  const handleSendNewOTP = () => {
    sendNewOTPMutation.mutate(email as string, {
      onSuccess: () => {
        toast.success('Gửi lại mã OTP mới thành công!')
      },
      onError: (error) => {
        toast.error(error.message)
      }
    })
  }

  return (
    <div className='flex min-h-screen items-center'>
      <div className='mx-auto max-w-md rounded-xl bg-white px-4 py-10 text-center shadow sm:px-8'>
        <header className='mb-8'>
          <h1 className='mb-2 text-2xl font-bold'>Xác thực email của bạn</h1>
          <p className='text-[15px] text-slate-500'>
            Nhập mã xác minh gồm 6 chữ số đã được gửi đến địa chỉ email của bạn. Mã chỉ tồn tại 2 phút
          </p>
        </header>
        <form onSubmit={handleConfirmOTP} id='otp-form'>
          <div className='flex items-center justify-center gap-3'>
            {Array(6)
              .fill(0)
              .map((_, index) => (
                <input
                  key={index}
                  type='text'
                  className='h-14 w-14 appearance-none rounded border border-transparent bg-slate-100 p-4 text-center text-2xl font-extrabold text-slate-900 outline-none hover:border-slate-200 focus:border-indigo-400 focus:bg-white focus:ring-2 focus:ring-indigo-100'
                  maxLength={1}
                  ref={(el) => (inputRefs.current[index] = el)}
                  onChange={(e) => handleChange(e, index)}
                />
              ))}
          </div>
          <span className='mt-2 block text-sm text-red-500'>{error}</span>
          <div className='mx-auto mt-4 max-w-[260px]'>
            <button
              type='submit'
              className='inline-flex w-full justify-center whitespace-nowrap rounded-lg bg-indigo-500 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 transition-colors duration-150 hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300'
            >
              Xác thực email
            </button>
          </div>
        </form>
        <div className='mt-4 text-sm text-slate-500'>
          Không nhận được mã OTP {''}
          <a onClick={handleSendNewOTP} className='font-medium text-indigo-500 hover:text-indigo-600' href='#0'>
            Gửi lại mã!
          </a>
        </div>
      </div>
    </div>
  )
}

export default ConfirmOTP
