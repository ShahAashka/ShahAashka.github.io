import { HashLink } from 'react-router-hash-link'

// eslint-disable-next-line react/prop-types
const CustomLink = ({to, children, ...props}) => {
  return (
   <li>
    <HashLink to={to} {...props}>
      {children}
    </HashLink>
   </li>
  )
}

export default CustomLink