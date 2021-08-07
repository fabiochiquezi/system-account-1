import { formAuthData } from './../type/authType'

export const validAuth = (data: formAuthData): formAuthData => {
  const { email, password } = data
  if (!email || password) throw new Error('Dados enviados inválidos')
  return data
}
