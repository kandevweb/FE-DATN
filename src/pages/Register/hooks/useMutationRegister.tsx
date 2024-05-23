import { useMutation } from '@tanstack/react-query'
import authApi from '~/apis/auth.api'
import { RegisterForm } from '~/utils/rules'

function useMutationRegister() {
  return useMutation({
    mutationFn: (data: RegisterForm) => authApi.register(data)
  })
}

export default useMutationRegister
