import { Link } from 'react-router-dom'

function ConcertCard(props) {


  return (
    <>
      <div className="card h-100 shadow-sm text-center overflow-hidden" style={{ borderRadius: 8 }}>
        <div className="concert-image-wrap">
          <Link
            to={props.ConcertId ? `/concerts/${props.ConcertId}` : '#'}
            className="img-hover d-block"
            aria-label={`View details for ${props.ConcertTitle}`}
          >
            <img src={props.Filename} alt={props.ConcertTitle} />
          </Link>
        </div>

        <div className="card-body py-2">
          <h5
            className="card-title mb-0"
            title={props.ConcertTitle}
            style={{ fontSize: '1rem', fontWeight: 600 }}
          >
            {props.ConcertTitle}
          </h5>
        </div>
      </div>
    </>
  )
}

export default ConcertCard