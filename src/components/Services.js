import React from 'react'
import Title from './Title'
import { services } from '../data'
import ServiceLink from './ServiceLink'

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title first="our" second="services" />
      <div className="section-center services-center">
        {services.map((service) => {
          return <ServiceLink key={service.id} {...service} />
        })}
      </div>
    </section>
  )
}

export default Services
