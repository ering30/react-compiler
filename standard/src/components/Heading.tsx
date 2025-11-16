import { capitalised } from "../lib/utils"

export const Heading = ({ title, size = "h1" }: { title: string, size?: string }) => {
  console.log('title', title)

  if (size === "h1" ) return (
    <h1>{capitalised(title)}</h1>
  )

  if (size === "h2" ) return (
    <h2>{capitalised(title)}</h2>
  )

  if (size === "h3" ) return (
    <h2>{capitalised(title)}</h2>
  )
}