import { useNavigate } from 'react-router-dom'
import '../../styles.css'
import { Back } from '../assests/Back'
import { Home } from '../assests/Home' 

export function Header() {
   const navigate = useNavigate()

   return (
      <header className="header">
       
     
         <Back />
         <Home/>
        
         <button className="navButton" onClick={() => navigate('/')}>
            На главную
         </button>
      </header>
   )
}
