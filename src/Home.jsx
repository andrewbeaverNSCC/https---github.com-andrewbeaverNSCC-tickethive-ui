import { useState, useEffect } from 'react'
import ConcertCard from './ui/ConcertCard.jsx'
import Header from './ui/Header.jsx'
import Footer from './ui/Footer.jsx'

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
      <Header />
      <main className="container my-4">
        <h1 className="mb-4">See upcoming concerts below!</h1>

        <div className="row">
          {concerts.map(concert => (
            <div className="col-sm-6 col-md-4 col-lg-3 mb-3" key={concert.ConcertId}>
              <ConcertCard
                ConcertTitle={concert.ConcertTitle}
                Filename={concert.Filename}
                ConcertId={concert.ConcertId}
              />
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </>
  )
}

export default Home
