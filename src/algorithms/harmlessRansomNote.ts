// instead of double for loop, O(n ^ 2)
// we turn one array into an object and run for loop on
// the other array, which will be O(n + m)

export const harmlessRansomNote = (
  noteText: string,
  magazineText: string
): boolean => {
  const noteArr = noteText.split(' ')
  const magazineArr = magazineText.split(' ')
  const magazineObj = {} as {[key: string]: number}
  for (const word of magazineArr) {
    if (!magazineObj[word]) magazineObj[word] = 0
    magazineObj[word]++
  }
  for (const word of noteArr) {
    if (!magazineObj[word]) return false
    magazineObj[word]--
  }
  return true
}
