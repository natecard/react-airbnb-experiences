export default function Card(props){
  let badgeText
  if (props.openSpots ===0) {
    badgeText = 'SOLD OUT'
  } else if (props.location === 'Online'){
    badgeText = 'ONLINE'
  }
  return(
    <div className="card">
      {badgeText && <div className="img-badge">{badgeText}</div>}
      <img src={`./public/images/${props.coverImg}`} alt="" className="card-img"></img>
      <div className="card-stats">
      <span className="reviews"><img src="./public/images/star 1.png"alt="star" className="reviewStar" /> {props.stats.rating}</span>
      <span className="location"> ({props.stats.reviewCount})・{props.location}</span>
      <p className="card-title">{props.title}</p>
      <p className="card-cost"><strong>From ${props.price}</strong>/ person</p>
      </div>
    </div>
  )

}