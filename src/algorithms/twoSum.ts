export function twoSum(arr: number[], sum: number): number[][] {
  const pairs: number[][] = []
  const hashTable: number[] = []
  for (let index = 0; index < arr.length; index++) {
    const currentValue = arr[index]
    const counterpart = sum - currentValue
    if (hashTable.indexOf(counterpart) !== -1) pairs.push([currentValue, counterpart])
    hashTable.push(currentValue)
  }
  return pairs
}
