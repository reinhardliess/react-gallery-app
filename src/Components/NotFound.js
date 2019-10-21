import React, { Fragment } from 'react'
import Header from './Header'

const NotFound = ({ onSearch }) => {
  return (
    <Fragment>
      <Header onSearch={onSearch} />
      <div className="not-found">
        <h3>Page Not Found</h3>
        <p>Please use one of the default buttons or enter a search term</p>
      </div>
    </Fragment>
  )
}

export default NotFound