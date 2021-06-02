export class HashTable {
  buckets: HashNode[] = []
  constructor(public size: number) {
    this.buckets = Array(size)
  }
  length(): number {
    return this.buckets.length
  }
  hash(key: string): number {
    let value = 0
    for (const character of key.split('')) {
      value += character.charCodeAt(0)
    }
    return value % this.length()
  }
  upsert(key: string, value: any): void {
    const index = this.hash(key)
    let current: (HashNode | null) = this.buckets[index]
    if (!current) this.buckets[index] = new HashNode(key, value, null)
    else {
      if (current.key === key) {
        current.value = value
        return
      }
      while (current.next) {
        current = this.buckets[index].next as HashNode
        if (current.key === key) {
          current.value = value
          return
        }
      }
      current.next = new HashNode(key, value, null)
    }
  }
  get(key: string): any {
    const index = this.hash(key)
    let current: (HashNode | null) = this.buckets[index]
    if (!current) return null
    while (current) {
      if (current.key === key) return current.value
      current = current.next
    }
    return null
  }
  retrieveAll() {
    const nodes = []
    for (let index = 0; index < this.length(); index++) {
      let currentNode = this.buckets[index] as (HashNode | null)
      while (currentNode) {
        nodes.push(currentNode)
        currentNode = currentNode.next
      }
    }
    return nodes
  }
}

export class HashNode {
  constructor(
    public key: string,
    public value: any,
    public next: (HashNode | null)
  ) {
    this.key = key
    this.value = value
    this.next = next || null
  }
}
