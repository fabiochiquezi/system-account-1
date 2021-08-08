import { pipeAwait } from './../../../helpers/functional'
import { validAuth } from './../infra/validAuth'
import { formAuthData } from './../type/authType'

export const loginPipe = (data: formAuthData) => pipeAwait(
  validAuth
)(data)
