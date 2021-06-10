export const isPalindrome = (str: string): boolean => {
  const characters = str
    .toLowerCase()
    .split('')
    .filter(character => {
      const index = character.charCodeAt(0)
      if (index < 97 || index > 122) return false
      return true
    })
  for (let index = 0; index < Math.floor(characters.length / 2); index++) {
    if (characters[index] !== characters[characters.length - 1 - index]) return false
  }
  return true
  // return characters.join('') === characters.reverse().join('')
}
