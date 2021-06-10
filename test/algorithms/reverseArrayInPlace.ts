import test from 'ava'
import { reverseArrayInPlace } from '../../src/algorithms/reverseArrayInPlace'

test('returns correct array', t => {
  t.deepEqual(
    reverseArrayInPlace([1, 2, 3, 4, 5, 6, 7, 8]),
    [8, 7, 6, 5, 4, 3, 2, 1]
  )
  t.deepEqual(reverseArrayInPlace(['I', 'like', 'js']),['js', 'like', 'I'])
})
