import { useSelector } from 'react-redux'
import { selectSchemes } from '../store/botReducer'

export const HomePage = () => {
   const categories = useSelector(selectSchemes)
   return (
      <>
         <h1>HOME PAGE</h1>
         {categories.map(category => (
            <h2 key={category}>{category}</h2>
         ))}
      </>
   )
}
