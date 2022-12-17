import { Link } from 'react-router-dom'
import { Button as BaseButton } from '@mantine/core'

export const Button = ({ children, nextSchemeNodeId }) => {
   return (
      <Link to={'/' + nextSchemeNodeId}>
         <BaseButton fullWidth variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>
            {children}
         </BaseButton>
      </Link>
   )
}
