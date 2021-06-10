// O(log g)
export const binarySearch = (
  list: number[],
  target: number,
  low: number = 0,
  high: number = list.length - 1
): number => {
  if (low > high) return -1
  const mid = Math.floor((high + low) / 2)
  const guess = list[mid]
  if (guess < target) return binarySearch(list, target, mid + 1, high)
  if (guess > target) return binarySearch(list, target, low, mid - 1)
  return mid
}
