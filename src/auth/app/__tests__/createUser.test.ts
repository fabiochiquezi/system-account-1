import { createUserApp } from '../createUser';

describe('test createUser', () => {
    it('sould exist', () => {
        expect(createUserApp).toBeDefined()
    })

    // it.only('must be ok', () => {
    //     const email = 'test@test.com'
    //     const password = 'test12345'
        // const database = jest.fn(() => true)
        // @ts-ignore
        // createUserApp({email, password}, database)
    // })
})
