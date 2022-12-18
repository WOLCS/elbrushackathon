import { Link } from 'react-router-dom'
import { Button as BaseButton } from '@mantine/core'

const linkStyle = {
   display: 'flex',
   justifyContent: 'center',
   textDecoration: 'none'
}

export const Button = ({ children, nextSchemeNodeId }) => (
   <Link to={'/' + nextSchemeNodeId} style={linkStyle}>
      <BaseButton
         sx={theme => ({
            padding: `${theme.spacing.sm}px ${theme.spacing.lg}px`,
            '&:hover': {
               boxShadow: '0px 4px 20px rgb(34 139 230 / 70%)'
            },
            '&:active': {
               boxShadow: '0px 4px 20px rgb(34 139 230 / 70%)'
            }
         })}
      >
         {children}
      </BaseButton>
   </Link>
)
