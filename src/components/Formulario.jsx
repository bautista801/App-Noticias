import React from 'react'
import useNoticias from '../hooks/useNoticias'

const Formulario = () => {

    const {categoria, handleChangeCategoria} = useNoticias()

    const CATEGORIAS = [
        { value: 'general', label: 'General'},
        { value: 'business', label: 'Negocios'},
        { value: 'entertainment', label: 'Entretenimiento'},
        { value: 'health', label: 'Salud'},
        { value: 'science', label: 'Ciencia'},
        { value: 'sports', label: 'Deportes'},
        { value: 'technology', label: 'Tecnología'},
    ]

  return (
    <div className='p-5 pt-0 container'>
        <form className='d-flex flex-column col-lg-6 col-md-8 col-sm-10 mx-auto'>
            <label htmlFor="categoria" className='text-center text-white'>Buscar por Categoría</label>
            <select 
                name="categoria" 
                id="categoria" 
                className='my-3 form-select'
                onChange={handleChangeCategoria}
                value={categoria}
            >
                {
                    CATEGORIAS.map(categoria => (
                        <option 
                            key={categoria.value} 
                            value={categoria.value}
                        >
                            {
                                categoria.label
                            }
                        </option>
                    ))
                }
            </select>
        </form>
    </div>
  )
}

export default Formulario