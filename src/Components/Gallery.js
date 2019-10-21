import React from 'react';
import GalleryItem from './GalleryItem';
import NoResults from './NoResults'

const Gallery = ({ results, title }) => {

  if (!results.photo) {
    return null
  }

  let images
  if (results.photo.length > 0) {
    images = results.photo.map(image => (
      <GalleryItem
        url={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`}
        title={image.title || 'No Description'}
        key={image.id}
      />
    ))
  } else {
    images = <NoResults title={title} />
  }
  return (
    <div className="photo-container">
      <h2>{title}</h2>
      <ul>
        {images}
      </ul>
    </div>
  )
}

export default Gallery