import React from 'react'

const GalleryItem = ({ url, title }) => {
  return (
    <li>
      <img src={url} alt={title} title={title} />
    </li>
  )
}

export default GalleryItem
