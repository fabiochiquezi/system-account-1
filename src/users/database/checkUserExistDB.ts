import mysql from 'mysql2'

export const checkUserExistDB = async (
  email: string,
  database: mysql.Connection
): Promise<boolean> => {
  const sql = `SELECT email FROM users WHERE email = "${email}"`
  const runQuery = await database.promise().query(sql)
  const result = runQuery[0][0]

  if (result) return true
  return false
}
