import React, {useState, useEffect} from 'react';
import Search from './Search';
import SearchResults from "./SearchResults";

const Bookings = () => {

  const [allBookings, setAllBookings] = useState([]);
  const [bookings, setBookings] = useState([]);

    useEffect(() => {
      const fetchData = async url => {
        try {
          const response = await fetch(url)
          if (response.ok) {
            const data = await response.json()
            setAllBookings(data.fakeBookings)
            setBookings(data.fakeBookings)
          } else {
            throw new Error(`server returned status: ${response.statusText}`)
          }
        } catch (error) {
          console.error(error)
        }
      }

    fetchData('http://localhost:4000/bookings')
  }, [])

  const search = (searchVal) => {
    console.log('search value:', searchVal);
    if (searchVal !== "") {
      const filteredResults = allBookings.filter((booking) => {
        return (
          booking.firstName.toLowerCase()
            .includes(searchVal.toLowerCase()) ||
          booking.surname.toLowerCase()
            .includes(searchVal.toLowerCase())
        )
      });

      setBookings(filteredResults);
      console.log("results", filteredResults);
    }

    if (searchVal === "") {
      setBookings(allBookings);
    }

  };

    return (
    <div className='App-content'>
      <div className='container' >
        <Search search={search} />
        <SearchResults results={bookings} />
      </div>
    </div>
  )
}

export default Bookings;
