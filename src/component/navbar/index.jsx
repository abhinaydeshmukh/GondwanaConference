import { Link } from 'react-router-dom';
import './index.css';

function Navbar() {

  return (
    <div className='navbar-container d-flex justify-content-center p-2'>
      <div className='sub-navbar-container px-2 m-0 w-100 w-md-75 d-flex flex-column flex-md-row align-items-center'>
        <div className='navbar-list-container w-100 w-md-50 m-0 p-2 '>
          <ul className='navbar-item-container mb-0 d-md-flex'>
            <li className='nav-item'><Link className='link-tag' to="/" style={{ backgroundColor: 'rgba(68, 122, 193,1)', color: '#fff' }}>Home</Link></li>
            <li className='nav-item'><Link className='link-tag' to='/about'>About Us</Link></li>
            <li className='nav-item'><Link className='link-tag' to='/speakers'>Speakers</Link></li>
            <li className='nav-item'><Link className='link-tag' to='/events'>Events</Link></li>
            <li className='nav-item'><Link className='link-tag' to='/contact'>Contact</Link></li>
          </ul>
        </div>
        <div className='registration-container w-100 w-md-50 p-2 m-0 d-flex justify-content-center mt-3 mt-md-0 '>
          <button className='btn btn-sm btn-color col-md-8 col-lg-5 btn-primary p-3 fs-6 rounded-0'>
            Buy Tickets Now!
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

