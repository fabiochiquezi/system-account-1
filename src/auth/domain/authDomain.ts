import { formAuthData } from './../type/authType'
import { makeEmail } from './../../share/valueObjects/Email'
import { makePassword } from './../../share/valueObjects/Password'

type authDomainType = {
    email: string,
    password: string
}

export const authDomain = (data: formAuthData): authDomainType => ({
  email: makeEmail(data.email),
  password: makePassword(data.password)
})
