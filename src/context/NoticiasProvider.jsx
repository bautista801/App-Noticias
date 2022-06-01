import axios from 'axios'
import {useEffect, useState, createContext} from 'react'

const NoticiasContext = createContext()

const NoticiasProvider = ({children}) => {

    const [categoria, setCategoria] = useState('general')

    const [noticias, setNoticias] = useState([])

    const handleChangeCategoria = e => {
        setCategoria(e.target.value)
    }

    useEffect(() => {
        const consultarApi = async () => {
            const url = `http://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=${import.meta.env.VITE_API_KEY}`

            const {data} = await axios(url)
            setNoticias(data.articles)
        } 
        consultarApi()
    }, [categoria])

  return (
    <NoticiasContext.Provider
        value={{
            categoria,
            handleChangeCategoria,
            noticias
        }}
    >
        {children}
    </NoticiasContext.Provider>
  )
}

export {NoticiasProvider}
export default NoticiasContext