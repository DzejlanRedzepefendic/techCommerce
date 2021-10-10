import React, { useEffect } from 'react'

function Dashboard() {
  //executes only once - on initial render =  componentDidMount
  useEffect(() => {
    document.title = 'Dashboard - eCommerce'
  }, [])

  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  )
}

export default Dashboard
