import React,{useState} from 'react';
import '../../CSS/landing.css'
import Dialog from '@material-ui/core/Dialog';
import SignUp from '../subComponents/signUp';


function LandingPage(props) {
  const [open,setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }
    let token = localStorage.usertoken
    return (
      <div>
        <div className="container" style={{
        borderRadius : '10px',
        background: '#F0F3F5'

      }}>

          <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-xl-6 col-xs-12">
                          <div className="container mt-4 mb-5">
                          <div className="row">
                            <div style={{
                              textAlign : 'center'
                            }}>
                              <h1 className="mainHead">
                                A Marketplace for
                                Influencer Brand Deals
                              </h1>
                            </div>
                          </div>
                          <br/>
                          <br/>
                          <br/>
                          <p className="landing-para">
                            An easy way for influencers to create promotion listings and work with top brands.
                          </p>

                          <br/>
                          <br/>
                          {
                            token === undefined
                            ?
                            <div style={{
                              textAlign : 'center'
                            }}>
                                <button className="my-button" onClick={handleOpen}>
                                  <b>Sign up</b>
                                </button>
  
                            </div>
                            :
                            <div></div>
                          }
                          </div>
                    </div>



                    <div className="col-lg-6 col-md-6 col-xl-6 col-xs-12">
                          <div className="container mt-5">
                              <div className="landingBanner" />
                          </div>
                    </div>
                </div>
          </div>
      </div>
          <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <SignUp />
          </Dialog>
      </div>
    );
};


export default LandingPage;
