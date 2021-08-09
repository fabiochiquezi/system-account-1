import { makeEmail } from './../../share/valueObjects/Email'
import { makePassword } from './../../share/valueObjects/Password'
import { authDomainType, formAuthData } from './../type/authType'

export const makeAuthDomain = (data: formAuthData): authDomainType => ({
  email: makeEmail(data.email),
  password: makePassword(data.password)
})
