import { Link } from 'react-router-dom'
import { Button as BaseButton } from '@mantine/core'

export const Button = ({ children, nextSchemeNodeId }) => {
   return (
      <Link to={`/${nextSchemeNodeId}`}>
         <MantineButton className='categoryButton'>
            {children}
         </BaseButton>
      </Link>
   )
}
