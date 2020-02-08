import React, { useEffect, useState } from 'react'
import axios from 'axios'

const BASE_URL = 'http://localhost:5000/fetch?url='

const Home = () => {
  const [centerpiece, setCenterpiece] = useState([])
  useEffect(() => {
    axios.get(`${BASE_URL}http://www.thedp.com/section/centerpiece.json`)
      .then(resp => {
        const { articles } = resp.data
        setCenterpiece(articles[0])
      })
  }, [])

  return (
    <h1> { centerpiece.headline } </h1>
  )
}

export default Home