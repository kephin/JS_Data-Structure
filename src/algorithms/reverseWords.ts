export const reverseWords = (str: string): string => str
  .split(' ')
  .map(word => {
    const characters = word.split('')
    for (let index = 0; index < Math.floor(characters.length / 2); index++) {
      [characters[index], characters[characters.length - 1 - index]] =
        [characters[characters.length - 1 - index], characters[index]]
    }
    return characters.join('')
  })
  .join(' ')
