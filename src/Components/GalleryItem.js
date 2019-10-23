import React from 'react'

/** displays photos retrieved from flickr api */
const GalleryItem = ({ url, title }) => {
  return (
    <li>
      <img src={url} alt={title} title={title} />
    </li>
  )
}

export default GalleryItem
