import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './App.css'
import { useNavigate } from 'react-router'


const App = () => {

  const [data, setData] = useState([])

  useEffect(()=> {
    axios.get('https://fakestoreapi.com/products')
    .then(res => {
      setData(res.data)
    })
  }, [])


  const addToBasket = (item) => {
    let basket=JSON.parse(localStorage.getItem('sebet')) || []

    let secilenmehsul= basket.find( x => x.id==item.id)

    if(secilenmehsul){
      secilenmehsul.count +=1
    }else{
      basket = [...basket, {...item, count:1}]
    }

    localStorage.setItem('sebet', JSON.stringify(basket))
  }

  const navigate = useNavigate()



  const addToWish =(item) => {
    let wish=JSON.parse(localStorage.getItem('wish')) ||[]
    wish= [...wish, item]
    localStorage.setItem('wish', JSON.stringify(wish))
  }





  return (
    <div className='box'>
      <button onClick={() => navigate('/about')}>about</button>

      {data && data.map( item => {
        return <div className='card'>
          <img src={item.image} alt="" />
          <span>{item.price}</span>
          <button className='btn' onClick={() => addToBasket(item)}>add to basket</button>
          <button className='btn' onClick={() => addToWish(item)}>add to wish</button>
        </div>
      })}
    </div>
  )
}

export default App
