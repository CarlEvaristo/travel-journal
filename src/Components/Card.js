import React from "react"

function Card({title, location, googleMapsUrl, startDate, endDate, description, imageUrl}) {
    return(
        <div className="card">
            <div className="imgContainer">
                <img src={imageUrl} alt={title} />
            </div>
            <div className="info">
                <p className="location">
                    <i class="fa-solid fa-location-dot"></i>
                    <div>{location.toUpperCase()}</div>
                    <a href="#" className="link">View on Google Maps</a>
                </p>
                <h1>{title}</h1>
                <p className="subtitle">{startDate} - {endDate}</p>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Card