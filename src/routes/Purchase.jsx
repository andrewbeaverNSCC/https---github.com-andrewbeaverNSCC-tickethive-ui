import { useParams, Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import Header from '../ui/Header.jsx'
import Footer from '../ui/Footer.jsx'
import PurchaseCard from '../ui/PurchaseCard.jsx'
import { useState, useEffect } from 'react'

function Purchase(){
    const { id } = useParams()
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm()
    const apiUrl = import.meta.env.VITE_API_URL
    const [concert, setConcert] = useState([])

       useEffect(() => {
        ;(async () => {
       const res = await fetch(`${apiUrl}/${id}`)
       if (res.ok) setConcert(await res.json())
        })()
       }, [apiUrl, id])

    const onSubmit = async (data) => {
        // Normalize data
        // Convert to string and remove spaces
        data.CardNumber = String(data.CardNumber || '').replace(/\s+/g, '')
        // Convert to string
        data.CVV = String(data.CVV)
        // Convert to number
        data.NumOfTickets = Number(data.NumOfTickets)
        // Convert to number
        data.ConcertId = Number(id)

        if (data.ExpirationDate){
            // Split YYYY-MM
            const [year, month] = data.ExpirationDate.split('-')
            // Drop concatenate month and year, dropping first two chars of year
            // MMYY
            data.ExpirationDate = Number(month + year.slice(-2))
        }

        const response = await fetch(`${apiUrl}/purchase`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })

        if (response.ok) {
            navigate(`/purchase-success/${id}`)
        } else {
            const txt = await response.text().catch(()=>null)
            alert('Failed to add purchase. ' + (txt))
        }
    }

    return (
        <>
            <Header />
            <main className="container my-4">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-8 col-lg-6">
                        <PurchaseCard 
                            register={register} 
                            errors={errors} 
                            onSubmit={onSubmit} 
                            handleSubmit={handleSubmit} 
                            id={id}
                            concertTitle={concert?.ConcertTitle}
                        />
                        <p className="mt-3">
                            <Link to={`/concerts/${id}`} className="btn btn-primary">Back</Link>
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}
export default Purchase