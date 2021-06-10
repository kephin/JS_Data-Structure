const Code = {
  a: 97,
  z: 122,
  A: 65,
  Z: 90
}
const NumberOfAlphabet = 26

export const caesarCipher = (str: string, num: number): string => {
  return str
    .split('')
    .map(character => {
      const code = character.charCodeAt(0)
      const afterAdding = code + (num % NumberOfAlphabet)
      // uppercase
      if (code >= Code.A && code <= Code.Z) {
        let updatedCode = afterAdding
        if (afterAdding > Code.Z) updatedCode = afterAdding - Code.Z + Code.A - 1
        else if (afterAdding < Code.A) updatedCode = Code.Z - (Code.A - afterAdding ) + 1
        return String.fromCharCode(updatedCode)
      }
      // lowercase
      if (code >= Code.a && code <= Code.z) {
        let updatedCode = afterAdding
        if (afterAdding > Code.z) updatedCode = afterAdding - Code.z + Code.a - 1
        else if (afterAdding < Code.a) updatedCode = Code.z - (Code.a - afterAdding) + 1
        return String.fromCharCode(updatedCode)
      }
      return character
    })
    .join('')
}
