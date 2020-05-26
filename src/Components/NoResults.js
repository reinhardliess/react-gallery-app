import React from 'react'

/** displays message if a search didn't return any results */
const NoResults = () => {
  return (
    <li className="not-found">
      <h3>No Results Found</h3>
      <p>Your search did not return any results. Please try again.</p>
    </li>
  )
}

export default NoResults
