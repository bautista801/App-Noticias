import React from 'react'

const Noticia = ({noticia}) => {

    const {urlToImage, url, title, description, source} = noticia

  return (
        <div class="card mx-auto shadow-sm" style={{width: "25rem"}}>
            <img src={urlToImage} className="card-img-top pt-2" alt={title} />
            <div class="card-body">
                <p className='text-danger'>{source.name}</p>
                <h5 className="card-title mb-4">{title}</h5>
                <p className='mb-5'>{description}</p>
                <a href={url} target='_blank' className="card-link">Ver Noticia</a>
            </div>
        </div>
  )
}

export default Noticia