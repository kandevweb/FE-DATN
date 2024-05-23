/* eslint-disable import/no-named-as-default-member */
import axios, { AxiosError } from 'axios'
import { format, parseISO } from 'date-fns'

export function isAxiosError<T>(error: unknown): error is AxiosError<T> {
  return axios.isAxiosError(error)
}

export function formatDateString(isoDateString: string) {
  const parsedDate = parseISO(isoDateString)
  const formattedDate = format(parsedDate, 'yyyy-MM-dd')
  return formattedDate
}
