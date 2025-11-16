import { Heading } from "./Heading"

export const Dashboard = ({ data }: { data: Record<string, any>}) => {
  const { dashboard } = data

  return (
    <div style={{ display: "flex" }}>
      <div className="card">
        <Heading title={Object.keys(dashboard)[0]} size="h2"/>
      </div>

      <div className="card">
        <Heading title={Object.keys(dashboard)[1]} size="h2"/>
      </div>
    </div>
  )
}