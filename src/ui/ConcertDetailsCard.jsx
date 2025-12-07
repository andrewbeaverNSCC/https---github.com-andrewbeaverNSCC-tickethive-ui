import { Link } from 'react-router-dom'

export default function ConcertDetailsCard({ concert, id }){
    return(
        <div className="card p-3 shadow-sm" style={{ borderRadius: 8 }}>
      <div className="card-body">
        <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: 12 }}>{concert.ConcertTitle}</h2>

        <div className="row mb-3">
          <div className="col-6 text-muted"><strong>Date</strong></div>
          <div className="col-6">{concert.ConcertTime}</div>

          <div className="col-6 text-muted"><strong>Location</strong></div>
          <div className="col-6">{concert.Location}</div>

          <div className="col-6 text-muted"><strong>Category</strong></div>
          <div className="col-6">{concert.CategoryName}</div>

          <div className="col-6 text-muted"><strong>Owner</strong></div>
          <div className="col-6">{concert.OwnerName}</div>
        </div>

        <div className="mb-3">
          <div className="text-muted mb-1"><strong>Description</strong></div>
          <p style={{ whiteSpace: 'pre-wrap', marginBottom: 0 }}>{concert.Description}</p>
        </div>

        <div className="d-flex gap-2">
          <Link to={`/purchase/${id}`} className="btn btn-primary">Purchase Tickets</Link>
          <Link to="/" className="btn btn-primary">Back</Link>
        </div>
            </div>
        </div>

    )
}

