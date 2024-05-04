import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <header className='App-header'>
        <Link to='/'>CYF Hotel</Link>
        <Link to='/about'>About Us</Link>
      </header>
      <img
        src='https://cf.bstatic.com/xdata/images/hotel/max1024x768/301849517.jpg?k=0cfebc11abf146f5f7c59dff880fae95df61c9e8368691d62e0bda769d2c0ce4&o=&hp=1'
        alt='header pic'
        className='App-logo'
      />
    </div>
  )
}

export default Header
