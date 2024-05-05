import Bookings from './components/Bookings'
import Header from './components/Header'
import TouristInfoCards from './components/TouristInfoCards'
import Restaurant from './components/Restaurant'
import Footer from './components/Footer'
import ErrorPage from './ErrorPage'
import { Outlet } from 'react-router-dom'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './App.css'

const contacts = ['123 Fake Street, London, E1 4UD', 'hello@fakehotel.com', '0123 456789']

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Header />
        <Outlet />
        <Footer contacts={contacts} />
      </>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: (
          <>
            <TouristInfoCards />
            <Bookings />
            <Restaurant />
          </>
        ),
      },
      {
        path: '/about',
        element: (
          <>
            <h1>About Us</h1>
          </>
        ),
      },
    ],
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
