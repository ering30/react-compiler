interface DashboardCardProps {
  title: string,
  subtitle: string, 
  status: string,
  description: string,
}

export const DashboardCard = (props: DashboardCardProps) => {
  const { title, subtitle, status, description } = props
  console.log('Dashboard Card Component')

  return (
    <div className="dashboard-card">
      <h4 style={{ marginTop: 0 }}>{title}</h4>
      <div style={{ flexDirection: 'column', gap: '6px', fontSize: '12px' }}>
        <p style={{ fontStyle: 'italic', margin: '0 0' }}>{subtitle}</p>
        <p>Status: {status}</p>
        <p>{description}</p>
      </div>
    </div>
  )

}