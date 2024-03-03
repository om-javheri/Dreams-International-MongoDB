import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Navbar(props) {
 

  
  return (
    <div className='Z'>
        <nav className={` navbar transparent     `}>
    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon colorw">Navbar</span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ">
        <li className="nav-item">
          <a className='btn btn-border' href="/" ><button className='btn colorw' >Account</button></a>
        </li>
        <li className="nav-item">
          <Link id='item1' className="btn btn-border" aria-current="page" to="/ShowAndBook"><button className='btn colorw' >{props.navbar_item1}</button></Link>
        </li>
        <li className="nav-item">
          <Link id='item2' className="btn btn-border" aria-current="page" to="/Create"><button className='btn colorw' >{props.navbar_item2}</button></Link>
        </li>
        <li className="nav-item">
          <Link id='item3' className="btn btn-border" aria-current="page" to="/Edit2" ><button className='btn colorw' >{props.navbar_item3}</button></Link>
        </li>
       
       
        
        
      </ul>
      
      <div className="btn-group" role="group" aria-label="Basic mixed styles example">

</div>


  </div>
</nav>
    </div>
  )
}
Navbar.propTypes={
    title:PropTypes.string.isRequired,
    about:PropTypes.string.isRequired
}
Navbar.defaultProps={
    title: "set title here",
    about:"About "
}
