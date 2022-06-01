import useNoticias from "../hooks/useNoticias"
import Noticia from "./Noticia"

const ListadoNoticias = () => {

    const {noticias} = useNoticias()
    console.log(noticias)

  return (
    <div className="container-fluid d-flex flex-column">
        <h2 className="text-center my-5 text-dark">Últimas Noticias</h2>
        <div className="row col-md-4 col-lg-8 g-4 mx-auto mb-5">
            {
                noticias.map(noticia => (
                    <Noticia 
                        key={noticia.url}
                        noticia={noticia} />
                ))
            }
        </div>
    </div>
  )
}

export default ListadoNoticias