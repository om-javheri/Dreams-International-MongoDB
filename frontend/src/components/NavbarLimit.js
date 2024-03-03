import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function NavbarLimit(props) {
  
  return (
    <div>
        <nav className={` navbar transparent `}>
  <div className="container-fluid fs-3">
    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon colorw">User</span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 column-gap-3">
     
        <li className="btn-border">
          <Link className='btn btn-border' to="/" ><button className='btn colorw' >Account</button></Link>
        </li>
        <li className="nav-item">
          <Link to='/ShowAndBooks' id='item1' className="btn btn-border" aria-current="page" ><button className='btn colorw' >{props.navbar_item1}</button></Link>
        </li>
        <li className="nav-item">
          <Link id='item1' className="btn btn-border" aria-current="page" ><button className='btn colorw' >{props.navbar_item2}</button></Link>
        </li>
        <li className="nav-item">
          <Link id='item1' className="btn btn-border" aria-current="page" ><button className='btn colorw' >{props.navbar_item3}</button></Link>
        </li>
        <li className="nav-item">
          <Link id='item1' className="btn btn-border" aria-current="page" ><button className='btn colorw' >{props.navbar_item4}</button></Link>
        </li>
        
        
      </ul>
      
      
      <div className="btn-group" role="group" aria-label="Basic mixed styles example">

</div>


    </div>
  </div>
</nav>
    </div>
  )
}
NavbarLimit.propTypes={
    title:PropTypes.string.isRequired,
    about:PropTypes.string.isRequired
}
NavbarLimit.defaultProps={
    title: "set title here",
    about:"About "
}
