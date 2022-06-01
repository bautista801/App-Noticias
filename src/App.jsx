import Formulario from './components/Formulario'
import { NoticiasProvider } from './context/NoticiasProvider'
import ListadoNoticias from './components/ListadoNoticias'

function App() {

  return (
    <NoticiasProvider>
      <div className='container-fluid bg-dark'>
        <h1 className='text-center p-5 text-white'>App Noticias</h1>
        <Formulario />
      </div>
      
      <ListadoNoticias />
      
    </NoticiasProvider>
  )
}

export default App
