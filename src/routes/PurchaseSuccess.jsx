import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Header from '../ui/Header.jsx'
import Footer from '../ui/Footer.jsx'

export default function PurchaseSuccess() {
    const { id } = useParams()
    const apiUrl = import.meta.env.VITE_API_URL
    const [concert, setConcert] = useState(null)

    useEffect(() => {
        ;(async () => {
            const res = await fetch(`${apiUrl}/${id}`)
            if (res.ok) setConcert(await res.json())
                })()
            }, [apiUrl, id])

    return(
        <>
        <Header />
        <main className="container my-4">
            <div className="row justify-content-center">
                <div className="col-12 col-md-8 col-lg-6">
                    <div className="card p-5 shadow-sm text-center" style={{ borderRadius: 8 }}>
                        {/* Check Icon https://icons.getbootstrap.com/icons/check-circle-fill/*/}
                        <div className="mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="green" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                            </svg>
                        </div>

                        <h1 className="mb-3" style={{ fontSize: '2rem', fontWeight: 700, color: '#28a745' }}>
                            Purchase Successful!
                        </h1>

                        <p className="mb-4" style={{ fontSize: '1.1rem', fontWeight: 500 }}>
                            Enjoy the <strong>{concert?.ConcertTitle}</strong> concert!
                        </p>

                        <div className="text-start mb-4">
                            <h5 className="mb-3" style={{ fontWeight: 600 }}>What's Next?</h5>
                            <p className="text-muted mb-2">
                                📧 You will receive a confirmation email within the next hour containing:
                            </p>
                            <ul className="text-muted" style={{ lineHeight: '1.8' }}>
                                <li>Your digital tickets with QR codes</li>
                                <li>Purchase receipt and order details</li>
                                <li>Venue information and directions</li>
                                <li>Important event guidelines </li>
                            </ul>
                        </div>
                        {/* Blue Alert Section */}
                        <div className="alert alert-info">
                            <h6 className="mb-2" style={{ fontWeight: 600 }}>🏨 Need Accommodations?</h6>
                            <p className="mb-2" style={{ fontSize: '0.95rem' }}>
                                We've partnered with Marriott to offer exclusive rates for concert attendees.
                            </p>
                            <a href="https://www.marriott.com" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-primary">
                                Book Your Stay
                            </a>
                        </div>

                        <div className="d-flex gap-2 justify-content-center mt-4">
                            <Link to={`/concerts/${id}`} className="btn btn-primary">View Concert Details</Link>
                            <Link to="/" className="btn btn-outline-secondary">Back to Home</Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <Footer />
        </>
    )
}