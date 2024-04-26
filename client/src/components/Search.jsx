import React, { useState } from 'react'
import SearchButton from './SearchButton.jsx'

const Search = ({ search }) => {
  const [searchInput, setSearchInput] = useState('')

  const handleSearchInput = (event) => {
    setSearchInput(event.target.value)
    console.log('new input:', event.target.value)
  }

  const handleSearchSubmit = (event) => {
    event.preventDefault()
    search(searchInput)
    console.log('Form submitted:', searchInput)
  }

  return (
    <div className='search'>
      <div className='page-header'>
        <h4 className='text-left'>Search Bookings</h4>
      </div>
      <div className='row search-wrapper'>
        <div className='col'>
          <form className='form-group search-box' onSubmit={handleSearchSubmit}>
            <label htmlFor='customerName'>Customer name</label>
            <div className='search-row'>
              <input
                type='text'
                id='customerName'
                className='form-control'
                placeholder='Customer name'
                value={searchInput}
                onChange={handleSearchInput}
              />
              <SearchButton type='submit' />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Search
