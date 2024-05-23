type AuthResponse = SuccessResponse<{
  user: UserProfile
  access_token: string
}>

type RegisterResponse = SuccessResponse<{
  to: string
}>
