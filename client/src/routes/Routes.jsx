import { Routes, Route } from 'react-router-dom'
import { HomePage } from '../pages/HomePage'
import { SchemeNode } from '../pages/SchemeNode'

import { Layout } from '../components/Layout'

export const AppRoutes = () => {
   return (
      <>
         <Routes>
            <Route path="/" element={<HomePage />} />
         <Route element={<Layout />}>
            <Route path="/:schemeId/:schemeNodeId" element={<SchemeNode />} />
             
         </Route>
      </Routes>
      </>
   )
}
