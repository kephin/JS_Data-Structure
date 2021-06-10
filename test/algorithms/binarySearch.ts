import test from 'ava'
import {
  binarySearch,
  // recursiveBinarySearch
} from '../../src/algorithms/binarySearch'

test('returns the target index of the array', t => {
  const input = [1, 4, 7, 9, 14, 19, 24, 26, 27, 29, 31, 32, 36, 38, 44, 47, 49, 51, 54, 55, 64, 68, 73, 78, 79, 81]
  const target = 78
  const expected = 23
  const actual = binarySearch(input, target)
  t.is(actual, expected)
})
test('returns -1', t => {
  const input = [1, 4, 7, 9, 14, 19, 24, 26, 27, 29, 31, 32, 36, 38, 44, 47, 49, 51, 54, 55, 64, 68, 73, 78, 79, 81]
  const target = 45
  const expected = -1
  const actual = binarySearch(input, target)
  t.is(actual, expected)
})
