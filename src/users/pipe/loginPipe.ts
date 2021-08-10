import { pipeAwait } from './../../../helpers/functional'
import { validFormData } from './../infra/validAuth'
import { formDataType } from './../type/authType'

export const createUserPipe = (data: formDataType) => pipeAwait(
  validFormData
)(data)
