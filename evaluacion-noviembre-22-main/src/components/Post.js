import React, { useState } from 'react'

export default function Post({data, aumentoLikes}) {

  const [likes, setLikes] = useState(data.likes)

  const aumentarLikes = () => {
    aumentoLikes()
    setLikes(likes + 1)
    console.log("el titulo: " + data.titulo + "fue likeado la siguiente cantidad de veces: " + data.likes);
  }

  return (
    <div className='posteo' key={data.id}>
        <h3>{data.titulo}</h3>
        <p>{data.texto}</p>
        <button onClick={aumentarLikes}>Like</button>
        <h5>{likes > 10 ? <p>Supero 10 likes</p> : likes}</h5> 
    </div>
  )
}