import React from 'react'

const Card = ({userRandom, colorRandom, getRandomAll}) => {

const objColorFont = {
    color: colorRandom 
}

const objColorBackground = {
    backgroundColor: colorRandom
}

  return (
    <div className='card'>
        <p style={objColorFont} className="card-frase" >{userRandom.quote} </p>
        <h2  style={objColorFont} className='card-author'>{userRandom.author}</h2>
        <button  style={objColorBackground} onClick={getRandomAll} className='card-btn'>&#62;</button>
    </div>
  )
}

export default Card