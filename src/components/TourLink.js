import React from 'react'

const TourLink = ({
  id,
  image,
  date,
  title,
  text,
  icon,
  location,
  duration,
  budget,
}) => {
  return (
    <article className="tour-card" key={id}>
      <div className="tour-img-container">
        <img src={image} className="tour-img" alt="" />
        <p className="tour-date">{date}</p>
      </div>
      <div className="tour-info">
        <div className="tour-title">
          <h4>{title}</h4>
        </div>
        <p>{text}</p>
        <div className="tour-footer">
          <p>
            <span>
              <i className={icon}></i>
            </span>{' '}
            {location}
          </p>
          <p>{duration} days</p>
          <p>from ${budget}</p>
        </div>
      </div>
    </article>
  )
}

export default TourLink
