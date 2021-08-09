// import { database } from './../../../../config/database';
import { checkUserExist } from "../checkUserExistDB"
import mysql from 'mysql2'


describe('test checkUserExist', () => {
    const email = 'test@test.com'

    beforeAll(async () => {

        const database = await mysql.createConnection({
              host: 'mysql',
              user: 'root',
              password: 'ok',
              port: 3306,
              database: 'system_account_1'
            })

        await database.connect((err) => {
            console.log('aaaaaaaaaaaaaa')

            if (err) throw err
            console.log('MySql connected...')
        })
    })

    // beforeEach(() => {

    // });

    // afterEach(() => {
    //     database.destroy()
    // });

    // it('work', () => {
    //     const query = `SELECT email FROM users WHERE email = ${email}`

    //     database.query(query, (err, result, field) => {
    //       console.log(err)
    //       console.log(result)
    //     })
    // })

    it('should exist', () => {
        expect(checkUserExist).toBeDefined()
    })

    // it('should return true', () => {
    //     const db = { query: jest.fn(() => true) }
    //     const teste = checkUserExist(email, db)
    //     expect(db.query).toBeCalledTimes(1)
    //     expect(teste).toBeFalsy()
    //     // checkUserExist(email, database)
    // })


})
