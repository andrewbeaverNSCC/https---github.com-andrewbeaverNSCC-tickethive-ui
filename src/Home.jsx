import { useState, useEffect } from 'react'
import ConcertCard from './ui/ConcertCard.jsx'

function Home() {
  const [concerts, setConcerts] = useState([]) //Empty collection of concerts

  const apiUrl = import.meta.env.VITE_API_URL

  useEffect(() => {
    const getConcerts = async () => {
        const response = await fetch(apiUrl)
        const result = await response.json()
 
        if(response.ok) {
            setConcerts(result)
        }
    }
 
    getConcerts()
}, [])

  return (
    <>
      <h1>Concerts</h1>
      {
        concerts.length > 0 &&
        concerts.map(concert =>(
          <div key={concert.ConcertId}>
            < ConcertCard
            ConcertTitle={concert.ConcertTitle}
            Filename={concert.Filename}  
            />
            </div>
            
        ))
      }
    </>
  )
}

export default Home
