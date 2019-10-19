import React from 'react'
import ButtonNav from './ButtonNav'
import SearchForm from './SearchForm'

const Header = ({ onSearch }) => {
  return (
    <div>
      <SearchForm onSearch={onSearch} />
      <ButtonNav />
    </div>
  )
}

export default Header




