function ConcertCard(props){
    return(
        <>
        <h2>{props.ConcertTitle}</h2>
        <img src={props.Filename} alt={props.ConcertTitle} width="300" />
        
        </>
    )
}
export default ConcertCard