import test from 'ava'
import { fibonacci } from '../../src/algorithms/fibonacci'

test('returns correct value', t => {
  t.is(fibonacci(0), 1)
  t.is(fibonacci(1), 1)
  t.is(fibonacci(2), 2)
  t.is(fibonacci(3), 3)
  t.is(fibonacci(4), 5)
  t.is(fibonacci(5), 8)
  t.is(fibonacci(6), 13)
  t.is(fibonacci(7), 21)
  t.is(fibonacci(8), 34)
  t.is(fibonacci(9), 55)
  t.is(fibonacci(10), 89)
})
