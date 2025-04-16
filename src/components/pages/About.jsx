import React from 'react'
import App from '../../App'
const About = () => {

    
let basket=JSON.parse(localStorage.getItem('sebet')) || []
    
      
  return (
    <div>  {basket && basket.map( item => {
        return <div className='card'>
          <img src={item.image} alt="" />
          <span>{item.price}</span>
          
        </div>
      })}</div>
  )
}

export default About