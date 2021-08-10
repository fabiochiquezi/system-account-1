import { makeEmail } from './../../share/valueObjects/Email'
import { authDomainType, formDataType } from './../type/authType'
import { makePassword } from './../../share/valueObjects/Password'

export const makeAuthDomain = (data: formDataType): authDomainType => ({
  email: makeEmail(data.email),
  password: makePassword(data.password)
})
