import test from 'ava'
import { isPalindrome } from '../../src/algorithms/isPalindrome'

test('returns true', t => {
  t.is(isPalindrome(`Madam I'm Adam`), true)
  t.is(isPalindrome(`race car`), true)
})
test('returns false', t => {
  t.is(isPalindrome(`javascript rocks`), false)
})
