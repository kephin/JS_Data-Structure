import test from 'ava'
import { BST } from '../../src/dataStructure/binarySearchTree'

test('empty BST', t => {
  const bst = new BST(50)
  t.is(bst.value, 50)
})
// insert
test('insert one BST into empty BST', t => {
  const bst = new BST(50)
  bst.insert(70)
  t.is(bst.right?.value, 70)
  t.is(bst.left, null)
  bst.insert(60)
  t.is(bst.right?.left?.value, 60)
})
// contains
const bst = new BST(50)
bst.insert(30)
bst.insert(70)
bst.insert(20)
bst.insert(45)
bst.insert(10)
test('check if BST contains certain value', t => {
  t.is(bst.contains(10), true)
  t.is(bst.contains(70), true)
  t.is(bst.contains(45), true)
  t.is(bst.contains(25), false)
})
// depthFirstTraversal
test('iterate BST in in-order', t => {
  const expectedOrder = [10, 20, 30, 45, 50, 70]
  let index = 0
  bst.depthFirstTraversalInOrder(value => {
    t.is(value, expectedOrder[index])
    index++
  })
})
test('iterate BST in reverse in-order', t => {
  const expectedOrder = [70, 50, 45, 30, 20, 10]
  let index = 0
  bst.depthFirstTraversalReverseInOrder(value => {
    t.is(value, expectedOrder[index])
    index++
  })
})
test('iterate BST in pre-order', t => {
  const expectedOrder = [50, 30, 20, 10, 45, 70]
  let index = 0
  bst.depthFirstTraversalPreOrder(value => {
    t.is(value, expectedOrder[index])
    index++
  })
})
test('iterate BST in post-order', t => {
  const expectedOrder = [10, 20, 45, 30, 70, 50]
  let index = 0
  bst.depthFirstTraversalPostOrder(value => {
    t.is(value, expectedOrder[index])
    index++
  })
})
// breadthFirstTraversal
test('iterate BST ', t => {
  const expectedOrder = [50, 30, 70, 20, 45, 10]
  let index = 0
  bst.breadthFirstTraversal(value => {
    t.is(value, expectedOrder[index])
    index++
  })
})
// getMinValue
test('finds minimum value in BST', t => {
  t.is(bst.getMinValue(), 10)
})
// getMaxValue
test('finds maximum value in BST', t => {
  t.is(bst.getMaxValue(), 70)
})
