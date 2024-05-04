import React, { useState, useEffect } from 'react'
import Search from './Search'
import SearchResults from './SearchResults'
import CircularIndeterminate from './CirculareIndeterminate'

const Bookings = () => {
  const [allBookings, setAllBookings] = useState([])
  const [bookings, setBookings] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    const fetchData = async (url) => {
      setIsLoading(true)
      try {
        const response = await fetch(url)
        if (response.ok) {
          const data = await response.json()
          setAllBookings(data.fakeBookings)
          setBookings(data.fakeBookings)
          setIsLoading(false)
          setErrorMessage(null)
        } else {
          throw new Error(`server returned status: ${response.statusText}`)
        }
      } catch (error) {
        console.error(error)


      } finally {
        setIsLoading(false)
         setErrorMessage(errorMessage.message);
      }
    }

    fetchData('http://localhost:4000/bookings')
    // fetchData('http://localhost:4000/error')
  }, [])

  const search = (searchVal) => {
    console.log('search value:', searchVal)
    if (searchVal !== '') {
      const filteredResults = allBookings.filter((booking) => {
        return (
          booking.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
          booking.surname.toLowerCase().includes(searchVal.toLowerCase())
        )
      })

      setBookings(filteredResults)
      console.log('results', filteredResults)
    }

    if (searchVal === '') {
      setBookings(allBookings)
    }
  }

  return isLoading ? (
    <div>
    <p>Don't worry! The information is loading.....</p>
   <CircularIndeterminate />
    </div>
  ) : (
    <div className='App-content'>
      <div className='container'>
        <Search search={search} />
        <SearchResults results={bookings} />
      </div>
    </div>
  )
}

export default Bookings
