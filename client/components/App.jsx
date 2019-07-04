import React from 'react'
import Jacket from './Jacket';
import Shirt from './Shirt'
import Tie from './Tie'
import Pants from './Pants'
import Shoes from'./Shoes'

const App = () => {
  return <>
    <h1>React development has begun!</h1>
    <div className='svgContainer'>
      <Shirt />
      <Tie />
      <Shoes />
      <Pants />
      <Jacket />
    </div>
  </>
}

export default App
