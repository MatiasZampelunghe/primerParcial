import React from 'react'


export default function Estatus({prop}) {

  return (
    <header>

        <h1>Estatus de Posteos</h1>
        <p>Total de likes: <span>{prop} </span></p>
    </header>
  )
}