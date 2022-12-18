import { Link } from 'react-router-dom'
import { Button as BaseButton } from '@mantine/core'

const linkStyle = {
   display: 'flex',
   justifyContent: 'center',
   textDecoration: "none"
}


export const Button = ({ children, nextSchemeNodeId }) => {
   return (
      <Link to={`/${nextSchemeNodeId}`} style={linkStyle}>
         <BaseButton className="categoryButton">{children}</BaseButton>
      </Link>
   )
}
