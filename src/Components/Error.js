import React from 'react'

const Error = ({ error }) => {
  return (
    <div className="not-found">
      <h3>Error accessing the flickr API</h3>
      <code>{error.message}</code>
    </div>
  )
}

export default Error