import mysql from 'mysql2'
import { authDomainType } from '../type/authType'

export const createNewUser = (user: authDomainType, database: mysql.Connection) => {
  const query = `INSERT INTO users (email, password) values(${user.email}, ${user.password})`

  database.query(query, (err, result, field) => {
    console.log(err, result, field)
  })
}
