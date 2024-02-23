import React from 'react'


export default function Journal(props){
    return(
        <div className="travel-place">
            <img src={props.item.imageUrl} className="travel-img" />
            <div className="travel-text">
                <div className="travel-info">
                    <img src="./images/Fill219.png" className="travel-pathimg" />
                    <p>{props.item.location}</p>
                    <a href={props.item.googleMapsUrl} className="travel-googlemaps">View on Google maps</a>
                </div>
                <h3>{props.item.title}</h3>
                <p className="travel-dates">{props.item.startDate} - {props.item.endDate}</p>
                <p className="travel-desc">{props.item.description}</p>
            </div>
        </div>
    )
}