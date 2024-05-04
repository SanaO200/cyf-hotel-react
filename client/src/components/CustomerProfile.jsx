import { useState, useEffect } from 'react'
import Box from '@mui/material/Box'

const customerProfileStyles = { bgcolor: 'black', padding: '2rem' }

const CustomerProfile = ({ id }) => {
  const [profile, setProfile] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchData = async (url) => {
      setIsLoading(true)
      try {
        const response = await fetch(url)
        if (response.ok) {
          const data = await response.json()
          setProfile(data.foundCustomers)
        } else {
          throw new Error(`server returned status: ${response.statusText}`)
        }
      } catch (error) {
        console.error(error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData(`http://localhost:4000/customers/${id}`)
  }, [id])

  return isLoading ? (
    <div>Loading.....</div>
  ) : profile ? (
    <Box sx={customerProfileStyles}>
      <div className='App-content'>
        <h4>Customer profile:</h4>
        <ul>
          <li>Customer ID: {profile[0].id}</li>
          <li>VIP: {profile[0].vip ? 'no' : 'yes'}</li>
          <li>Email: {profile[0].email}</li>
          <li>Tel: {profile[0].phoneNumber} </li>
        </ul>
      </div>
    </Box>
  ) : null
}

export default CustomerProfile
