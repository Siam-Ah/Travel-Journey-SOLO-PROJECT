import React from "react"

// Card component that takes props as an argument
export default function Card(props) {
    return(
        <div className="card">
            <img className="card--image" src={`./images/${props.item.imageUrl}`} />
            <div className="card--content">
                <p className="card--location">
                    <img className="card--location--pin" src="./images/location-pin.png"/>
                    <span className="card--country">{props.item.location}</span>
                    <span className="card--google-link">
                        <a 
                            className="card--website"
                            href={props.item.googleMapsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View on Google Maps
                        </a>
                    </span>
                </p>
                <h1>{props.item.title}</h1>
                <p className="card--date"><b>{props.item.startDate} - {props.item.endDate}</b></p>
                <p>{props.item.description}</p>
            </div>
        </div>
    )
}
