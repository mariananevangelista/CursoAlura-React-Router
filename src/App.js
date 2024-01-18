import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Menu from './componentes/Menu';
import PaginaPadrao from './componentes/PaginaPadrao';
import Rodape from './componentes/Rodape';
import ScrollToTop from './componentes/ScrollToTop';
import Inicio from './paginas/Inicio';
import NaoEncontrada from './paginas/NaoEncontrada';
import Post from './paginas/Post';
import SobreMim from './paginas/SobreMim';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Menu/>

      <Routes>
        <Route path='/' element={<PaginaPadrao/>}>
          <Route index element={<Inicio/>} />
          <Route path='sobremim' element={<SobreMim/>} />
        </Route>

        {/* na rota pai '/' a estrutura das páginas de início e sobre mim são renderizadas dentro da pagina padrão
         <PaginaPadrao>
          <Inicio/>
         </PaginaPadrao>

         <PaginaPadrao>
          <SobreMim/>
         </PaginaPadrao>

         Utilizada para diferentes rotas, não necessariamente todas

         o atributo index indica que a o path daquela rota é igual ao do atributo pai
         Nesse caso não é necessário o uso da / no path de sobre mim
         
         */}

        <Route path='post/:id/*' element={<Post/>}/>

        <Route path='*' element={<NaoEncontrada/>} />
      </Routes>

      <Rodape />
    </BrowserRouter>
  )
}

export default App;

//rotas aninhadas, uma rota pai semelhante às filhas
