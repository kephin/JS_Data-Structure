import test from 'ava'
import { reverseWords } from '../../src/algorithms/reverseWords'

test('returns correct string', t => {
  t.is(reverseWords('Coding JavaScript'), 'gnidoC tpircSavaJ')
  t.is(reverseWords('Today is so good!'), 'yadoT si os !doog')
})
