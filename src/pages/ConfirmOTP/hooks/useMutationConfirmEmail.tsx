import { useMutation } from '@tanstack/react-query'
import emailApi from '~/apis/email.api'

function useMutationConfirmEmail() {
  return useMutation({
    mutationFn: (data: { email: string; code: number | string }) => emailApi.verifyEmail(data.email, data.code)
  })
}

export default useMutationConfirmEmail
