import React from 'react';
import GoogleLogin from 'react-google-login';
import GoogleIcon from '../../images/googleIcon.png'
import "../../CSS/signIn.css"
function Gmail(props) {

    const responseGoogle = (response) => {
        console.log(response);
      }
    
    return (
                   <GoogleLogin
                    autoLoad={false}
                    clientId="104590688028-pn83folkf54ftg3u46s08enn1koaocvs.apps.googleusercontent.com"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                    className="btn btnGoogle"
                    icon={false}
                   >
                         <img src={GoogleIcon} alt="" style={{
                           width : '25px',
                           marginRight : '15px',
                           marginLeft : '4px'
                         }} /> 
                         <span>
                           Sign In with Google
                           </span>
                   </GoogleLogin>
                
    );
}

export default Gmail;