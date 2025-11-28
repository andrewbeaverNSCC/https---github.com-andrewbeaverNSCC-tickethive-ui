import { useState, useEffect } from 'react'
import Header from '../ui/Header.jsx'
import Footer from '../ui/Footer.jsx'
import { useParams, Link } from 'react-router-dom'

export default function Details() {
  const { id } = useParams()
  const [concert, setConcert] = useState(null)



  // ../api/photos/#
  const apiUrl = import.meta.env.VITE_API_URL + `/${id}`

  useEffect(() => {
    if (!apiUrl || !id) return

    ;(async () => {
      
        let res = await fetch(apiUrl)
        if (res.ok) {
          setConcert(await res.json())
          return
        }
    })()
  }, [apiUrl, id])
  
if (!concert) {
    return (
      <>
        <Header />
        <main className="container my-4" />
        <Footer />
      </>
    )
  }


  return (
    <>
      <Header />

<main className="container my-4">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8">
            <div className="concert-image-wrap mb-3" style={{ borderRadius: 8 }}>
              <img src={concert.Filename} alt={concert.ConcertTitle} />
            </div>

            <h1 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: 8 }}>{concert.ConcertTitle}</h1>

            {concert.ConcertTime && <p className="text-muted mb-1"><strong>Date: </strong>{concert.ConcertTime}</p>}
            {concert.Location && <p className="text-muted mb-2"><strong>Location: </strong>{concert.Location}</p>}
            {concert.CategoryName && <p className="text-muted mb-2"><strong>Category: </strong>{concert.CategoryName}</p>}
            {concert.OwnerName && <p className="text-muted mb-2"><strong>Owner: </strong>{concert.OwnerName}</p>}

            {concert.Description && <p style={{ whiteSpace: 'pre-wrap' }}>{concert.Description}</p>}

            <div className="mt-3">
              <Link to="/" className="btn btn-link">Back</Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}