import { validFormData } from './../validAuth'

describe('test "validAuth"', () => {
    it('should exist', () => {
        expect(validFormData).toBeDefined()
    })

    // it('email must be mandatory', () => {
    //     const email = ''
    //     const password = 'test123'
    //     expect(validAuth({email, password})).toThrow()
    // })
})
