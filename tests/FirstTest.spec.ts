import {jestIsOk} from '../src/helpers/first'

test('it should be ok', () => {
    expect(jestIsOk).toEqual('Yeahh')
})
