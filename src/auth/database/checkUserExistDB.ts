export const checkUserExist = (email: string, database: any): boolean => {
  const query = `SELECT email FROM users WHERE email = ${email}`

  database.query(query, (err, result, field) => {
    console.log(err)
    console.log(result)
  })

  return false
}
