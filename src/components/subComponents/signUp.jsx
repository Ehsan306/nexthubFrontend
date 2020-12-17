import React, {useState } from "react";
import { Link, useHistory } from "react-router-dom";

import axios from "axios";
const SignUp = () => {
  const history = useHistory();
  const [firstName, setFirstName] = useState("");
  
  const [email, setEmail] = useState("");
  
  const [password, setPassword] = useState("");

  

  const onSignUp = async(e) => {
    e.preventDefault();
        axios.post("http://localhost:3000/api/users", {
        name: firstName,
       
       
        email: email  ,
        
        password: password,
      })
      .then(function (response) {
        console.log(response);
        history.push("/");
        
      
        //set states here to render in map from response.data
      })
      .catch(function (error) {
        alert(error.response)
       
      })
      .then(function () {
        // always executed
      });
  };

  return (
    <div className="signup-block">
      <div className="signup-wrapper">
       
        <form onSubmit={onSignUp}>
          <div className="signup-container">
            <h4 className="form-title text-center" style={{
              backgroundColor: '#DF362D',
              color: 'white',
              paddingTop: '15px',
              paddingBottom : '15px'
            }}>Create Account</h4>
            <div className="container">
            <div className="form-group">
               <input
                type="text"
                className="form-control"
                id="firstName"
                placeholder="Name"
                onChange={(event) => setFirstName(event.target.value)}
                required
              />
            </div>
         
            
          
            <div className="form-group">
             <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Email"
                onChange={(event) => setEmail(event.target.value)}
                requierd
              />
            </div>
           
            <div className="form-group password-sec">
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
                onChange={(event) => setPassword(event.target.value)}
              />
             
            </div>
            </div>
          </div>
          <div style={{
            paddingLeft : '15px',
            paddingRight : '15px',
            marginBottom: '25px'
          }}>
            <button type="submit" className="my-button float-right">Create Account</button>

            <span>
              Already have an account ? log in
              <Link to="/" className="account-link">
                here
              </Link>
            </span>
          </div>
        </form>
      </div>
      
    </div>
  );
};

export default SignUp;
