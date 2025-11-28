import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <nav className="full-bleed navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3">
      <div className="container-fluid">
        {/* <a className="navbar-brand d-flex align-items-center" href="/"> */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src={logo}
            alt="Logo"
            style={{ height: '48px', width: 'auto', verticalAlign: 'middle', marginRight: '8px' }}
          />
          TicketHive
          </Link>
        {/* </a> */}
        
        

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-controls="mainNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="w-100 text-center">
            <h3 className="header-msg mb-0">Your Hive for the Latest Concert Buzz</h3>
        </div>
        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}