export class LinkedList {
  head: (null | Node) = null
  tail: (null | Node) = null

  addToHead(value: number): void {
    const newNode = new Node(value, null, this.head)
    if (this.head) { // was not empty
      this.head.prev = newNode
      this.head = newNode
    } else { // empty
      this.head = this.tail = newNode
    }
  }
  addToTail(value: number): void {
    const newNode = new Node(value, this.tail, null)
    if (this.tail) {
      this.tail.next = newNode
      this.tail = newNode
    } else {
      this.head = this.tail = newNode
    }
  }
  removeHead(): void {
    if (!this.head) return // empty
    if (!this.head.next) { // only one node
      this.head = this.tail = null
      return
    }
    const newHead = this.head.next
    newHead.prev = null
    this.head = newHead
  }
  removeTail(): void {
    if (!this.tail) return
    if (!this.tail.prev) {
      this.head = this.tail = null
      return
    }
    const newTail = this.tail.prev
    newTail.next = null
    this.tail = newTail
  }
  search(search: number): (null | number) {
    let pointer = this.head
    while (pointer) {
      if (pointer.value === search) return search
      pointer = pointer.next
    }
    return null
  }
  indexesOf(search: number): number[] {
    const matchIndexes = []
    let pointer = this.head
    let index = 0
    while (pointer) {
      if (pointer.value === search) matchIndexes.push(index)
      pointer = pointer.next
      index++
    }
    return matchIndexes
  }
}

export class Node {
  constructor(
    public value: number,
    public prev: (null | Node),
    public next: (null | Node)
  ) {
    this.value = value
    this.prev = prev
    this.next = next
  }
}
