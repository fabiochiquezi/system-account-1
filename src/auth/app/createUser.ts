import { checkUserExist } from '../database/checkUserExistDB'
import { AppError } from './../../../helpers/error'
import { authDomainType } from './../type/authType'
import bcrypt from 'bcrypt'
import mysql from 'mysql2'

export const createUserApp = async (
  data: authDomainType, database: mysql.Connection
) => {
  const userExist = await checkUserExist(data.email, database)
  if (userExist) throw new AppError('normal', 'usuário já existe', 400)

  const hashPass = await bcrypt.hash(data.password, 10)
  data.password = hashPass
//   createNewUser(data, database)
}
