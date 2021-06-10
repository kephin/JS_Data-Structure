// mean: average
// median: middle value
// mode: most often
function getMean(arr: number[]): number {
  return arr.reduce((acc, cur) => acc + cur, 0) / arr.length
}
function getMedian(arr: number[]): number {
  const sorted = arr.sort((a, b) => a - b)
  if (arr.length % 2 !== 0) return sorted[Math.floor(arr.length / 2)]
  return (sorted[arr.length / 2] + sorted[arr.length / 2 - 1]) / 2
}
function getMode(arr: number[]): string[] {
  const modeObj = {} as {[key: number]: number}
  let count = 0
  for (const number of arr) {
    if (!modeObj[number]) modeObj[number] = 0
    modeObj[number]++
    if (modeObj[number] > count) count = modeObj[number]
  }
  const modes = []
  for (const key of Object.keys(modeObj)) {
    if (modeObj[parseInt(key)] === count) modes.push(key)
  }
  if (count * modes.length === arr.length) return []
  return modes
}
export function meanMedianMode (arr: number[]): any {
  return {
    mean: getMean(arr),
    median: getMedian(arr),
    mode: getMode(arr)
  }
}
