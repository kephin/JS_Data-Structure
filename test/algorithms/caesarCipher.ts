import test from 'ava'
import { caesarCipher } from '../../src/algorithms/caesarCipher'

test('returns correct string', t => {
  t.is(caesarCipher('Zoo Keeper', 2), 'Bqq Mggrgt')
  t.is(caesarCipher('Big Car', -16), 'Lsq Mkb')
  t.is(caesarCipher('Javascript', -900), 'Tkfkcmbszd')
})
