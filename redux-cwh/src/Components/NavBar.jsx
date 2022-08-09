import React from 'react'
import { useSelector } from 'react-redux'

export default function NavBar() {
  const amount = useSelector(state => state.amount)

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">About</a>
              </li>
            </ul>
            <div>
              <button disabled className='btn btn-sm btn-dark'>Balance: {amount}</button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
