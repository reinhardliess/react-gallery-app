import React from 'react'

const Error = ({ error }) => {
  return (
    <div>
      <p>An error occurred retrieving data from flickr</p>
      <code>{error}</code>
    </div>
  )
}

export default Error