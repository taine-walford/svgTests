import React from 'react'
import Jacket from './Jacket';
import Shirt from './Shirt'
import Tie from './Tie'
import Pants from './Pants'
import Shoes from'./Shoes'

const App = () => {
  const colour = '#7D7D7D'

  const darkenColour = (colour) => {
    return () => {
      const bitArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']
      console.log("Base colour:", colour)
      let tempColour = [colour.slice(1,3), colour.slice(3,5), colour.slice(5, 7)]
      tempColour =tempColour.map(bit => {
        let bitIndex = bitArray.indexOf(bit[0]) 
        bitIndex = (bitIndex === 0) ? bitIndex: bitIndex - 1
        return (bitArray[bitIndex] + bit[1])
      })
      console.log(tempColour)
      tempColour = '#' + tempColour[0] + tempColour[1] + tempColour[2]
      console.log("New colour:", tempColour)
    }
  }

  return <>
    <h1>React development has begun!</h1>
    <button onClick={darkenColour(colour)}>Darken colour</button>
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
