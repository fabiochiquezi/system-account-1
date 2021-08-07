import { validAuth } from './../infra/validAuth'
import { formAuthData } from './../type/authType'
import { pipeAwait } from './../../helpers/functional'

export const loginPipe = (data: formAuthData) => pipeAwait(
  validAuth
)(data)
