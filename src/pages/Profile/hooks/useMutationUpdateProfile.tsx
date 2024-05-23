import { useMutation } from '@tanstack/react-query'
import userApi from '~/apis/user.api'

function useMutationUpdateProfile() {
  return useMutation({
    mutationFn: (profile: UpdateProfile | FormData) => userApi.updateProfile(profile)
  })
}

export default useMutationUpdateProfile
