import React, {useState, useEffect} from 'react';
import Search from './Search'
import SearchResults from "./SearchResults";
import fakeBookings from '../../../server/data/fakeBookings';
// import fakeBookings from '../../../server/data/fakeBookings';
//  import FakeBookings from '../data/fakeBookings'

const Bookings = () => {

  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchData = async url => {
      try {
        const response = await fetch(url)
        if (response.ok) {
          const data = await response.json()
          setBookings(data)
        } else {
          throw new Error(`server returned status: ${response.statusText}`)
        }
      } catch (error) {
        console.error(error)
        return []
      }
    }

    fetchData('http://localhost:4000/bookings')
  }, [])

  const search = (searchVal) => {
    console.info('TODO!', searchVal)
  }


  return (
    <div className='App-content'>
      <div className='container' >
        <Search search={search} />
        <SearchResults results={fakeBookings} />
      </div>
    </div>
  )
}

export default Bookings;
