import {
  es5,
  es6
} from '../../src/features/symbols'
import should from 'should'

export default function() {
  it('should show that symbols do not exist in ES5', () => {
    var o = es5()
    o['key'].should.eql('value')
  })

  it.skip('should show symbols syntax and behavior in ES6', () => {
    const o = es6()
    const s = Symbol('key')
    should(o['key']).eql(undefined)
    should(o[s]).eql(undefined)
  })
}
