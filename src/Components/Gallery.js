import React from 'react';
import GalleryItem from './GalleryItem';



const Gallery = props => {
  const results = props.images
  const title = props.title
  let images

  images = results.map(image => (
    <GalleryItem
      url={}
      title={}
      key={}
    />
  ))
  return (
    <div class="photo-container">
      <h2>{heading}</h2>
      <ul>
        {images}
      </ul>
    </div>
  )
}

export default Gallery;