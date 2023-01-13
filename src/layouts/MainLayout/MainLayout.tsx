import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer/Footer'
import Header from './Header/Header'

type MainLayoutProps = {}

const MainLayout: React.FC<MainLayoutProps> = (props) => {
   return (
      <div>
         MainLayout
         <Header />
         <Outlet />
         <Footer />
      </div>
   )
}

export default MainLayout