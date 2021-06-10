import test from 'ava'
import { meanMedianMode } from '../../src/algorithms/meanMedianMode'

test('returns correct value', t => {
  t.deepEqual(meanMedianMode([1, 2, 3, 4, 5, 4, 6, 1]), {
    mean: 3.25,
    median: 3.5,
    mode: ['1', '4']
  })
  t.deepEqual(meanMedianMode([9, 10, 23, 10, 23, 9]), {
    mean: 14,
    median: 10,
    mode: []
  })
})
