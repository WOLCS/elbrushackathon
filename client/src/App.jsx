import { AppRoutes } from './routes/Routes.jsx'
import {Header} from '../src/components/Header';

export const App = () => {
   return (
      <>
         <Header />
         <AppRoutes />
      </>
   )
}
