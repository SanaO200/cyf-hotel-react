import React, { useState } from 'react'
import CustomerProfile from './CustomerProfile'
import Backdrop from '@mui/material/Backdrop'
import moment from 'moment'
moment().format()

const countNumberOfNights = (checkInDate, checkOutDate) => {
  let startDate = moment(checkInDate)
  let endDate = moment(checkOutDate)
  return endDate.diff(startDate, 'days')
}

const SearchResults = ({ results }) => {
  const [selectedId, setSelectedId] = useState(null)
  const [customerProfileId, setCustomerProfileId] = useState(null)

  const handleSelection = (bookingId) => {
    setSelectedId(bookingId)
  }

  const showCustomerProfile = (id) => {
    setCustomerProfileId(id)
  }

  const hideCustomerProfile = () => {
    setCustomerProfileId(null)
  }

  return (
    <>
      <table className='table'>
        <thead>
          <tr>
            <th scope='col'>id</th>
            <th scope='col'>Title</th>
            <th scope='col'>First Name</th>
            <th scope='col'>SurName</th>
            <th scope='col'>e-mail</th>
            <th scope='col'>room id</th>
            <th scope='col'>check in date</th>
            <th scope='col'>check out date</th>
            <th scope='col'>number of nights</th>
            <th scope='col'>Show profile</th>
          </tr>
        </thead>
        <tbody>
          {results.map(({ id, title, firstName, surname, email, roomId, checkInDate, checkOutDate }) => (
            <tr key={id} className={id === selectedId ? 'selected-row' : ''} onClick={() => handleSelection(id)}>
              <td>{id}</td>
              <td>{title}</td>
              <td>{firstName}</td>
              <td>{surname}</td>
              <td>{email}</td>
              <td>{roomId}</td>
              <td>{checkInDate}</td>
              <td>{checkOutDate}</td>
              <td>{countNumberOfNights(checkInDate, checkOutDate)}</td>
              <td>
                <button className='btn btn-primary' onClick={() => showCustomerProfile(id)}>
                  Show profile
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={customerProfileId !== null}
        onClick={hideCustomerProfile}
      >
        <CustomerProfile id={customerProfileId} />
      </Backdrop>
    </>
  )
}

export default SearchResults
