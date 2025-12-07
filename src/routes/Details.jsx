import { useState, useEffect } from 'react'
import Header from '../ui/Header.jsx'
import Footer from '../ui/Footer.jsx'
import { useParams, Link } from 'react-router-dom'
import ConcertDetailsCard from '../ui/ConcertDetailsCard.jsx'

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

    <main className="container-fluid my-4">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="mb-3 text-center">
              <img
                src={concert.Filename}
                alt={concert.ConcertTitle}
                style={{
                  width: '100%',
                  maxWidth: '700px',
                  height: 'auto',
                }}
              />
            </div>
            <div className="row justify-content-center">
              <div className="col-12 col-md-10 col-lg-8">
                <ConcertDetailsCard concert={concert} id={id} />
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}