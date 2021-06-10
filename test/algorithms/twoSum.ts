import test from 'ava'
import { twoSum } from '../../src/algorithms/twoSum'

test('returns correctly', t => {
  t.deepEqual(
    twoSum([1, 6, 4, 5, 3, 3], 7),
    [[6, 1], [3, 4], [3, 4]]
  )
  t.deepEqual(
    twoSum([40, 11, 19, 17, -12], 28),
    [[17, 11],[-12, 40]]
  )
})
