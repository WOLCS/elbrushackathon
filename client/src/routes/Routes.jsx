import JWTDecode from 'jwt-decode'
import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from '../components'
import { HomePage } from '../pages/HomePage'
import { LoginPage } from '../pages/LoginPage'
import { SchemeNode } from '../pages/SchemeNode'
import { AdminPage } from '../pages/AdminPage'

import { Outlet } from 'react-router-dom'

function PrivateRoute({ isLoggedIn }) {
   return isLoggedIn ? <Outlet /> : <Navigate to="/" />
}

export const AppRoutes = () => {
   const [isLoggedIn, setisLoggedIn] = React.useState(false)
   const accessToken = useSelector(state => state.bot.accessToken)
   React.useEffect(() => {
      if (accessToken) {
         const decodedToken = JWTDecode(accessToken)
         if (decodedToken.role === 'ROLE_ADMIN') {
            setisLoggedIn(true)
         }
      }
   }, [accessToken])

   return (
      <Routes>
         <Route path="/" element={<HomePage />} />
         <Route element={<Layout />}>
            <Route path="/:schemeNodeId" element={<SchemeNode />} />
            <Route path="/admin" element={<PrivateRoute isLoggedIn={isLoggedIn} />}>
               <Route path="/admin" element={<AdminPage />} />
            </Route>
            <Route path="/login" element={<LoginPage />} />
         </Route>
      </Routes>
   )
}
