export const capitalised = (str: string) => {
  const firstChar = str.charAt(0).toLocaleUpperCase();
  const restOfWord = str.slice(1)
  return firstChar + restOfWord
}