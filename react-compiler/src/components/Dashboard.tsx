import { DashboardCard } from "./DashboardCard"
import { Heading } from "./Heading"

export const Dashboard = ({ data }: { data: Record<string, any>}) => {
  const { dashboard, dashboard: { matters, workflows } } = data

  return (
    <>
      <div style={{ display: "flex" }}>
        <div className="card">
          <Heading title={Object.keys(dashboard)[1]} size="h2"/>

          <Heading title={`Matter Count: ${matters.matter_count}`} size="h3" />

          <h4>Open Matters</h4>

          {matters.open_matters.map((matter: Record<string, any>) => (
            <DashboardCard 
              key={matter.title}
              title={matter.title}
              subtitle={matter.owner}
              status={matter.status}
              description={`Source: ${matter.source}, Comments: ${matter.comments_count}`}
            />
          ))}
        </div>

        <div className="card">
          <Heading title={Object.keys(dashboard)[0]} size="h2"/>

          <Heading title={`Total Workflows: ${workflows.workflow_count}`} size="h3" />

          <h4>Live Workflows</h4>

          {workflows.active_workflows.map((wf: Record<string, any>) => (
            <DashboardCard 
              key={wf.title}
              title={wf.title}
              subtitle={wf.type}
              status={wf.status}
              description={`Assessment Count: ${wf.assessment_count}`}
            />
          ))}
        </div>
      </div>
    </>
  )
}