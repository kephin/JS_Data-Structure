import test from 'ava'
import { fibonacciMemo } from '../../src/algorithms/fibonacciMemo'

test('returns correct value', t => {
  t.is(fibonacciMemo(0), 1)
  t.is(fibonacciMemo(1), 1)
  t.is(fibonacciMemo(2), 2)
  t.is(fibonacciMemo(3), 3)
  t.is(fibonacciMemo(4), 5)
  t.is(fibonacciMemo(5), 8)
  t.is(fibonacciMemo(6), 13)
  t.is(fibonacciMemo(7), 21)
  t.is(fibonacciMemo(8), 34)
  t.is(fibonacciMemo(9), 55)
  t.is(fibonacciMemo(10), 89)
  t.is(fibonacciMemo(50), 20365011074)
})
