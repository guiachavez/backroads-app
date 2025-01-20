import React from 'react'
import Title from './Title'
import { tours } from '../data'
import TourLink from './TourLink'

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title first="featured" second="tours" />

      <div className="section-center featured-center">
        {tours.map((tour) => {
          return <TourLink key={tour.id} {...tour} />
        })}
      </div>
    </section>
  )
}

export default Tours
