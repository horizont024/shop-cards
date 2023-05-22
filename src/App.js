import React, { useState, useEffect } from 'react'
import './App.css'

const App = () => {
  const [data, setData] = useState([])
  console.log(data)
  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const response = await fetch('https://fakestoreapi.com/products')
    const jsonData = await response.json()
    setData(jsonData)
  }

  return (
    <>
      <h2>Store</h2>
      <div className="container">
        {data.map((item) => {
          return (
            <>
              <div className="content">
                <img src={item.image} alt="" />
                <h5>{item.title}</h5>
                <h3>$ {item.price}</h3>
                <button> Add to cart</button>
              </div>
            </>
          )
        })}
      </div>
    </>
  )
}

export default App
