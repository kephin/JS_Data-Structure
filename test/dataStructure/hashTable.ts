import test from 'ava'
import { HashTable } from '../../src/dataStructure/hashTable'

const hashTable = new HashTable(20)
test('get method works', t => {
  const hashTable = new HashTable(20)
  t.is(hashTable.length(), 20)
})
test('hash method works', t => {
  t.is(hashTable.hash('hello'), 12)
  t.is(hashTable.hash('world'), 12)
  t.is(hashTable.hash('test'), 8)
  t.is(hashTable.hash('algorithm'), 7)
})
test('create method works', t => {
  hashTable.upsert('hello', 8)
  hashTable.upsert('olleh', 'meow')
  hashTable.upsert('world', 'hi')
  hashTable.upsert('test', true)
  t.is(hashTable.get('not_existed'), null)
  t.is(hashTable.get('hello'), 8)
  t.is(hashTable.get('olleh'), 'meow')
  t.is(hashTable.get('world'), 'hi')
  t.is(hashTable.get('test'), true)
  t.is(hashTable.get('lloeh'), null)
})
test('update method works', t => {
  hashTable.upsert('hello', 8)
  t.is(hashTable.get('hello'), 8)
  hashTable.upsert('hello', 9)
  t.is(hashTable.get('hello'), 9)
})
test('retrieveAll method works', t => {
  const nodes = hashTable.retrieveAll()
  t.is(nodes[0].key, 'test')
  t.is(nodes[0].value, true)
  t.is(nodes[1].key, 'hello')
  t.is(nodes[1].value, 9)
  t.is(nodes[2].key, 'olleh')
  t.is(nodes[2].value, 'meow')
  t.is(nodes[3].key, 'world')
  t.is(nodes[3].value, 'hi')
})
