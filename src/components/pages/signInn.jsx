import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import  axios  from 'axios';
const formValid = ({ formErrors, ...rest }) => {
    let valid = true;
  
    // validate form errors being empty
    Object.values(formErrors).forEach((val) => {
      val.length > 0 && (valid = false);
    });
  
    // validate the form was filled out
    Object.values(rest).forEach((val) => {
      val === "" && (valid = false);
    });
  
    return valid;
  };
  const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );
  


class SignInn extends Component {
    constructor(props) {
        super(props);
        this.state = {
          email: "",
          password: "",
          formErrors: {
            email: "",
            
          },
         
         
        };
        this.onChange = this.handleChange.bind(this);
        this.onSubmit = this.handleSubmit.bind(this);
      }

      handleChange = (e) => {
        const { name, value } = e.target;
        let formErrors = { ...this.state.formErrors };
        switch (name) {
          case "email":
            formErrors.email = emailRegex.test(value)
              ? ""
              : "invalid email address";
            break;
    
          default:
            break;
        }
        this.setState({
          formErrors,
          [name]: value,
          [e.target.name]: e.target.value,
        });
      };
      handleSubmit = (e) => {
        e.preventDefault();
        if (formValid(this.state)) {
          const user = {
            email: this.state.email,
            password: this.state.password,
          };
          axios.post('http://localhost:3000/api/auth',user).then((res) => {

            localStorage.setItem('usertoken',res.data)
            
            this.props.history.push("/");
          });
        } else {
          
        }
      };
     
    
    render() { 
        const { formErrors } = this.state;
        return ( 


            <div className="container ">
            <div className="row">
              <div className="col-md-6 my-2 mx-auto ">
                <form noValidate onSubmit={this.handleSubmit} className="z-depth-1 p-4 ">
             
                  <h6 className="font-weight-normal text-center text-uppercase mb-3" style={{color:"Blue"}}>Sign In</h6>
                  <div className="form-group">
                    <input
                  
                      type="email"
                      
                      className={
                        formErrors.email.length > 0
                          ? "error form-control"
                          : "form-control"
                      }
                      name="email"
                      placeholder="Enter your Email"
                      value={this.state.email}
                      onChange={this.handleChange}
                      autoFocus
                    />
                    {formErrors.email.length > 0 && (
                      <span className="errorMessage">{formErrors.email}</span>
                    )}
                  </div>
    
                  <div className="form-group">
                    <input
                  
                      type="password"
                      className="form-control"
                      name="password"
                      placeholder="Enter your Password"
                      value={this.state.password}
                      onChange={this.handleChange}
                    />
                  </div>
                  <br />
                  <button
                    type="submit"
                    className="btn btn-md btn-block btn-primary "
                    
                  >
                    Sign in
                  </button>
                  
                <Link to="/forget-password" className="text-center">Forgot password?</Link>
                  
                </form>
              </div>
            </div>
          </div>

         );
    }
}
 
export default SignInn;