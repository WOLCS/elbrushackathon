import { useNavigate } from 'react-router-dom'
import '../../styles.css'
import { Back } from '../assests/Back'

export function Header() {
   const navigate = useNavigate()

   return (
      <header className="header">
       
     
         <Back/>
        
         <button className="navButton" onClick={() => navigate('/')}>
            На главную
         </button>
      </header>
   )
}
