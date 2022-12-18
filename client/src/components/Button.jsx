import { Link } from 'react-router-dom'
import { Button as BaseButton } from '@mantine/core'

export const Button = ({ children, nextSchemeNodeId }) => {
   return (
      <Link to={'/' + nextSchemeNodeId}>
         <BaseButton
            sx={theme => ({
               padding: `${theme.spacing.sm}px ${theme.spacing.lg}px`,
               '&:hover': {
                  boxShadow: '0px 4px 20px rgb(255 188 91 / 70%)'
               },
               '&:active': {
                  boxShadow: '0px 4px 20px rgb(255 188 91 / 70%)'
               }
            })}
         >
            {children}
         </BaseButton>
      </Link>
   )
}
