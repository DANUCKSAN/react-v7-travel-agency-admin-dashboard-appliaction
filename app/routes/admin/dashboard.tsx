import Header from 'components/Header'
import React from 'react'

const Dashboard = () => {

  const user={name:'Dan'};
  return (
   <main className='dashboard wrapper'>
    <Header
    title={`Welcome ${user?.name ?? 'Guest'} 👋`}
    description="Track activity, trends and popular destinations in real time"
    />
Dashboard Page content 
   </main>
  )
}

export default Dashboard
