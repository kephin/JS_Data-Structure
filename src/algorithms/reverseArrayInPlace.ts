export function reverseArrayInPlace<T>(arr: T[]): T[] {
  for (let index = 0; index < Math.floor(arr.length / 2); index++) {
    [arr[index], arr[arr.length - 1 - index]] =
      [arr[arr.length - 1 - index], arr[index]]
  }
  return arr
}
