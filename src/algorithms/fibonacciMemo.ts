// O(n)
export function fibonacciMemo(index: number, cache: number[] = []): number {
  if (cache[index]) return cache[index]
  if (index < 2) return 1
  cache[index] = fibonacciMemo(index - 2, cache) + fibonacciMemo(index - 1, cache)
  return cache[index]
}
