export class BST {
  left: (BST | null) = null
  right: (BST | null) = null
  constructor(public value: number) {
    this.value = value
    this.left = null
    this.right = null
  }
  insert(value: number): void {
    if (value <= this.value) {
      if (!this.left) this.left = new BST(value)
      else this.left.insert(value)
    } else {
      if (!this.right) this.right = new BST(value)
      else this.right.insert(value)
    }
  }
  contains(value: number): boolean {
    if (value === this.value) return true
    if (value < this.value) {
      if (!this.left) return false
      return this.left.contains(value)
    }
    if (!this.right) return false
    return this.right.contains(value)
  }
  // in-order: from least to greatest, left -> node -> right
  depthFirstTraversalInOrder(iteratorFunction: (value: number) => any): void {
    if (this.left) this.left.depthFirstTraversalInOrder(iteratorFunction)
    if (this.value) iteratorFunction(this.value)
    if (this.right) this.right.depthFirstTraversalInOrder(iteratorFunction)
  }
  // reverse-in-order: from greatest to least, right -> node -> left
  depthFirstTraversalReverseInOrder(iteratorFunction: (value: number) => any): void {
    if (this.right) this.right.depthFirstTraversalReverseInOrder(iteratorFunction)
    if (this.value) iteratorFunction(this.value)
    if (this.left) this.left.depthFirstTraversalReverseInOrder(iteratorFunction)
  }
  // pre-order: display node -> left -> right
  depthFirstTraversalPreOrder(iteratorFunction: (value: number) => any): void {
    if (this.value) iteratorFunction(this.value)
    if (this.left) this.left.depthFirstTraversalPreOrder(iteratorFunction)
    if (this.right) this.right.depthFirstTraversalPreOrder(iteratorFunction)
  }
  // post-order: display node -> left -> right
  depthFirstTraversalPostOrder(iteratorFunction: (value: number) => any): void {
    if (this.left) this.left.depthFirstTraversalPostOrder(iteratorFunction)
    if (this.right) this.right.depthFirstTraversalPostOrder(iteratorFunction)
    if (this.value) iteratorFunction(this.value)
  }
  breadthFirstTraversal(iteratorFunction: (value: number) => any): void {
    const queue: BST[] = [this]
    while (queue.length) {
      const executable = queue.shift()! // Non-Null assertion operator: !
      iteratorFunction(executable.value)
      if (executable.left) queue.push(executable.left)
      if (executable.right) queue.push(executable.right)
    }
  }
  getMinValue(): number {
    if (!this.left) return this.value
    return this.left.getMinValue()
  }
  getMaxValue(): number {
    if (!this.right) return this.value
    return this.right.getMaxValue()
  }
}

// Array.prototype.customMap = (iteratorFun: (element: any) => any): any[] => {

// }

// [1,2].customMap()
