import { userDomain } from './../type/authType'
import mysql from 'mysql2'

export const getAllUsers = async (
  database: mysql.Connection
): Promise<userDomain[]> => {
  const sql = 'SELECT * FROM users'
  const runQuery = await database.promise().query(sql)
  const result = runQuery[0] as userDomain[]
  return result
}
