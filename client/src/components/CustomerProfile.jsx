import React, {useState, useEffect} from "react"


const CustomerProfile = ({ id, vip, email, phoneNumber }) => {

	const [profile, setProfile] = useState(null)

  useEffect(() => {
    const fetchData = async url => {
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
      }
    }

    fetchData(`http://localhost:4000/customers/${id}`)
  }, [id] )


	return profile ? (
          <div className="App-content">
            <h4>Customer {id} profile</h4>
            <ul>
              <li>Customer ID: {id}</li>
              <li>VIP: {vip ? "Yes" : "No"}</li>
              <li>Email: {email }</li>
              <li>Tel:{phoneNumber}</li>
            </ul>
          </div>
      ) : null
  }
export default CustomerProfile


