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
         size="lg"
         fullWidth
         sx={theme => ({
            color: 'black',
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
