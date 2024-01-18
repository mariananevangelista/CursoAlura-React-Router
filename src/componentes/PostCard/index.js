import { Link } from 'react-router-dom'
import BotaoPrincipal from '../BotaoPrincipal'
import styles from './PostCard.module.css'

const PostCard = ({post}) => {
    return (
        <div className={styles.post}>
            <img className={styles.capa} src={`/assets/posts/${post.id}/capa.png`} alt='capa do post'/>
            <h2 className={styles.titulo}>{post.titulo}</h2>
            <Link to={`/post/${post.id}`}>
                <BotaoPrincipal>Ler</BotaoPrincipal>
            </Link>
            
        </div>
    )
}

export default PostCard