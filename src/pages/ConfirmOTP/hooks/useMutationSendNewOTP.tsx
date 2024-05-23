import { useMutation } from '@tanstack/react-query'
import emailApi from '~/apis/email.api'

function useMutationSendNewOTP() {
  return useMutation({
    mutationFn: (email: string) => emailApi.newAuthCodeEmail(email)
  })
}

export default useMutationSendNewOTP
