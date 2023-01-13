import React from 'react'
import { Outlet } from 'react-router-dom'

type AdminLayoutProps = {}

const AdminLayout: React.FC<AdminLayoutProps> = (props) => {
   return (
      <div>
         AdminLayout
         <Outlet />
      </div>
   )
}

export default AdminLayout