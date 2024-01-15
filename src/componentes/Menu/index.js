import LinkMenu from '../LinkMenu'
import styles from './Menu.module.css'

const Menu = () => {

    return(
        <header>
            <nav className={styles.navegacao}>
                <LinkMenu path='/'>Início</LinkMenu>
                <LinkMenu path='/sobremim'>Sobre Mim</LinkMenu>
            </nav>
        </header>
    )
}
export default Menu