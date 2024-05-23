import { AUTH } from '~/constants/auth.constant'
import http from '~/utils/http'
import { LoginForm, RegisterForm } from '~/utils/rules'

class authApi {
  login(data: LoginForm) {
    return http.post<AuthResponse>(AUTH.LOGIN, data, { withCredentials: true })
  }

  register(data: RegisterForm) {
    return http.post<RegisterResponse>(AUTH.REGISTER, data)
  }

  logout() {
    return http.post<{ message: string }>(AUTH.LOGOUT, {}, { withCredentials: true })
  }
}

export default new authApi()
