import { Link } from 'react-router-dom'
import { Button as MantineButton } from '@mantine/core'

export const Button = ({ children, nextSchemeNodeId }) => {
   return (
      <Link to={`/${nextSchemeNodeId}`}>
         <MantineButton className='categoryButton'>
            {children}
         </MantineButton>
      </Link>
   )
}
