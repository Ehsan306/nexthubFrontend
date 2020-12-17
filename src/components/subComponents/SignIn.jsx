import React,{useState} from 'react';
import { Card } from 'react-bootstrap'
import "../../CSS/signIn.css"
import FacebookLogin from './FaceBook'
import GoogleLogin from './Gmail'
import EmailIcon from '@material-ui/icons/Email';


import Dialog from '@material-ui/core/Dialog';
function SignIn(props) {
    const [open,setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(true)

    const handleClose = () => {
        setOpen(false)
    }
    
  return (
    <div style={{
        fontFamily: 'Jaldi, sans-serif',
        fontSize : '16px'
    }}>
           <Card className="card-signin" >
            <Card.Body>
                <Card.Title style={{
                    fontSize : '60px',
                    color : '#df362d',
                    fontWeight : 'bold'
                }}>Sign In</Card.Title>
                <br/>
                <br/>
                <br/>
                    <GoogleLogin />
                <br/>
                <br/>
                    <FacebookLogin />
                
                <br/>
                <button class="btn btn-danger btn-block btn-lg">
                    <div className="row">
                        <div className="col-1">
                            <EmailIcon fontSize="large"/>
                        </div>
                        <div className="col-11" onClick={handleOpen} 
                            style={{
                                maxWidth : '46%',
                                fontSize: '16px',
                                marginTop : '5px'
                            }}
                        >
                            Sign in with Email
                        </div>
                    </div>
                        
                </button>
                <br/>
                

                
            </Card.Body>
           </Card>

           <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                    Hello from custom email
            </Dialog>
    </div>
  );
};

}
export default SignIn;