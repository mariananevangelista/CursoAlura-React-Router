import ReactMarkdown from "react-markdown"
import { Route, Routes, useParams } from "react-router-dom"
import PostModelo from "../../componentes/PostModelo"
import NaoEncontrada from '../NaoEncontrada'
import posts from '../../json/posts.json'
import PaginaPadrao from '../../componentes/PaginaPadrao'
import PostCard from '../../componentes/PostCard'
import styles from './Post.module.css'
import './Post.css'


const Post = () => {
    const parametros = useParams()

    const post = posts.find((post) => {return post.id === Number(parametros.id)})

    //useParams retorna um objeto com o valor do parâmetro da url atual
    //post irá iterar pelo json posts e irá realizar uma busca que retornará o objeto que contém o id igual ao
    //parâmetro da página atual

    //passamos parametors.id para number pois no arquivo json ele é number, mas no objeto parametros é sempre
    //uma string, o que acaba retorno undefined sem a conversão

    if(!post){
        return <NaoEncontrada/>
    }

    const postsRecomendados = posts
    .filter((post) => post.id !== Number(parametros.id))
    .slice(3, 7)

    //tente sempre usar ao máximo os métodos

    return(
        <Routes>
            <Route path='*' element={<PaginaPadrao/>}>
                <Route index element={
                    <PostModelo
                    fotoCapa={`/assets/posts/${post.id}/capa.png`}
                    titulo={post.titulo}>
                        <div className="post-markdown-container">
                            <ReactMarkdown>
                                {post.texto}
                            </ReactMarkdown>
                        </div>

                        <h2 className={styles.tituloOutrosPosts}>Outros posts que você pode gostar:</h2>

                        <ul className={styles.postsRecomendados}>
                            {postsRecomendados.map((post) => (<li key={post.id}><PostCard post={post}/></li>))}
                        </ul>
                    </PostModelo>
                }/>

                {/*Para renderizar a pagina padrão (com o banner) em todos os posts, exceto nas rotas não existentes,
                definimos dentro do componente post uma rota pai para a pagina padrao, que será renderizada rodas as vezes
                que a rota for válida, e uma rota filha que recebrá nosso jsx como element*/}

            </Route>
        </Routes>
    )
}

//como o conteúdo do post está em markdown no arquivo json, não é possível renderizar com a estilização pré-definida no markdown,
//por isso vamos usar a biblioteca react markdown, que irá transformar o texto em html

export default Post

/*Outra solução:
    <PaginaPadrao>
        <PostModelo
            fotoCapa={`/assets/posts/${post.id}/capa.png`}
            titulo={post.titulo}
        >
            <div className="post-markdown-container">
                <ReactMarkdown>
                    {post.texto}
                </ReactMarkdown>
            </div>
        </PostModelo>
    </PaginaPadrao>

    Utilizando a prop children na pagina padrão e envolvendo o PostModelo
    Essa solução foi usada pois o Banner não deveria aparecer em uma rota desconhecida, mas como posts
    era uma rota filha da pagina padrão, o Banner era visível mesmo na pagina 404. Para resolver tiramos
    post da rota pagina padrao e definimos no jsx de post quando o Banner deve ser mostrado.
*/