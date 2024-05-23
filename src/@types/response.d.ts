interface SuccessResponse<Data> {
  message: string
  data: Data
}

interface ErrorResponse<Data = undefined> {
  message: string
  status: number
  errors?: Data
}
