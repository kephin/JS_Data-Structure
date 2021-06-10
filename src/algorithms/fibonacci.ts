// O(2 ^ n)
export function fibonacci(index: number): number {
  if (index < 2) return 1
  return fibonacci(index - 2) + fibonacci(index - 1)
}
