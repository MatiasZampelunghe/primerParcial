import React from 'react'
import data from "./data.json"
import Post from './Post'

export default function Posteos({prop}) {

  return (
    <div className='container'>
      {data.map(item=>( <Post key={item.id} data = {item} aumentoLikes = {prop}/>))}
    </div>
  )
}