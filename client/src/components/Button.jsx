import { Link } from 'react-router-dom'
import { Button as MantineButton } from '@mantine/core'

export const Button = ({ children, nextSchemeId, nextSchemeNodeId }) => {
   return (
      <Link to={`/${nextSchemeId}/${nextSchemeNodeId}`}>
         <MantineButton variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>
            {children}
         </MantineButton>
      </Link>
   )
}
