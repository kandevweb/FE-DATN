import http from '~/utils/http'

class EmailApi {
  verifyEmail(email: string, code: number | string) {
    return http.post<{ message: string }>(`verify/${email}/${code}`)
  }

  newAuthCodeEmail(email: string) {
    return http.post<SuccessResponse<{ to: string }>>(`new_auth_code_email/${email}`)
  }
}

export default new EmailApi()
