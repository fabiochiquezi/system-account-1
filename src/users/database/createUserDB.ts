import mysql from 'mysql2'
import { authDomainType } from '../type/authType'
import { ResultSetHeaderType } from './../../../helpers/genericTypes'

export const createNewUserDB = async (
  user: authDomainType,
  database: mysql.Connection
): Promise<number> => {
  const sql = `INSERT INTO users (email, password, category_user) values(
      "${user.email}",
      "${user.password}",
      ${user.categoryUser})`

  const runQuery = await database.promise().query(sql)
  const idInsert = (runQuery[0] as ResultSetHeaderType).insertId
  return idInsert
}
