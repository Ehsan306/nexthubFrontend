import React,{Component} from 'react';
import { NavLink } from 'react-router-dom';
import profilepic from '../../images/profilePic.png'
import { Link, withRouter} from "react-router-dom";




import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    
} from 'reactstrap';
import SignIn from "../subComponents/SignIn"
import Dialog from '@material-ui/core/Dialog';
import '../../CSS/header.css';

class Header extends Component{

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            open : false
        };
    }


    componentDidMount(){
      console.log(localStorage)
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    handleOpen = () => {
      this.setState({
        open: true
    });
    }
    handleClose = () => {
      this.setState({
        open: false
    });
    };


    userLogOut() {
     
  
      // localStorage.removeItem("usertoken");
        window.localStorage.clear();
        window.location.reload()
      //  this.props.history.push("/");

      // console.log(localStorage)

    }

    render() {

      const loginNave = (<div id="header-container">
      <Navbar color="light" light expand="lg">
          
      <NavLink to="/">
        <NavbarBrand href="#NextHub-Landing-Page" className="logo">
          <span className="logo-span1">
            Next
          </span>
          <span className="logo-span2">
            Hub
          </span>
        </NavbarBrand>
      </NavLink>
          <NavbarToggler  onClick={this.toggle} >
          
          <div id="close-icon" className={this.state.isOpen ? "open" : "" }>
              <span></span>
              <span></span>
              <span></span>
          </div>
          
          </NavbarToggler>
          <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavLink id="content-link" to="/searchMarketPlace">
                  <NavItem>
                      
                        <b className="nav-links" onClick={() => {
                          this.setState({
                            isOpen : !this.state.isOpen
                          })
                        }}>
                          Marketplace
                        </b>
                      
                  </NavItem>
                  </NavLink>
                  <Link to="/signInn">
                    <NavItem>
                        <span onClick={this.handleOpen}>
                        <b className="nav-links" 
                        // onClick={() => {
                        //     this.setState({
                        //       isOpen : !this.state.isOpen
                        //     })
                        //   }}
                          >
                          Sign in
                        </b>
                        </span>
                    </NavItem>
                  </Link>
                  
              </Nav>
          </Collapse>
      </Navbar>

      <Dialog onClose={this.handleClose} aria-labelledby="customized-dialog-title" open={this.state.open}>
            <SignIn />
      </Dialog>
  </div>

);
     const userNave =( <div id="header-container">
     <Navbar color="light" light expand="lg">
         
     <NavLink to="/">
       <NavbarBrand href="#NextHub-Landing-Page" className="logo">
         <span className="logo-span1">
           Next
         </span>
         <span className="logo-span2">
           Hub
         </span>
       </NavbarBrand>
     </NavLink>
         <NavbarToggler  onClick={this.toggle} >
         
         <div id="close-icon" className={this.state.isOpen ? "open" : "" }>
             <span></span>
             <span></span>
             <span></span>
         </div>
         
         </NavbarToggler>
         <Collapse isOpen={this.state.isOpen} navbar>
             <Nav className="ml-auto" navbar>
               <NavLink id="content-link" to="/searchMarketPlace">
                 <NavItem>
                     
                       <b className="nav-links" onClick={() => {
                         this.setState({
                           isOpen : !this.state.isOpen
                         })
                       }}>
                         Marketplace
                       </b>
                     
                 </NavItem>
                 </NavLink>
                 <NavItem onClick={()=>this.userLogOut()}>
                     <span >
                     <b className="nav-links"  >
                       Sign Out
                     </b>
                     </span>
                 </NavItem>


                 <NavItem>
                 <span onClick={this.handleOpen}>
                 <b className="nav-links" onClick={() => {
                     this.setState({
                       isOpen : !this.state.isOpen
                     })
                   }}>
                   <img src={profilepic} style={{height:"50px" ,width:"50px", borderRadius:"26px"}} alt="#####"/>
                 </b>
                 </span>
             </NavItem>
                 
             </Nav>
         </Collapse>
     </Navbar>

     <Dialog onClose={this.handleClose} aria-labelledby="customized-dialog-title" open={this.state.open}>
           <SignIn />
     </Dialog>
 </div>)
      
        return (

          <div>
          {!localStorage.usertoken
            ? loginNave
            : userNave
            }
        </div>
        )
    }
}

export default  withRouter(Header);