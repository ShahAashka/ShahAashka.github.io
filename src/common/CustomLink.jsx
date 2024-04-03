import { useMatch, useResolvedPath } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link'

const CustomLink = ({to, children, ...props}) => {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path : resolvedPath.pathname, end: true})

  // console.log(resolvedPath, '------1', to, children)
  // console.log(window.location.pathname, '---------2')

  return (
   <li className={isActive ? 'active' : ''}>
    <HashLink to={to} {...props}>
      {children}
    </HashLink>
   </li>
  )
}

export default CustomLink