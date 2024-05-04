import Bookings from './components/Bookings'
import Header from './components/Header'
import TouristInfoCards from './components/TouristInfoCards'
import Restaurant from './components/Restaurant'
import Footer from './components/Footer'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './App.css'

const contacts = ['123 Fake Street, London, E1 4UD', 'hello@fakehotel.com', '0123 456789']

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Header />
        <TouristInfoCards />
        <Bookings />
        <Restaurant />
        <Footer contacts={contacts} />
      </>
    ),
  },
  {
    path: '/about',
    element: (
      <>
        <Header />
        <h1>About Us</h1>
        <Footer contacts={contacts} />
      </>
    ),
  },
])

const App = () => {
  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
