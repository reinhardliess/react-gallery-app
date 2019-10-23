import React from 'react'

/** Error component */
const Error = ({ error }) => {
  return (
    <div className="not-found">
      <h3>Error accessing the flickr API</h3>
      <code>{error.message}</code>
    </div>
  )
}

export default Error