import React from 'react';

interface ITravelProps {
  title: string,
  location: string,
  googleMapsUrl: string,
  startDate: string,
  endDate: string,
  description: string,
  imageUrl: string
}


function TravelCard(props: ITravelProps) {
  const {
    title, location, googleMapsUrl, startDate,
    endDate, description, imageUrl} = props;

  return (
    <div className='travel-card'>
      <img className='travel-card__logo' src={imageUrl} alt="" />
      <div className='travel-card__main-content'>
        <div className="travel-card__location">
          <a href={googleMapsUrl}>
            <img src="./Fill 219.png" alt="location" />
          </a>
          <p className='location-name'>{location}</p>
          <a className='location-link' href={googleMapsUrl}>View on Google Maps</a>
        </div>
        <h4 className="travel-card__title">
          {title}
        </h4>
        <p className='travel-card__time'>
          {startDate} - {endDate}
        </p>
        <p className='travel-card__description'>
          {description}
        </p>
      </div>
    </div>
  )
}

export default TravelCard;
