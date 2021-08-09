import { makeAuthDomain } from './../authDomain';

describe('test "authDomain"', () => {
    it('should exist', () => {
        expect(makeAuthDomain).toBeDefined()
    })

    it('shoud be success', () => {
        const email = 'test@test.com'
        const password = 'test12345'

        const auth = makeAuthDomain({email, password})
        expect(auth).toEqual({email, password})
    })
})
