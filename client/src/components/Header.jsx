import { useNavigate } from 'react-router-dom'
import '../../styles.css'

export function Header() {
   const navigate = useNavigate()

   return (
      <header className="header">
         <button className="navButton" onClick={() => navigate(-1)}>
            Назад
         </button>
         <button className="navButton" onClick={() => navigate('/')}>
            На главную
         </button>
      </header>
   )
}
