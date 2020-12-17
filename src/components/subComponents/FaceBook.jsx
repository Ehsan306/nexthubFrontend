import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import FacebookLogin from 'react-facebook-login';
import "../../CSS/signIn.css"
function FaceBook(props) {

    const responseFacebook = (response) => {
        console.log(response);
        }
    return (
            <FacebookLogin
                appId="849538692469596"
                autoLoad={false}
                fields="name,email,picture"
                callback={responseFacebook}
                cssClass="btn btnFacebook"
                icon={ <FacebookIcon style={{
                    fontSize : '37px'
                }}/> }
                textButton = "&nbsp;&nbsp;Sign In with Facebook"                                                                
                />
                
        
    );
}

export default FaceBook;