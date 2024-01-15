import {  NavLink } from 'react-router-dom'
import styles  from './LinkMenu.module.css'

const LinkMenu = ({children, path}) => {
    
    return(
        <NavLink to={path} className={({isActive}) => `${styles.link} ${isActive && styles.linkDestacado}` }>{children}</NavLink>
    )
}
export default LinkMenu