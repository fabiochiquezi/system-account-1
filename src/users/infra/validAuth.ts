import { AppError } from './../../../helpers/error'
import { formDataType } from './../type/authType'

export const validFormData = (data: formDataType): formDataType => {
  const error = []
  const { email, password } = data
  if (!email) error.push('MissingFormData: email')
  if (!password) error.push('MissingFormData: password')

  if (!email || !password) throw new AppError('warning', error.toString(), 400)
  return data
}
