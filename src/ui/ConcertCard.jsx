function ConcertCard(props){
  const id = props.ConcertId ?? props.id
  const href = id ? `/concerts/${id}` : '#'

  return (
    <>
      <div className="card h-100 shadow-sm text-center overflow-hidden" style={{ borderRadius: 8 }}>
        <div className="concert-image-wrap">
          <a href={href} className="img-hover" aria-label={`View details for ${props.ConcertTitle}`}>
            <img
              src={props.Filename}              alt={props.ConcertTitle}
           />
          </a>
        </div>

        <div className="card-body py-2">
          <h5
            className="card-title mb-0 "
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