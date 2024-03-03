import React, { useState } from 'react';
import './log.css';
import { useNavigate } from 'react-router-dom';
import validation from './SignupValidation';

const Login=({setloginStatus,setLoginID,setAccountType  })=> {


  const isActive = false;


  const [isLogIn, setIsLogIn] = useState(true);


  const handleChangeClick = () => {
    setIsLogIn((prevIsLogIn) => !prevIsLogIn);
  };







  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleSubmitAuthor = (e) => {
    e.preventDefault();
    const err=validation(values);
    setErrors(err)
if(err.name==="" && err.email==="" && err.password===""){
    fetch("http://localhost:8081/SignupAuthor", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: values.name,
        email: values.email,
        password: values.password,
      
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          console.log(data.message)

        } else {
          console.log(data)
          navigate(handleChangeClick())
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    }
  };

  const handleSubmitReader = (e) => {
    e.preventDefault();
    const err=validation(values);
    setErrors(err)
if(err.name==="" && err.email==="" && err.password===""){
    fetch("http://localhost:8081/SignupReader", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: values.name,
        email: values.email,
        password: values.password,
      
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          console.log(data.message)
        } else {
          console.log(data)
          navigate(handleChangeClick())
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    }
  };

  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };
//for login



  const handleSubmitL = (e) => {
    e.preventDefault();
    const err=validation(values);
    setErrors(err)
    if( err.email==="" && err.password===""){

    fetch("http://localhost:8081/Login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: values.email,
        password: values.password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          setLoginID(data._doc._id)

          console.log(data.message)
        }else{
          const isAuthor =data._doc.accountType;
          setLoginID(data._doc._id)
          console.log(data._doc.accountType)
          console.log(data._doc._id)




          // Example: if user is Author, redirect to Author page
          if (isAuthor==="Author") {
              // setIsLog("true");
              setloginStatus(true)
              setAccountType(true)
              
              console.log(isAuthor)
              console.log(data._doc_id)

              navigate('/ShowAndBook');
          } else {
              // If not admin, redirect to regular reader page
             
              setloginStatus(false)
              setAccountType(false)
              console.log(data)


              navigate('/ShowAndBooks');
          }
        
          
          
          
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    }
  };

  const handleInputL = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };




  return (
    
    
<div className='parent body'>


<div  className={`container1 ${isLogIn ? 'log-in' : ''} ${isActive ? 'active' : ''}  child`}>

  <div className="box "></div>
  <div  className="container1-forms">
    <div className="container1-info">
      <div className="info-item">
        <div className="table">
          <div className="table-cell">
            <p>
              Have an account?
            </p>
            <div className="btn " type="submit" onClick={handleChangeClick}>
              Log in
            </div>
          </div>
        </div>
      </div>
      <div className="info-item">
        <div className="table">
          <div className="table-cell">
            <p>
              Don't have an account? 
            </p>
            <div className="btn" onClick={handleChangeClick}>
              Sign up
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container1-form ">
      <div className="form-item log-in">
        <div className="table">
          <div className="table-cell">
          <form className="mb-3">
            <div>
              {/* <label htmlFor='email'><strong>Email</strong></label> */}
              <input type='email' onChange={handleInputL} className='form-control rounded-0' id="email" name="email" placeholder='Enter Email' />
              {errors.email && <span className='text-danger'>{errors.email}</span>}
            </div>
            <div>
              {/* <label htmlFor='password'><strong>Password</strong></label> */}
              <input type='password' onChange={handleInputL} className='form-control rounded-0' id="password" name="password" placeholder='Enter Password' />
              {errors.password && <span className='text-danger'>{errors.password==="Password Invalid"?errors.password+" or username invalid":errors.password}</span>}
            </div>
            <button type="submit" onClick={handleSubmitL} className='btn btn-success ' >Log in</button>
            <a  href='#' className='FP'>Forget Password</a>
            
            
          </form>
          </div>
        </div>
      </div>
      <div className="form-item sign-up color">
        <div className="table">
          <div className="table-cell ">
          <form className="mb-5 ">
            <div>
            <div>
              {/* <label htmlFor='text'><strong>Name</strong></label> */}
              <input type='text' onChange={handleInput} className='form-control rounded-0 ' id="name" name="name" placeholder='Enter Name' />
              {errors.name && <span className='text-danger'>{errors.name}</span>}
            </div>
            <div>
              {/* <label htmlFor='email'><strong>Email</strong></label> */}
              <input type='email' onChange={handleInput} className='form-control rounded-0' id="email" name="email" placeholder='Enter Email' />
              {errors.email && <span className='text-danger'>{errors.email}</span>}
            </div>
            <div>
              {/* <label htmlFor='password'><strong>Password</strong></label> */}
              <input type='password' onChange={handleInput} className='form-control rounded-0' id="password" name="password" placeholder='Enter Password' />
              {errors.password && <span className='text-danger'>{errors.password}</span>}
            </div>
            <button type="button" class="btn btn-success" onClick={handleSubmitAuthor}>Signup as Author</button>



            <button type="submit" onClick={handleSubmitReader} className='btn btn-success' >Signup as Reader</button>
            <a>You agree to terms and conditions*</a>
            </div>
          </form>
             
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

</div>

  
  );
}


export default Login;