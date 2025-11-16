export const Heading = ({ title }: { title: string}) => {
  console.log('title', title)

  const capitalised = (title: string) => {
    const firstChar = title.charAt(0).toLocaleUpperCase();
    const restOfWord = title.slice(1)
    return firstChar + restOfWord
  }

  return (
    <h1>{capitalised(title)}</h1>
  )
}