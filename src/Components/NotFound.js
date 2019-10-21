import React, { Fragment } from 'react'
import Header from './Header'

const NotFound = ({ onSearch }) => {
  return (
    <Fragment>
      <Header onSearch={onSearch} />
      <div>
        <p>⚠ This page was not found</p>
      </div>
    </Fragment>
  )
}

export default NotFound