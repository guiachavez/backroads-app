import React from 'react'
import { pageLinks } from '../data'
import PageLink from './PageLink'

const PageLinks = ({ ulClass, childClass }) => {
  return (
    <ul className={ulClass} id={ulClass}>
      {pageLinks.map((link) => {
        return <PageLink key={link.id} link={link} itemClass={childClass} />
      })}
    </ul>
  )
}

export default PageLinks
