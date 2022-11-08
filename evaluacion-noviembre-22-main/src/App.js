import React, { useState } from 'react'
import Estatus from "./components/Estatus"
import Posteos from "./components/Posteos"

function App() {

  const [likes,setLikes] = useState(0)

  const aumentarLikes = () => {
    setLikes(likes + 1 )
  }

  return (
    <div className="App">
      <Estatus prop ={likes} />
      <Posteos prop = {aumentarLikes} />
    </div>
  );
}

export default App;