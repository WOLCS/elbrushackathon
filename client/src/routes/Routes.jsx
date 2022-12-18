import { Routes, Route } from 'react-router-dom'
import { Layout } from '../components'
import { HomePage } from '../pages/HomePage'
import { SchemeNode } from '../pages/SchemeNode'

export const AppRoutes = () => {
   return (
      <Routes>
         <Route path="/" element={<HomePage />} />
         <Route element={<Layout />}>
            <Route path="/:schemeNodeId" element={<SchemeNode />} />
         </Route>
      </Routes>
   )
}
