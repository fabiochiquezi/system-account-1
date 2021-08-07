import { authDomain } from './../authDomain';

describe('test "authDomain"', () => {
    it('should exist', () => {
        expect(authDomain).toBeDefined()
    })

    it('shoud be success', () => {
        const email = 'test@test.com'
        const password = 'test12345'

        const auth = authDomain({email, password})
        expect(auth).toEqual({email, password})
    })
})
