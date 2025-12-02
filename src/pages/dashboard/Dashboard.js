
import React, { useState } from 'react'
import Sidebar from '../../shared/sidebar/Sidebar'

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className='dashboard'>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
    </div>
  )
}

export default Dashboard