import { Routes, Route } from 'react-router-dom'
import { HomePage } from '../pages/HomePage'
import { SchemeNode } from '../pages/SchemeNode'

export const AppRoutes = ({ children }) => {
   return (
      <>
         <Routes>
            <Route path="/:schemeId/:schemeNodeId" element={<SchemeNode />} />
            <Route path="/" element={<HomePage />} />
            {children}
         </Routes>
      </>
   )
}
