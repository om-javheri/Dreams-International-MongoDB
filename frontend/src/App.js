import React,{ useState } from 'react';
import './App.css';
import ShowNavbar from './components/ShowNavbar';

import ShowAndBook from './components/ShowAndBook';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Create from './components/Create';
import Edit2 from './components/Edit2';
// import 'bootstrap/dist/cssbootstrap.min.css'
import NavbarLimit from './components/NavbarLimit';
import ShowAndBooks from './components/ShowAndBooks';
document.body.style.backgroundColor='white'

export default function App() {
  const [loginStatus, setloginStatus] = useState(true);
  const [loginID,setLoginID]=useState(false)
  const [accountType, setAccountType] = useState(false);



  

    // const [isButtonDisabled, setButtonDisabled] = useState(false);
   
    

    

  return (
    <>


    
        <Router>
<ShowNavbar>
  {!accountType?<NavbarLimit  navbar_item1="Books Information" />:<Navbar  navbar_item1="Books Information" navbar_item2="Add New Books"  navbar_item3="Edit Books" />
}


</ShowNavbar>


            
    <div className="container my-3"  >
    <Routes>
      <Route exact path="/" element={<Textform setAccountType={setAccountType}   setLoginID={setLoginID}  loginStatus={loginStatus} setloginStatus={setloginStatus} />}/>
      {/* <Textform mode={mode}showAlert={showAlert} heading="Enter your text below to analyze"  /> */}
<Route exact path="/Create" element={<Create loginID={loginID}/>}/>
<Route exact path="/Edit2" element={<Edit2/>}/>
{/* <Route exact path='/ConcertEntry' element={<ConcertEntry/>}/> */}
{/* <Route exact path="/Login" element={<Login/>}/> */}


<Route path='/ShowAndBook' element={<ShowAndBook loginID={loginID}/>}/>

<Route path='/ShowAndBooks' element={<ShowAndBooks/>}/>


    </Routes>
    
  

   </div>
  </Router>

    
    </>
  )
}
