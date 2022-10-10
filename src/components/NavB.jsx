import React from 'react'

import {Link} from 'react-router-dom';
export default function NavB() {
  return (
    <div>
    
    <nav className="navbar navbar-expand-lg">
  <Link className="navbar-brand" to="/">Easy phone store</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav mx-auto" >
      <Link className="nav-item nav-link active" to="/">Home </Link>
      <Link className="nav-item nav-link" to="/Listcellp">Cell phones</Link>
      <Link className="nav-item nav-link" to="/AddPhone">Add Cell Phone</Link>
     
    </div>
  </div>
</nav>
    </div>
  )
}
